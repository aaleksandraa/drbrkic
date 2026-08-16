import sharp from 'sharp';

const W = 2048;
const H = 1365;
let g = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">`;
for (let x = 0; x <= W; x += 50) {
    const major = x % 100 === 0;
    g += `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${major ? '#e52134' : '#23bca6'}" stroke-width="${major ? 1.2 : 0.5}" opacity="${major ? 0.5 : 0.22}"/>`;
    if (major) g += `<text x="${x + 3}" y="380" font-size="16" fill="#e52134" font-weight="700">${x}</text>`;
}
for (let y = 350; y <= 1260; y += 50) {
    const major = y % 100 === 0;
    g += `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke="${major ? '#e52134' : '#23bca6'}" stroke-width="${major ? 1.2 : 0.5}" opacity="${major ? 0.5 : 0.22}"/>`;
    if (major) g += `<text x="10" y="${y - 4}" font-size="16" fill="#e52134" font-weight="700">${y}</text>`;
}
g += '</svg>';

await sharp('public/images/tim/cijeli-tim.jpg')
    .composite([{ input: Buffer.from(g) }])
    .jpeg({ quality: 82 })
    .toFile('storage/app/team-grid.jpg');

await sharp('storage/app/team-grid.jpg').extract({ left: 0, top: 350, width: 700, height: 900 }).toFile('storage/app/grid-left.jpg');
await sharp('storage/app/team-grid.jpg').extract({ left: 550, top: 350, width: 700, height: 900 }).toFile('storage/app/grid-midleft.jpg');
await sharp('storage/app/team-grid.jpg').extract({ left: 950, top: 350, width: 700, height: 900 }).toFile('storage/app/grid-mid.jpg');
await sharp('storage/app/team-grid.jpg').extract({ left: 1348, top: 350, width: 700, height: 900 }).toFile('storage/app/grid-right.jpg');
console.log('grid crops ready');
