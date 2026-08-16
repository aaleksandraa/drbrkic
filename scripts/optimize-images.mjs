import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const clinicSrc = 'brdkic-slika-klinike.jpg';
const fasadaSrc = 'public/images/dr-brkic-doboj.png';
const logoSrc = 'logo.png';

mkdirSync('public/images/klinika', { recursive: true });

const widths = [480, 768, 1024, 1280, 1440, 1600];

for (const w of widths) {
    await sharp(fasadaSrc).resize({ width: w }).webp({ quality: 78 }).toFile(`public/images/klinika/zu-dr-brkic-doboj-${w}.webp`);
    await sharp(fasadaSrc).resize({ width: w }).jpeg({ quality: 80, mozjpeg: true }).toFile(`public/images/klinika/zu-dr-brkic-doboj-${w}.jpg`);
}

/** Named architectural crops of the real clinic facade — used as heroes, cards and galleries. */
const crops = {
    ulaz: { left: 0, top: 420, width: 1632, height: 581 },
    mreza: { left: 782, top: 40, width: 850, height: 920 },
    krilo: { left: 0, top: 60, width: 900, height: 850 },
    nebo: { left: 100, top: 0, width: 1432, height: 420 },
    detalj: { left: 620, top: 40, width: 500, height: 720 },
    natpis: { left: 60, top: 200, width: 880, height: 520 },
};

const cropWidths = [480, 768, 1200];

for (const [name, region] of Object.entries(crops)) {
    for (const w of cropWidths) {
        const pipeline = sharp(clinicSrc).extract(region).resize({ width: w });
        await pipeline.clone().webp({ quality: 78 }).toFile(`public/images/klinika/${name}-${w}.webp`);
        await pipeline.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(`public/images/klinika/${name}-${w}.jpg`);
    }
}

await sharp(clinicSrc)
    .extract({ left: 640, top: 60, width: 384, height: 560 })
    .webp({ quality: 78 })
    .toFile('public/images/klinika/fasada-detalj.webp');

await sharp(logoSrc).png().toFile('public/images/logo-dr-brkic.png');

const meta = await sharp(logoSrc).metadata();
const symbolWidth = Math.round(meta.height * 1.02);
await sharp(logoSrc)
    .extract({ left: 0, top: 0, width: Math.min(symbolWidth, meta.width), height: meta.height })
    .resize(64, 64, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile('public/favicon.png');

console.log('done');
