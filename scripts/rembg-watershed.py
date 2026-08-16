from pathlib import Path
from collections import deque
import json
import numpy as np
from PIL import Image, ImageDraw
from rembg import remove, new_session

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "tim" / "cijeli-tim.jpg"
OUT = ROOT / "storage" / "app"
W, H = 2048, 1365

img = Image.open(SRC).convert("RGB")

# Multiple seeds per person so Voronoi does not steal a torso or a leg.
SEEDS = [
    {"id": 1, "points": [(200, 520), (198, 720), (195, 980), (188, 1175), (228, 1178)], "ymax": 1220},
    {"id": 2, "points": [(278, 500), (282, 560)], "ymax": 660},
    {"id": 3, "points": [(402, 500), (408, 560)], "ymax": 660},
    {"id": 4, "points": [(368, 520), (360, 740), (350, 1000), (335, 1188), (400, 1188)], "ymax": 1220},
    {"id": 5, "points": [(528, 510), (520, 740), (510, 1000), (492, 1188), (568, 1188)], "ymax": 1220},
    {"id": 6, "points": [(668, 450), (670, 520)], "ymax": 655},
    {"id": 7, "points": [(728, 470), (720, 620), (715, 820), (690, 1100), (690, 1192), (790, 1192)], "ymax": 1225},
    {"id": 8, "points": [(822, 490), (828, 580)], "ymax": 730},
    {"id": 9, "points": [(912, 480), (918, 600), (922, 720)], "ymax": 810},
    {"id": 10, "points": [(1008, 450), (1000, 700), (990, 950), (950, 1205), (1045, 1205)], "ymax": 1238},
    {"id": 11, "points": [(1118, 470), (1124, 600)], "ymax": 790},
    {"id": 12, "points": [(1210, 460), (1216, 560)], "ymax": 710},
    {"id": 13, "points": [(1288, 510), (1280, 720), (1270, 980), (1255, 1188), (1335, 1188)], "ymax": 1220},
    {"id": 14, "points": [(1388, 460), (1394, 600)], "ymax": 790},
    {"id": 15, "points": [(1512, 480), (1505, 720), (1495, 1000), (1465, 1190), (1555, 1190)], "ymax": 1222},
    {"id": 16, "points": [(1670, 470), (1660, 720), (1650, 1000), (1635, 1188), (1705, 1188)], "ymax": 1220},
    {"id": 17, "points": [(1850, 500), (1840, 740), (1830, 1020), (1805, 1208), (1895, 1208)], "ymax": 1238},
]

cached = OUT / "rembg-full.png"
if cached.exists():
    print("using cached rembg mask")
    mask = (np.array(Image.open(cached).convert("L")) > 110).astype(np.uint8)
else:
    print("rembg full photo…")
    session = new_session("u2net_human_seg")
    cut = remove(img, session=session)
    alpha = np.array(cut.split()[-1])
    mask = (alpha > 110).astype(np.uint8)

# close small gaps
from numpy.lib.stride_tricks import sliding_window_view

def morph_close(m, r=2):
    pad = np.pad(m, r)
    win = sliding_window_view(pad, (r * 2 + 1, r * 2 + 1))
    dil = (win.max(axis=(-1, -2)) > 0).astype(np.uint8)
    pad2 = np.pad(dil, r)
    win2 = sliding_window_view(pad2, (r * 2 + 1, r * 2 + 1))
    return (win2.min(axis=(-1, -2)) > 0).astype(np.uint8)

mask = morph_close(mask, 2)
# Dark green / navy scrubs that rembg often drops
rgb = np.array(img)
r, g, b = rgb[..., 0].astype(np.int16), rgb[..., 1].astype(np.int16), rgb[..., 2].astype(np.int16)
luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
dark_green = (luma < 95) & (g > r + 4) & (g > b - 8) & (g > 28) & (g < 110)
navy = (luma < 80) & (b >= g - 6) & (b > r + 4) & (b > 25)
for x0, y0, x1, y1 in ((610, 420, 850, 1225), (430, 440, 630, 800), (1140, 400, 1280, 720), (1310, 390, 1470, 800)):
    region = np.zeros((H, W), dtype=bool)
    region[y0:y1, x0:x1] = True
    mask[region & (dark_green | navy)] = 1
mask = morph_close(mask, 2)
print("mask pixels", int(mask.sum()))
Image.fromarray((mask * 255).astype(np.uint8)).save(OUT / "rembg-full-expanded.png")

# If a seed is not on the mask, search nearby
def snap(x, y):
    if mask[y, x]:
        return x, y
    for rad in range(1, 90):
        for dy in range(-rad, rad + 1):
            for dx in range(-rad, rad + 1):
                nx, ny = x + dx, y + dy
                if 0 <= nx < W and 0 <= ny < H and mask[ny, nx]:
                    return nx, ny
    print(f"WARN seed {x},{y} not on mask")
    return None

