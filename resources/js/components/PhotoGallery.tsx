import ClinicImage from '@/components/ClinicImage';

interface PhotoGalleryProps {
    crops: string[];
    title?: string;
}

export default function PhotoGallery({ crops, title = 'Prostor ustanove' }: PhotoGalleryProps) {
    const items = crops.filter(Boolean).slice(0, 4);
    if (items.length === 0) return null;

    return (
        <section aria-labelledby="galerija-naslov" className="mt-12">
            <h2 id="galerija-naslov" className="font-display text-2xl font-bold text-ink">
                {title}
            </h2>
            <p className="mt-2 max-w-xl text-[0.92rem] leading-relaxed text-ink-soft">
                Fotografije objekta ZU Dr Brkić u Doboju — tirkizna fasada, metalna mreža i ulazni dio ustanove.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
                {items.map((crop, i) => (
                    <li key={`${crop}-${i}`} className={`media-zoom ${i === 0 ? 'col-span-2 lg:col-span-2' : ''}`}>
                        <ClinicImage
                            crop={crop}
                            sizes={i === 0 ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 50vw'}
                            className={`w-full object-cover ${i === 0 ? 'aspect-[16/10] lg:aspect-[16/9]' : 'aspect-[4/3]'}`}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}
