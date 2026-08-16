from pathlib import Path
from collections import deque
import json
import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from rembg import remove, new_session

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "tim" / "cijeli-tim.jpg"
OUT_DIR = ROOT / "storage" / "app"
PREVIEW = OUT_DIR / "people-masks"
PREVIEW.mkdir(parents=True, exist_ok=True)

W, H = 2048, 1365
img = Image.open(SRC).convert("RGB")

PEOPLE = [
    {"id": 1, "front": True, "box": (108, 448, 272, 1214)},
    {"id": 4, "front": True, "box": (288, 454, 452, 1216)},
    {"id": 5, "front": True, "box": (432, 440, 622, 1220)},
    {"id": 7, "front": True, "box": (618, 412, 842, 1222)},
    {"id": 10, "front": True, "box": (888, 394, 1132, 1236)},
    {"id": 13, "front": True, "box": (1198, 438, 1402, 1216)},
    {"id": 15, "front": True, "box": (1408, 414, 1622, 1220)},
    {"id": 16, "front": True, "box": (1570, 408, 1788, 1216)},
    {"id": 17, "front": True, "box": (1748, 430, 1972, 1236)},
    {"id": 2, "front": False, "box": (224, 426, 332, 655)},
    {"id": 3, "front": False, "box": (348, 426, 454, 652)},
    {"id": 6, "front": False, "box": (608, 410, 724, 652)},
    {"id": 8, "front": False, "box": (768, 436, 872, 722)},
    {"id": 9, "front": False, "box": (848, 418, 982, 802)},
    {"id": 11, "front": False, "box": (1052, 416, 1194, 782)},
    {"id": 12, "front": False, "box": (1148, 396, 1274, 702)},
    {"id": 14, "front": False, "box": (1318, 388, 1464, 782)},
]

print("loading u2net_human_seg…")
session = new_session("u2net_human_seg")


def components(binary: np.ndarray):
    h, w = binary.shape
    labels = np.zeros((h, w), dtype=np.int32)
    comps = []
    current = 0
    for y in range(h):
        for x in range(w):
            if not binary[y, x] or labels[y, x]:
                continue
            current += 1
            q = deque([(x, y)])
            labels[y, x] = current
            xs, ys = [x], [y]
            while q:
                px, py = q.popleft()
                for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = px + dx, py + dy
                    if 0 <= nx < w and 0 <= ny < h and binary[ny, nx] and not labels[ny, nx]:
                        labels[ny, nx] = current
                        q.append((nx, ny))
                        xs.append(nx)
                        ys.append(ny)
            comps.append(
                {
                    "id": current,
                    "area": len(xs),
                    "cx": float(np.mean(xs)),
                    "cy": float(np.mean(ys)),
                    "minx": min(xs),
                    "maxx": max(xs),
                    "miny": min(ys),
                    "maxy": max(ys),
                }
            )
    return labels, comps


def pick_component(binary: np.ndarray, front: bool):
    h, w = binary.shape
    labels, comps = components(binary)
    if not comps:
        return np.zeros_like(binary, dtype=np.uint8)
    scored = []
    for c in comps:
        height = c["maxy"] - c["miny"] + 1
        # Front-row people occupy most of the crop height; back-row sit in the top half.
        if front:
            score = c["area"] + height * 18 + (1.0 - abs(c["cx"] / w - 0.5)) * 4000
            if c["maxy"] < h * 0.55:
                score *= 0.15
        else:
            score = c["area"] + (1.0 - abs(c["cx"] / w - 0.5)) * 2500
            if c["cy"] > h * 0.72:
                score *= 0.2
        scored.append((score, c["id"]))
    scored.sort(reverse=True)
    return (labels == scored[0][1]).astype(np.uint8)


def morph_close(mask: np.ndarray, radius=2):
    from numpy.lib.stride_tricks import sliding_window_view

    pad = np.pad(mask, radius)
    win = sliding_window_view(pad, (radius * 2 + 1, radius * 2 + 1))
    dilated = (win.max(axis=(-1, -2)) > 0).astype(np.uint8)
    pad2 = np.pad(dilated, radius)
    win2 = sliding_window_view(pad2, (radius * 2 + 1, radius * 2 + 1))
    return (win2.min(axis=(-1, -2)) > 0).astype(np.uint8)


def fill_small_holes(mask: np.ndarray, max_hole: int):
    inv = 1 - mask
    labels, comps = components(inv)
    out = mask.copy()
    h, w = mask.shape
    for c in comps:
        touches = c["minx"] == 0 or c["miny"] == 0 or c["maxx"] == w - 1 or c["maxy"] == h - 1
        if not touches and c["area"] <= max_hole:
            out[labels == c["id"]] = 1
    return out


def hole_contours(mask: np.ndarray, min_area=180):
    inv = 1 - mask
    labels, comps = components(inv)
    h, w = mask.shape
    holes = []
    for c in comps:
        touches = c["minx"] == 0 or c["miny"] == 0 or c["maxx"] == w - 1 or c["maxy"] == h - 1
        if touches or c["area"] < min_area:
            continue
        hole = (labels == c["id"]).astype(np.uint8)
        pts = trace(hole)
        if len(pts) > 8:
            holes.append(pts)
    return holes


