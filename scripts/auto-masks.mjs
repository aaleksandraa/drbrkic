import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const W = 2048;
const H = 1365;
const { data } = await sharp('public/images/tim/cijeli-tim.jpg')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

const idx = (x, y) => (y * W + x) * 4;
const rgb = (x, y) => {
    const i = idx(x, y);
    return [data[i], data[i + 1], data[i + 2]];
};
const lum = (c) => 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
const sat = (c) => {
    const max = Math.max(c[0], c[1], c[2]);
    const min = Math.min(c[0], c[1], c[2]);
    return max === 0 ? 0 : (max - min) / max;
};
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

function isSceneBg(c, y) {
    const L = lum(c);
    const S = sat(c);
    if (L > 228 && S < 0.08) return true; // white wall / door
    if (y > 1050 && L > 145 && L < 210 && S < 0.07) return true; // grey floor
    if (c[2] > c[0] + 40 && c[2] > c[1] + 15 && L > 70 && L < 170) return true; // blue chairs
    return false;
}

function floodIndependent(seeds, box, threshold) {
    const [x0, y0, x1, y1] = box;
    const mask = new Uint8Array(W * H);
    const refs = seeds.map(([x, y]) => rgb(x, y));
    const q = [];
    for (const [x, y] of seeds) {
        if (x < 0 || y < 0 || x >= W || y >= H) continue;
        mask[y * W + x] = 1;
        q.push(x, y);
    }
    let qi = 0;
    while (qi < q.length) {
        const x = q[qi++];
        const y = q[qi++];
        for (const [dx, dy] of [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ]) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx < x0 || nx > x1 || ny < y0 || ny > y1) continue;
            const p = ny * W + nx;
            if (mask[p]) continue;
            const n = rgb(nx, ny);
            if (isSceneBg(n, ny)) continue;
            let best = 1e9;
            for (const r of refs) best = Math.min(best, dist(n, r));
            if (best > threshold) continue;
            const edge = dist(n, rgb(x, y));
            if (edge > 55 && best > threshold * 0.55) continue;
            mask[p] = 1;
            q.push(nx, ny);
        }
    }
    return mask;
}

function dilate(mask, box, times = 1) {
    const [x0, y0, x1, y1] = box;
    let cur = mask;
    for (let t = 0; t < times; t++) {
        const next = cur.slice();
        for (let y = y0; y <= y1; y++) {
            for (let x = x0; x <= x1; x++) {
                if (cur[y * W + x]) continue;
                let n = 0;
                for (let dy = -1; dy <= 1; dy++) {
                    for (let dx = -1; dx <= 1; dx++) {
                        const nx = x + dx;
                        const ny = y + dy;
                        if (nx < x0 || nx > x1 || ny < y0 || ny > y1) continue;
                        if (cur[ny * W + nx]) n++;
                    }
                }
                if (n >= 3) next[y * W + x] = 1;
            }
        }
        cur = next;
    }
    return cur;
}

function fillHoles(mask, box, maxHole) {
    const [x0, y0, x1, y1] = box;
    const w = x1 - x0 + 1;
    const seen = new Uint8Array((x1 - x0 + 1) * (y1 - y0 + 1));
    const at = (x, y) => (y - y0) * w + (x - x0);
    for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
            if (mask[y * W + x] || seen[at(x, y)]) continue;
            const cells = [x, y];
            seen[at(x, y)] = 1;
            let touches = false;
            for (let i = 0; i < cells.length; i += 2) {
                const cx = cells[i];
                const cy = cells[i + 1];
                for (const [dx, dy] of [
                    [1, 0],
                    [-1, 0],
                    [0, 1],
                    [0, -1],
                ]) {
                    const nx = cx + dx;
                    const ny = cy + dy;
                    if (nx < x0 || nx > x1 || ny < y0 || ny > y1) {
                        touches = true;
                        continue;
                    }
                    if (mask[ny * W + nx] || seen[at(nx, ny)]) continue;
                    seen[at(nx, ny)] = 1;
                    cells.push(nx, ny);
                }
            }
            if (!touches && cells.length / 2 <= maxHole) {
                for (let i = 0; i < cells.length; i += 2) mask[cells[i + 1] * W + cells[i]] = 1;
            }
        }
    }
}

