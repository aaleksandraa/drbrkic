import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const DIR = 'public/images/grupnaSlika';
const W = 2145;
const H = 1280;
const COUNT = 18;

function rdp(points, eps) {
    if (points.length < 3) return points;
    const [ax, ay] = points[0];
    const [bx, by] = points[points.length - 1];
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy) || 1;
    let maxD = 0;
    let idx = 0;
    for (let i = 1; i < points.length - 1; i++) {
        const d = Math.abs(dy * points[i][0] - dx * points[i][1] + bx * ay - by * ax) / len;
        if (d > maxD) {
            maxD = d;
            idx = i;
        }
    }
    if (maxD > eps) {
        return rdp(points.slice(0, idx + 1), eps).slice(0, -1).concat(rdp(points.slice(idx), eps));
    }
    return [points[0], points[points.length - 1]];
}

function trace(binary, width, height) {
    const inside = (x, y) => x >= 0 && y >= 0 && x < width && y < height && binary[y * width + x] === 1;
    let sx = -1;
    let sy = -1;
    outer: for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
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
    for (let step = 0; step < 200000; step++) {
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
        if (x === sx && y === sy && pts.length > 16) break;
    }
    return pts;
}

function components(binary, width, height) {
    const labels = new Int32Array(width * height);
    const comps = [];
    let current = 0;
    const stack = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const start = y * width + x;
            if (!binary[start] || labels[start]) continue;
            current += 1;
            stack.push(x, y);
            labels[start] = current;
            let area = 0;
            while (stack.length) {
                const cy = stack.pop();
                const cx = stack.pop();
                area += 1;
                for (const [dx, dy] of [
                    [1, 0],
                    [-1, 0],
                    [0, 1],
                    [0, -1],
                ]) {
                    const nx = cx + dx;
                    const ny = cy + dy;
                    if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
                    const i = ny * width + nx;
                    if (!binary[i] || labels[i]) continue;
                    labels[i] = current;
                    stack.push(nx, ny);
                }
            }
            comps.push({ id: current, area });
        }
    }
    return { labels, comps };
}

const FRONT = new Set([1, 4, 6, 8, 11, 14, 16, 17, 18]);
const KNOWN = {
    10: {
        name: 'Dr Radenka Marković',
        title: 'Specijalista porodične medicine',
        profileUrl: '/doktori/radenka-markovic',
    },
    11: {
        name: 'Dr Jovica Brkić',
        title: 'Specijalista radiologije',
        profileUrl: '/doktori/jovica-brkic',
    },
};

const members = [];

for (let n = 1; n <= COUNT; n++) {
    const { data, info } = await sharp(`${DIR}/${n}.png`).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const binary = new Uint8Array(info.width * info.height);
    let minX = info.width;
    let minY = info.height;
    let maxX = 0;
    let maxY = 0;
    let sumX = 0;
    let sumY = 0;
    let count = 0;
    let headSumX = 0;
    let headSumY = 0;
    let headCount = 0;
    let headMinX = info.width;
    let headMaxX = 0;

    for (let y = 0; y < info.height; y++) {
        for (let x = 0; x < info.width; x++) {
            if (data[(y * info.width + x) * 4 + 3] < 120) continue;
            binary[y * info.width + x] = 1;
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
            sumX += x;
            sumY += y;
            count++;
        }
    }

    const headMaxY = minY + Math.round((maxY - minY) * 0.2);
    for (let y = minY; y <= headMaxY; y++) {
        for (let x = minX; x <= maxX; x++) {
            if (!binary[y * info.width + x]) continue;
            headSumX += x;
            headSumY += y;
            headCount++;
            if (x < headMinX) headMinX = x;
            if (x > headMaxX) headMaxX = x;
        }
    }

    const { labels, comps } = components(binary, info.width, info.height);
    const polygons = [];
    for (const comp of comps.filter((item) => item.area >= 80).sort((a, b) => b.area - a.area)) {
        const island = new Uint8Array(info.width * info.height);
        for (let i = 0; i < labels.length; i++) {
            if (labels[i] === comp.id) island[i] = 1;
        }
        const simple = rdp(trace(island, info.width, info.height), 1.6);
        if (simple.length >= 3) {
            polygons.push(simple.map(([x, y]) => `${x},${y}`).join(' '));
        }
    }

    const cx = headCount ? headSumX / headCount : sumX / count;
    const cy = headCount ? headSumY / headCount : minY + 40;
    const midX = (minX + maxX) / 2;
    const side = midX > W * 0.78 ? 'right' : 'left';
    const labelLeft = headCount ? headMinX : minX;
    const labelRight = headCount ? headMaxX : maxX;
    const labelX = side === 'right' ? labelLeft - 8 : labelRight + 10;
    const labelY = Math.round(cy);
    const known = KNOWN[n];

    members.push({
        n,
        layer: FRONT.has(n) ? 'front' : 'back',
        polygons,
        pixels: count,
        box: [minX, minY, maxX, maxY],
        label: { x: Math.round(labelX), y: labelY, side },
        name: known?.name ?? 'Član tima',
        title: known?.title ?? 'ZU SC Dr Brkić',
        profileUrl: known?.profileUrl ?? null,
    });
    console.log(
        `#${n} ${FRONT.has(n) ? 'front' : 'back'} polys ${polygons.length} px ${count} box ${minX},${minY}-${maxX},${maxY}`,
    );
}

function q(value) {
    if (value === null) return 'null';
    return `'${String(value).replace(/'/g, "\\'")}'`;
}

const body = members
    .map(
        (m) => `    member({
        id: 'person-${String(m.n).padStart(2, '0')}',
        name: ${q(m.name)},
        title: ${q(m.title)},
        profileUrl: ${m.profileUrl ? q(m.profileUrl) : 'null'},
        maskSrc: '/images/grupnaSlika/${m.n}.png?v=4',
        layer: ${q(m.layer)},
        hitPolygons: [
${m.polygons.map((p) => `            ${q(p)},`).join('\n')}
        ],
        label: { x: ${m.label.x}, y: ${m.label.y}, side: ${q(m.label.side)} },
    })`,
    )
    .join(',\n');

const file = `export const TEAM_IMAGE = {
    width: ${W},
    height: ${H},
    src: '/images/grupnaSlika/CijeliTim.jpg',
} as const;

export type TeamMember = {
    id: string;
    name: string;
    title: string;
    profileUrl: string | null;
    maskSrc: string;
    layer: 'front' | 'back';
    hitPolygons: string[];
    label: { x: number; y: number; side?: 'left' | 'center' | 'right' };
};

function member(data: TeamMember): TeamMember {
    return data;
}

/*
 * 18 maski iz public/images/grupnaSlika/{1-18}.png.
 * Hover prikazuje PNG izrez osobe; hit zone je obris alpha kanala.
 */
export const teamMembers: TeamMember[] = [
${body},
];
`;

writeFileSync('resources/js/data/teamPhoto.ts', file);
console.log('wrote teamPhoto.ts');
