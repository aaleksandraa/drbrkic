import { Link } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import ClinicImage from '@/components/ClinicImage';
import type { HomeDepartment } from '@/types';

const CARD_TITLE: Record<string, string> = {
    radiologija: 'Radiologija i UZV',
};

export default function DepartmentsV2({ departments }: { departments: HomeDepartment[] }) {
    return (
        <section id="odjeljenja" aria-labelledby="odjeljenja-naslov" className="bg-mineral py-14 lg:py-20">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal>
                    <h2
                        id="odjeljenja-naslov"
                        className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl"
                    >
                        Naša odjeljenja
                    </h2>
                </Reveal>

                <Reveal className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {departments.map((department) => (
                        <Link
                            key={department.slug}
                            href={`/odjeljenja/${department.slug}`}
                            className="group relative isolate block overflow-hidden rounded-lg"
                        >
                            <ClinicImage
                                crop={department.image ?? 'fasada'}
                                decorative
                                className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                                sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                            />
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/20 to-transparent"
                            />
                            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3.5">
                                <span className="font-display text-[0.95rem] font-semibold leading-snug text-white">
                                    {CARD_TITLE[department.slug] ?? department.name}
                                </span>
                                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-teal-800 transition-transform group-hover:translate-x-0.5">
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
