import ClinicImage, { isClinicCrop, type ClinicCrop } from '@/components/ClinicImage';

const PORTRAIT_CROPS: ClinicCrop[] = ['mreza', 'krilo', 'detalj'];

export function doctorCrop(slug: string): ClinicCrop {
    return PORTRAIT_CROPS[slug.length % PORTRAIT_CROPS.length];
}

export default function DoctorPortrait({
    name,
    photo,
    crop,
    sizes = '(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw',
    className = '',
    priority = false,
}: {
    name: string;
    photo?: string | null;
    crop?: string | null;
    sizes?: string;
    className?: string;
    priority?: boolean;
}) {
    const resolvedCrop: ClinicCrop = isClinicCrop(crop) ? crop : 'mreza';

    return (
        <div className={`relative overflow-hidden bg-teal-950 ${className}`}>
            {photo ? (
                <img
                    src={photo}
                    alt={name}
                    width={400}
                    height={500}
                    loading={priority ? 'eager' : 'lazy'}
                    fetchPriority={priority ? 'high' : undefined}
                    decoding={priority ? 'sync' : 'async'}
                    className="size-full object-cover object-top"
                />
            ) : (
                <ClinicImage
                    crop={resolvedCrop}
                    decorative
                    priority={priority}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes={sizes}
                />
            )}
        </div>
    );
}