def trace(mask: np.ndarray):
    h, w = mask.shape
    inside = lambda x, y: 0 <= x < w and 0 <= y < h and mask[y, x] == 1
    sx = sy = -1
    for y in range(h):
        for x in range(w):
            if inside(x, y) and not inside(x, y - 1):
                sx, sy = x, y
                break
        if sx >= 0:
            break
    if sx < 0:
        return []
    dirs = [(0, -1), (1, -1), (1, 0), (1, 1), (0, 1), (-1, 1), (-1, 0), (-1, -1)]
    pts = []
    x, y, d = sx, sy, 0
    for _ in range(120000):
        pts.append((x, y))
        found = False
        for k in range(8):
            i = (d + 6 + k) % 8
            nx, ny = x + dirs[i][0], y + dirs[i][1]
            if inside(nx, ny):
                x, y, d = nx, ny, i
                found = True
                break
        if not found:
            break
        if x == sx and y == sy and len(pts) > 16:
            break
    return pts


def rdp(points, eps):
    if len(points) < 3:
        return points
    ax, ay = points[0]
    bx, by = points[-1]
    dx, dy = bx - ax, by - ay
    length = (dx * dx + dy * dy) ** 0.5 or 1
    max_d = idx = 0
    for i in range(1, len(points) - 1):
        d = abs(dy * points[i][0] - dx * points[i][1] + bx * ay - by * ax) / length
        if d > max_d:
            max_d, idx = d, i
    if max_d > eps:
        return rdp(points[: idx + 1], eps)[:-1] + rdp(points[idx:], eps)
    return [points[0], points[-1]]


def shift(pts, x0, y0):
    return [(x + x0, y + y0) for x, y in pts]


full_masks = {}
for p in PEOPLE:
    x0, y0, x1, y1 = p["box"]
    crop = img.crop((x0, y0, x1, y1))
    cut = remove(crop, session=session)
    alpha = np.array(cut.split()[-1])
    binary = (alpha > 120).astype(np.uint8)
    picked = pick_component(binary, p["front"])
    picked = morph_close(picked, 2)
    picked = fill_small_holes(picked, 160 if p["front"] else 60)
    # Front-row: drop isolated head blobs in the top 22% that don't connect downward
    if p["front"]:
        labels, comps = components(picked)
        keep = np.zeros_like(picked)
        ch, cw = picked.shape
        for c in comps:
            if c["maxy"] < ch * 0.42 and c["area"] < 9000:
                continue
            keep[labels == c["id"]] = 1
        picked = keep
    full = np.zeros((H, W), dtype=np.uint8)
    full[y0:y1, x0:x1] = picked
    full_masks[p["id"]] = full
    preview = Image.fromarray((picked * 255).astype(np.uint8)).convert("L")
    rgb_prev = crop.convert("RGBA")
    overlay_p = Image.new("RGBA", crop.size, (35, 188, 166, 0))
    ov = np.array(overlay_p)
    ov[..., 3] = (picked * 110).astype(np.uint8)
    ov[..., 0] = 35
    ov[..., 1] = 188
    ov[..., 2] = 166
    composed = Image.alpha_composite(rgb_prev, Image.fromarray(ov, "RGBA"))
    composed.convert("RGB").save(PREVIEW / f"p{p['id']:02d}.jpg", quality=88)
    print(f"id {p['id']} pixels {int(picked.sum())}")

front_union = np.zeros((H, W), dtype=np.uint8)
for p in PEOPLE:
    if p["front"]:
        front_union |= full_masks[p["id"]]
for p in PEOPLE:
    if not p["front"]:
        full_masks[p["id"]] &= 1 - front_union

results = {}
for p in PEOPLE:
    mask = full_masks[p["id"]]
    outer = trace(mask)
    holes = hole_contours(mask, min_area=220 if p["front"] else 99999)
    outer_s = rdp(outer, 1.8)
    hole_s = [rdp(h, 1.8) for h in holes]
    results[p["id"]] = {"outer": outer_s, "holes": hole_s}
    print(f"person-{p['id']:02d} outer {len(outer)}->{len(outer_s)} holes {len(hole_s)}")

colors = {
    1: (229, 33, 52),
    2: (35, 188, 166),
    3: (37, 99, 235),
    4: (217, 119, 6),
    5: (124, 58, 237),
    6: (219, 39, 119),
    7: (5, 150, 105),
    8: (8, 145, 178),
    9: (234, 88, 12),
    10: (79, 70, 229),
    11: (22, 163, 74),
    12: (192, 38, 211),
    13: (13, 148, 136),
    14: (220, 38, 38),
    15: (37, 99, 235),
    16: (202, 138, 4),
    17: (147, 51, 234),
}

overlay = img.copy().convert("RGBA")
draw = ImageDraw.Draw(overlay, "RGBA")
payload = {}
for pid, data in sorted(results.items()):
    pts = data["outer"]
    if len(pts) < 3:
        continue
    color = colors[pid]
    draw.polygon(pts, fill=(*color, 100), outline=(*color, 235))
    for hole in data["holes"]:
        draw.polygon(hole, fill=(0, 0, 0, 0), outline=(*color, 235))
    draw.text((pts[0][0], max(0, pts[0][1] - 22)), str(pid), fill=(*color, 255))
    payload[f"person-{pid:02d}"] = {
        "outer": " ".join(f"{x},{y}" for x, y in pts),
        "holes": [" ".join(f"{x},{y}" for x, y in h) for h in data["holes"]],
    }

overlay.convert("RGB").save(OUT_DIR / "team-masks-overlay.jpg", quality=86)
(OUT_DIR / "auto-masks.json").write_text(json.dumps(payload, indent=2), encoding="utf-8")
print("wrote overlay + json")
