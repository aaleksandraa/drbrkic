import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const boxes = [
    { id: '01', left: 90, top: 430, width: 200, height: 800 },
    { id: '02', left: 210, top: 410, width: 160, height: 280 },
    { id: '03', left: 330, top: 410, width: 160, height: 280 },
    { id: '04', left: 280, top: 430, width: 200, height: 800 },
    { id: '05', left: 420, top: 430, width: 230, height: 800 },
    { id: '06', left: 590, top: 400, width: 160, height: 280 },
    { id: '07', left: 600, top: 400, width: 260, height: 830 },
    { id: '08', left: 750, top: 420, width: 160, height: 320 },
    { id: '09', left: 830, top: 400, width: 180, height: 430 },
    { id: '10', left: 860, top: 380, width: 300, height: 870 },
    { id: '11', left: 1040, top: 400, width: 180, height: 400 },
    { id: '12', left: 1130, top: 380, width: 170, height: 340 },
    { id: '13', left: 1180, top: 420, width: 250, height: 810 },
    { id: '14', left: 1300, top: 380, width: 180, height: 420 },
    { id: '15', left: 1390, top: 400, width: 260, height: 830 },
    { id: '16', left: 1560, top: 400, width: 250, height: 830 },
    { id: '17', left: 1740, top: 420, width: 250, height: 830 },
];

mkdirSync('storage/app/people', { recursive: true });

for (const box of boxes) {
    const { id, left, top, width, height } = box;
    let g = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`;
    for (let x = 0; x <= width; x += 25) {
        const abs = left + x;
        const major = abs % 50 === 0;
        g += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${major ? '#e52134' : '#23bca6'}" stroke-width="${major ? 1 : 0.4}" opacity="${major ? 0.55 : 0.25}"/>`;
        if (major) g += `<text x="${x + 2}" y="14" font-size="11" fill="#e52134" font-weight="700">${abs}</text>`;
    }
    for (let y = 0; y <= height; y += 25) {
        const abs = top + y;
        const major = abs % 50 === 0;
        g += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${major ? '#e52134' : '#23bca6'}" stroke-width="${major ? 1 : 0.4}" opacity="${major ? 0.55 : 0.25}"/>`;
        if (major) g += `<text x="4" y="${y - 2}" font-size="11" fill="#e52134" font-weight="700">${abs}</text>`;
    }
    g += `</svg>`;

    await sharp('public/images/tim/cijeli-tim.jpg')
        .extract({ left, top, width, height })
        .composite([{ input: Buffer.from(g) }])
        .jpeg({ quality: 88 })
        .toFile(`storage/app/people/p${id}.jpg`);
}

console.log('person crops ready');
