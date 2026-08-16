import sharp from 'sharp';

const W = 2048;
const H = 1365;
const { data } = await sharp('public/images/tim/cijeli-tim.jpg')
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

function px(x, y) {
    const i = (y * W + x) * 4;
    return [data[i], data[i + 1], data[i + 2]];
}

function lum(x, y) {
    const [r, g, b] = px(Math.max(0, Math.min(W - 1, x)), Math.max(0, Math.min(H - 1, y)));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function sat(x, y) {
    const [r, g, b] = px(Math.max(0, Math.min(W - 1, x)), Math.max(0, Math.min(H - 1, y)));
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    return max === 0 ? 0 : (max - min) / max;
}

function isBg(x, y) {
    const L = lum(x, y);
    const S = sat(x, y);
    const [r, g, b] = px(x, y);
    // grey floor / white walls / glass
    if (L > 175 && S < 0.12) return true;
    if (L > 200 && S < 0.18) return true;
    // blue chairs
    if (b > r + 30 && b > g + 10 && L > 80) return true;
    return false;
}

function scanHead(cx, x0, x1, y0, y1) {
    for (let y = y0; y <= y1; y++) {
        for (let x = x0; x <= x1; x++) {
            if (!isBg(x, y) && lum(x, y) < 140) {
                return { x, y, L: lum(x, y).toFixed(0) };
            }
        }
    }
    return null;
}

function edgesAtY(y, x0, x1) {
    const hits = [];
    let inside = false;
    let start = null;
    for (let x = x0; x <= x1; x++) {
        const bg = isBg(x, y);
        if (!bg && !inside) {
            start = x;
            inside = true;
        } else if (bg && inside) {
            hits.push([start, x - 1]);
            inside = false;
        }
    }
    if (inside) hits.push([start, x1]);
    return hits;
}

const people = [
    { id: '01', cx: 200, x0: 100, x1: 280, y0: 430, y1: 1220 },
    { id: '04', cx: 370, x0: 290, x1: 450, y0: 430, y1: 1220 },
    { id: '05', cx: 530, x0: 440, x1: 630, y0: 420, y1: 1220 },
    { id: '07', cx: 730, x0: 610, x1: 850, y0: 400, y1: 1230 },
    { id: '10', cx: 1010, x0: 880, x1: 1140, y0: 380, y1: 1240 },
    { id: '13', cx: 1290, x0: 1180, x1: 1410, y0: 420, y1: 1220 },
    { id: '15', cx: 1510, x0: 1400, x1: 1630, y0: 400, y1: 1220 },
    { id: '16', cx: 1670, x0: 1560, x1: 1780, y0: 400, y1: 1220 },
    { id: '17', cx: 1850, x0: 1740, x1: 1980, y0: 420, y1: 1240 },
];

for (const p of people) {
    const head = scanHead(p.cx, p.x0, p.x1, p.y0, p.y0 + 120);
    const ys = [p.y0 + 40, p.y0 + 80, p.y0 + 140, p.y0 + 200, p.y0 + 280, p.y0 + 380, p.y0 + 500, p.y0 + 620, p.y0 + 740, 1180, 1200];
    console.log(`\n=== ${p.id} head`, head);
    for (const y of ys) {
        if (y > 1250) continue;
        console.log(`  y=${y}  ${JSON.stringify(edgesAtY(y, p.x0, p.x1))}`);
    }
}