function contour(mask, box) {
    const [x0, y0, x1, y1] = box;
    const inside = (x, y) => x >= 0 && y >= 0 && x < W && y < H && mask[y * W + x] === 1;
    let sx = -1;
    let sy = -1;
    outer: for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
            if (inside(x, y) && !inside(x, y - 1)) {
                sx = x;
                sy = y;
                break outer;
            }
        }
    }
    if (sx < 0) return [];
    const dirs = [
        [0, -1],
        [1, -1],
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
    ];
    const pts = [];
    let x = sx;
    let y = sy;
    let dir = 0;
    for (let step = 0; step < 50000; step++) {
        pts.push([x, y]);
        let found = false;
        for (let k = 0; k < 8; k++) {
            const i = (dir + 6 + k) % 8;
            const nx = x + dirs[i][0];
            const ny = y + dirs[i][1];
            if (inside(nx, ny)) {
                x = nx;
                y = ny;
                dir = i;
                found = true;
                break;
            }
        }
        if (!found) break;
        if (x === sx && y === sy && pts.length > 12) break;
    }
    return pts;
}

function rdp(points, epsilon) {
    if (points.length < 3) return points;
    let maxD = 0;
    let idx = 0;
    const [ax, ay] = points[0];
    const [bx, by] = points[points.length - 1];
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy) || 1;
    for (let i = 1; i < points.length - 1; i++) {
        const d = Math.abs(dy * points[i][0] - dx * points[i][1] + bx * ay - by * ax) / len;
        if (d > maxD) {
            maxD = d;
            idx = i;
        }
    }
    if (maxD > epsilon) {
        const left = rdp(points.slice(0, idx + 1), epsilon);
        const right = rdp(points.slice(idx), epsilon);
        return left.slice(0, -1).concat(right);
    }
    return [points[0], points[points.length - 1]];
}

function toPoly(pts) {
    return pts.map(([x, y]) => `${x},${y}`).join(' ');
}

function count(mask, box) {
    const [x0, y0, x1, y1] = box;
    let n = 0;
    for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) if (mask[y * W + x]) n++;
    }
    return n;
}

const people = [
    {
        id: 1,
        box: [108, 450, 268, 1210],
        thr: 42,
        hole: 220,
        seeds: [
            [208, 505],
            [200, 555],
            [198, 640],
            [196, 760],
            [194, 900],
            [200, 1040],
            [188, 1175],
            [228, 1178],
            [168, 640],
            [236, 700],
        ],
    },
    {
        id: 4,
        box: [288, 458, 450, 1212],
        thr: 40,
        hole: 220,
        seeds: [
            [368, 505],
            [360, 575],
            [355, 680],
            [350, 820],
            [348, 980],
            [335, 1188],
            [400, 1188],
            [320, 680],
            [420, 700],
        ],
    },
    {
        id: 5,
        box: [432, 442, 620, 1216],
        thr: 40,
        hole: 220,
        seeds: [
            [528, 488],
            [520, 560],
            [515, 680],
            [510, 840],
            [505, 1000],
            [492, 1188],
            [568, 1188],
            [470, 680],
            [590, 700],
        ],
    },
    {
        id: 7,
        box: [618, 414, 840, 1218],
        thr: 38,
        hole: 260,
        seeds: [
            [728, 458],
            [720, 530],
            [700, 620],
            [760, 620],
            [720, 780],
            [715, 960],
            [690, 1192],
            [790, 1192],
            [650, 620],
            [810, 640],
        ],
    },
    {
        id: 10,
        box: [888, 398, 1130, 1232],
        thr: 44,
        hole: 280,
        seeds: [
            [1008, 438],
            [1000, 520],
            [990, 640],
            [980, 800],
            [975, 980],
            [950, 1205],
            [1045, 1205],
            [930, 640],
            [1085, 660],
            [1000, 720],
        ],
    },
    {
        id: 13,
        box: [1198, 440, 1400, 1212],
        thr: 40,
        hole: 220,
        seeds: [
            [1288, 488],
            [1280, 560],
            [1275, 680],
            [1270, 840],
            [1265, 1000],
            [1255, 1188],
            [1335, 1188],
            [1230, 640],
            [1360, 660],
        ],
    },
    {
        id: 15,
        box: [1408, 418, 1620, 1216],
        thr: 42,
        hole: 260,
        seeds: [
            [1514, 458],
            [1508, 540],
            [1500, 680],
            [1495, 860],
            [1490, 1040],
            [1465, 1190],
            [1555, 1190],
            [1455, 500],
            [1575, 520],
            [1440, 720],
            [1585, 740],
        ],
    },
    {
        id: 16,
        box: [1578, 410, 1780, 1212],
        thr: 40,
        hole: 220,
        seeds: [
            [1672, 448],
            [1665, 530],
            [1660, 680],
            [1655, 860],
            [1650, 1040],
            [1635, 1188],
            [1705, 1188],
            [1615, 640],
            [1735, 660],
        ],
    },
    {
        id: 17,
        box: [1748, 432, 1970, 1232],
        thr: 38,
        hole: 220,
        seeds: [
            [1848, 478],
            [1840, 560],
            [1835, 700],
            [1830, 880],
            [1825, 1060],
            [1805, 1208],
            [1895, 1208],
            [1785, 680],
            [1915, 700],
        ],
    },
    {
        id: 2,
        box: [222, 428, 332, 655],
        thr: 36,
        hole: 80,
        seeds: [
            [276, 468],
            [280, 520],
            [284, 575],
        ],
    },
    {
        id: 3,
        box: [348, 428, 452, 650],
        thr: 36,
        hole: 80,
        seeds: [
            [398, 468],
            [404, 520],
            [408, 575],
        ],
    },
    {
        id: 6,
        box: [608, 412, 722, 650],
        thr: 36,
        hole: 80,
        seeds: [
            [664, 452],
            [668, 510],
            [670, 570],
        ],
    },
    {
        id: 8,
        box: [768, 438, 872, 720],
        thr: 36,
        hole: 80,
        seeds: [
            [820, 478],
            [824, 535],
            [828, 600],
        ],
    },
    {
        id: 9,
        box: [848, 420, 980, 800],
        thr: 36,
        hole: 100,
        seeds: [
            [910, 468],
            [914, 530],
            [918, 620],
            [922, 710],
        ],
    },
    {
        id: 11,
        box: [1052, 418, 1192, 780],
        thr: 36,
        hole: 100,
        seeds: [
            [1114, 458],
            [1118, 520],
            [1122, 600],
            [1126, 690],
        ],
    },
    {
        id: 12,
        box: [1148, 398, 1272, 700],
        thr: 36,
        hole: 80,
        seeds: [
            [1208, 438],
            [1212, 500],
            [1216, 575],
        ],
    },
    {
        id: 14,
        box: [1318, 390, 1462, 780],
        thr: 36,
        hole: 100,
        seeds: [
            [1384, 438],
            [1388, 510],
            [1392, 600],
            [1396, 690],
        ],
    },
];