labels = np.zeros((H, W), dtype=np.int16)
q = deque()
for s in SEEDS:
    placed = 0
    for pt in s["points"]:
        snapped = snap(*pt)
        if snapped is None:
            continue
        x, y = snapped
        if labels[y, x]:
            continue
        labels[y, x] = s["id"]
        q.append((x, y, s["id"], s["ymax"]))
        placed += 1
    s["skip"] = placed == 0
    print(f"seed {s['id']} placed {placed}")

# Multi-source BFS Voronoi constrained to rembg mask and ymax
while q:
    x, y, lid, ymax = q.popleft()
    for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nx, ny = x + dx, y + dy
        if nx < 0 or ny < 0 or nx >= W or ny >= H:
            continue
        if ny > ymax or not mask[ny, nx] or labels[ny, nx]:
            continue
        labels[ny, nx] = lid
        q.append((nx, ny, lid, ymax))

# Fill tiny holes per label
def components(binary):
    h, w = binary.shape
    lab = np.zeros((h, w), dtype=np.int32)
    comps = []
    cur = 0
    for y in range(h):
        row = binary[y]
        for x in range(w):
            if not row[x] or lab[y, x]:
                continue
            cur += 1
            dq = deque([(x, y)])
            lab[y, x] = cur
            area = 0
            minx = maxx = x
            miny = maxy = y
            while dq:
                px, py = dq.popleft()
                area += 1
                if px < minx:
                    minx = px
                if px > maxx:
                    maxx = px
                if py < miny:
                    miny = py
                if py > maxy:
                    maxy = py
                for ddx, ddy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                    nx, ny = px + ddx, py + ddy
                    if 0 <= nx < w and 0 <= ny < h and binary[ny, nx] and not lab[ny, nx]:
                        lab[ny, nx] = cur
                        dq.append((nx, ny))
            comps.append((cur, area, minx, miny, maxx, maxy))
    return lab, comps

for s in SEEDS:
    if s.get("skip"):
        continue
    lid = s["id"]
    binary = (labels == lid).astype(np.uint8)
    inv = 1 - binary
    lab, comps = components(inv)
    for cid, area, minx, miny, maxx, maxy in comps:
        touches = minx == 0 or miny == 0 or maxx == W - 1 or maxy == H - 1
        if not touches and area <= 140:
            labels[lab == cid] = lid

def trace(binary):
    h, w = binary.shape
    ys, xs = np.where(binary)
    if len(xs) == 0:
        return []
    x0, x1 = xs.min(), xs.max()
    y0, y1 = ys.min(), ys.max()
    inside = lambda x, y: 0 <= x < w and 0 <= y < h and binary[y, x] == 1
    sx = sy = -1
    for y in range(y0, y1 + 1):
        for x in range(x0, x1 + 1):
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
    for _ in range(200000):
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
        if x == sx and y == sy and len(pts) > 20:
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

def holes_of(binary, min_area=200):
    lab, comps = components(1 - binary)
    h, w = binary.shape
    out = []
    for cid, area, minx, miny, maxx, maxy in comps:
        touches = minx == 0 or miny == 0 or maxx == w - 1 or maxy == h - 1
        if touches or area < min_area:
            continue
        hole = (lab == cid).astype(np.uint8)
        pts = trace(hole)
        if len(pts) > 10:
            out.append(pts)
    return out

results = {}
for s in SEEDS:
    if s.get("skip"):
        results[s["id"]] = {"outer": [], "holes": [], "pixels": 0}
        print(f"person-{s['id']:02d} SKIPPED")
        continue
    binary = (labels == s["id"]).astype(np.uint8)
    outer = trace(binary)
    holes = holes_of(binary, 220)
    outer_s = rdp(outer, 1.15)
    hole_s = [rdp(h, 1.15) for h in holes]
    results[s["id"]] = {"outer": outer_s, "holes": hole_s, "pixels": int(binary.sum())}
    print(f"person-{s['id']:02d} px {binary.sum()} outer {len(outer)}->{len(outer_s)} holes {len(hole_s)}")

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
    draw.polygon(pts, fill=(*color, 105), outline=(*color, 240))
    for hole in data["holes"]:
        draw.polygon(hole, fill=(255, 255, 255, 0), outline=(*color, 240))
    draw.text((pts[0][0], max(8, pts[0][1] - 18)), str(pid), fill=(*color, 255))
    payload[f"person-{pid:02d}"] = {
        "outer": " ".join(f"{x},{y}" for x, y in pts),
        "holes": [" ".join(f"{x},{y}" for x, y in h) for h in data["holes"]],
    }

overlay.convert("RGB").save(OUT / "team-masks-overlay.jpg", quality=88)
(OUT / "auto-masks.json").write_text(json.dumps(payload, indent=2), encoding="utf-8")
print("done")
