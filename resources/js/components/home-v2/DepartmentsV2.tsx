import { Link } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import ClinicImage from '@/components/ClinicImage';
import type { HomeDepartment } from '@/types';

const CARD_TITLE: Record<string, string> = {
    radiologija: 'Radiologija i UZV',
};

const CARD_IMAGE: Record<string, string> = {
    radiologija: '/images/blog/ct1-670x446.jpg',
    laboratorija: '/images/blog/uredjaj-670x446.jpg',
    'porodicna-medicina': '/images/tim/dr-radenka-markovic.jpg',
    'medicina-rada': '/images/tim/cijeli-tim-unutar.jpg',
    fizijatrija: '/images/usluge/shockwave-terapija.jpg',
    'specijalisticki-pregledi': '/images/tim/dr-jovica-brkic.jpg',
};

export default function DepartmentsV2({ departments }: { departments: HomeDepartment[] }) {
    return (
        <section id="odjeljenja" aria-labelledby="odjeljenja-naslov" className="bg-white py-14 lg:py-20">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal>
                    <h2
                        id="odjeljenja-naslov"
                        className="font-display text-[1.65rem] font-bold tracking-[-0.02em] text-ink sm:text-[1.85rem]"
                    >
                        Naša odjeljenja
                    </h2>
                </Reveal>

                <Reveal className="mt-7 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3 xl:grid-cols-6">
                    {departments.map((department) => (
                        <Link
                            key={department.slug}
                            href={`/odjeljenja/${department.slug}`}
                            className="group relative isolate block overflow-hidden rounded-md"
                        >
                            <ClinicImage
                                crop={CARD_IMAGE[department.slug] ?? department.image ?? 'fasada'}
                                decorative
                                className="aspect-[5/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] sm:aspect-[4/3]"
                                sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 33vw, 50vw"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-teal-950/90 via-teal-950/35 to-transparent"
                            />
                            <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 px-3 py-2.5">
                                <span className="font-display text-[0.88rem] font-semibold leading-snug text-white sm:text-[0.95rem]">
                                    {CARD_TITLE[department.slug] ?? department.name}
                                </span>
                                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white text-teal-800 transition-transform group-hover:translate-x-0.5">
                                    <svg aria-hidden="true" viewBox="0 0 16 12" className="h-2.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M0 6h14M10 2l4 4-4 4" />
                                    </svg>
                                </span>
                            </span>
                        </Link>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