const masks = {};
for (const p of people) {
    let mask = floodIndependent(p.seeds, p.box, p.thr);
    mask = dilate(mask, p.box, 1);
    fillHoles(mask, p.box, p.hole);
    masks[p.id] = mask;
    console.log(`id ${p.id} pixels ${count(mask, p.box)}`);
}

// front-row wins overlaps
const front = new Set([1, 4, 5, 7, 10, 13, 15, 16, 17]);
for (const a of people) {
    if (front.has(a.id)) continue;
    const [x0, y0, x1, y1] = a.box;
    for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
            if (!masks[a.id][y * W + x]) continue;
            for (const b of people) {
                if (!front.has(b.id)) continue;
                if (masks[b.id][y * W + x]) masks[a.id][y * W + x] = 0;
            }
        }
    }
}

const results = {};
for (const p of people) {
    const raw = contour(masks[p.id], p.box);
    const simple = rdp(raw, 2.4);
    results[p.id] = simple;
    console.log(`person-${String(p.id).padStart(2, '0')} contour ${raw.length} -> ${simple.length}`);
}

const colors = {
    1: '#e52134',
    2: '#23bca6',
    3: '#2563eb',
    4: '#d97706',
    5: '#7c3aed',
    6: '#db2777',
    7: '#059669',
    8: '#0891b2',
    9: '#ea580c',
    10: '#4f46e5',
    11: '#16a34a',
    12: '#c026d3',
    13: '#0d9488',
    14: '#dc2626',
    15: '#2563eb',
    16: '#ca8a04',
    17: '#9333ea',
};
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">`;
for (const p of [...people].sort((a, b) => a.id - b.id)) {
    const pts = results[p.id];
    if (!pts.length) continue;
    const c = colors[p.id];
    svg += `<polygon points="${toPoly(pts)}" fill="${c}" fill-opacity="0.40" stroke="${c}" stroke-width="2.5"/>`;
    const [lx, ly] = pts[0];
    svg += `<text x="${lx}" y="${ly - 6}" font-size="22" font-weight="700" fill="${c}">${p.id}</text>`;
}
svg += '</svg>';
writeFileSync('storage/app/team-masks.svg', svg);
await sharp('public/images/tim/cijeli-tim.jpg')
    .composite([{ input: Buffer.from(svg), blend: 'over' }])
    .jpeg({ quality: 84 })
    .toFile('storage/app/team-masks-overlay.jpg');

writeFileSync(
    'storage/app/auto-masks.json',
    JSON.stringify(
        Object.fromEntries(
            Object.entries(results).map(([id, pts]) => [`person-${String(id).padStart(2, '0')}`, toPoly(pts)]),
        ),
        null,
        2,
    ),
);
console.log('wrote overlay + json');
