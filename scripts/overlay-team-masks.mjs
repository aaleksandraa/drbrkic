import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const W = 2048;
const H = 1365;
const colors = [
    '#e52134', '#23bca6', '#2563eb', '#d97706', '#7c3aed', '#db2777', '#059669', '#0891b2',
    '#ea580c', '#4f46e5', '#16a34a', '#c026d3', '#0d9488', '#dc2626', '#2563eb', '#ca8a04', '#9333ea',
];

function parse(points) {
    return points.trim().split(/\s+/).map((p) => p.split(',').map(Number));
}

const source = readFileSync('resources/js/data/teamPhoto.ts', 'utf8');
const teamMembers = [...source.matchAll(/id: 'person-(\d+)'[\s\S]*?maskPolygons: \[([\s\S]*?)\]\s*,\s*label/g)].map((match) => ({
    id: match[1],
    maskPolygons: [...match[2].matchAll(/'([^']+)'/g)].map((p) => p[1]),
}));

let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;
teamMembers.forEach((m, i) => {
    const c = colors[i % colors.length];
    m.maskPolygons.forEach((pts) => {
        svg += `<polygon points="${pts}" fill="${c}" fill-opacity="0.34" stroke="${c}" stroke-width="3" />`;
    });
    const [x, y] = parse(m.maskPolygons[0])[0];
    svg += `<circle cx="${x}" cy="${y}" r="20" fill="${c}" /><text x="${x}" y="${y + 6}" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">${i + 1}</text>`;
});
svg += '</svg>';

writeFileSync('storage/app/team-masks.svg', svg);
await sharp('public/images/tim/cijeli-tim.jpg')
    .composite([{ input: Buffer.from(svg), blend: 'over' }])
    .jpeg({ quality: 82 })
    .toFile('storage/app/team-masks-overlay.jpg');

console.log('overlay ready', teamMembers.length);
