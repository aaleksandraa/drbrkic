export type ClinicCrop = 'fasada' | 'ulaz' | 'mreza' | 'krilo' | 'nebo' | 'detalj' | 'natpis';

const FASADA_SRC = '/images/dr-brkic-doboj.png';

const CROP_META: Record<
    ClinicCrop,
    { prefix?: string; widths?: number[]; src?: string; alt: string; width: number; height: number }
> = {
    fasada: {
        src: FASADA_SRC,
        alt: 'Objekat ZU Dr Brkić u Doboju — specijalistička ordinacija i apoteka',
        width: 1602,
        height: 982,
    },
    ulaz: {
        prefix: 'ulaz',
        widths: [480, 768, 1200],
        alt: 'Prizemlje i ulazni dio objekta ZU Dr Brkić u Doboju',
        width: 1200,
        height: 427,
    },
    mreza: {
        prefix: 'mreza',
        widths: [480, 768, 1200],
        alt: 'Tirkizna fasadna mreža objekta ZU Dr Brkić u Doboju',
        width: 1200,
        height: 1299,
    },
    krilo: {
        prefix: 'krilo',
        widths: [480, 768, 1200],
        alt: 'Lijevo krilo objekta ZU Dr Brkić u Doboju',
        width: 1200,
        height: 1133,
    },
    nebo: {
        prefix: 'nebo',
        widths: [480, 768, 1200],
        alt: 'Gornji dio fasade ZU Dr Brkić prema nebu',
        width: 1200,
        height: 352,
    },
    detalj: {
        prefix: 'detalj',
        widths: [480, 768, 1200],
        alt: 'Detalj tirkizne geometrije fasade ZU Dr Brkić',
        width: 1200,
        height: 1728,
    },
    natpis: {
        prefix: 'natpis',
        widths: [480, 768, 1200],
        alt: 'Natpis ZU Dr Brkić na fasadi objekta u Doboju',
        width: 1200,
        height: 709,
    },
};

export function isClinicCrop(value: string | null | undefined): value is ClinicCrop {
    return Boolean(value && value in CROP_META);
}

export function isCustomImagePath(value: string | null | undefined): boolean {
    return Boolean(value && (value.startsWith('/') || value.startsWith('http')));
}

export function clinicOgPath(crop: string | null | undefined): string {
    if (isCustomImagePath(crop)) {
        return crop as string;
    }
    const key: ClinicCrop = isClinicCrop(crop) ? crop : 'fasada';
    const meta = CROP_META[key];
    if (meta.src) {
        return meta.src;
    }
    const widths = meta.widths ?? [];
    const w = widths.includes(1280) ? 1280 : widths[widths.length - 1];
    return `/images/klinika/${meta.prefix}-${w}.jpg`;
}

interface ClinicImageProps {
    crop?: string | null;
    alt?: string;
    className?: string;
    sizes?: string;
    priority?: boolean;
    decorative?: boolean;
}

export default function ClinicImage({
    crop = 'fasada',
    alt,
    className,
    sizes = '100vw',
    priority = false,
    decorative = false,
}: ClinicImageProps) {
    if (isCustomImagePath(crop)) {
        return (
            <img
                src={crop}
                alt={decorative ? '' : (alt ?? '')}
                width={670}
                height={446}
                loading={priority ? 'eager' : 'lazy'}
                fetchPriority={priority ? 'high' : undefined}
                decoding={priority ? 'sync' : 'async'}
                className={className}
            />
        );
    }

    const key: ClinicCrop = isClinicCrop(crop) ? crop : 'fasada';
    const meta = CROP_META[key];
    const resolvedAlt = decorative ? '' : (alt ?? meta.alt);
    const loading = priority ? 'eager' : 'lazy';
    const fetchPriority = priority ? 'high' : undefined;
    const decoding = priority ? 'sync' : 'async';

    if (meta.src) {
        return (
            <img
                src={meta.src}
                alt={resolvedAlt}
                width={meta.width}
                height={meta.height}
                loading={loading}
                fetchPriority={fetchPriority}
                decoding={decoding}
                className={className}
            />
        );
    }

    const widths = meta.widths ?? [];
    const webp = widths.map((w) => `/images/klinika/${meta.prefix}-${w}.webp ${w}w`).join(', ');
    const jpg = widths.map((w) => `/images/klinika/${meta.prefix}-${w}.jpg ${w}w`).join(', ');
    const fallback = `/images/klinika/${meta.prefix}-${widths[widths.length - 1]}.jpg`;

    return (
        <picture>
            <source type="image/webp" srcSet={webp} sizes={sizes} />
            <img
                src={fallback}
                srcSet={jpg}
                sizes={sizes}
                alt={resolvedAlt}
                width={meta.width}
                height={meta.height}
                loading={loading}
                fetchPriority={fetchPriority}
                decoding={decoding}
                className={className}
            />
        </picture>
    );
}
