import { Link } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import { SectionMeta } from '@/components/Motif';
import ClinicImage from '@/components/ClinicImage';
import type { HomeDepartment } from '@/types';

export default function DepartmentIndex({ departments }: { departments: HomeDepartment[] }) {
    return (
        <section id="odjeljenja" aria-labelledby="odjeljenja-naslov" className="bg-paper py-16 lg:py-24">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal>
                    <SectionMeta index="03" label="Struktura ustanove" />
                    <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                        <h2 id="odjeljenja-naslov" className="font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]">
                            Odjeljenja
                        </h2>
                        <p className="max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
                            Kroz jasno organizovana odjeljenja pacijentima omogućavamo brži put
                            do dijagnoze, pregleda i terapijskog plana.
                        </p>
                    </div>
                </Reveal>

                <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
                    {departments.map((department, i) => (
                        <article
                            key={department.slug}
                            className="group relative flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/35 hover:shadow-[0_18px_40px_-24px_rgba(13,61,54,0.45)]"
                        >
                            {department.image && (
                                <div className="overflow-hidden p-2.5 pb-0">
                                    <ClinicImage
                                        crop={department.image}
                                        decorative
                                        className="aspect-[16/10] w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                                        sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    />
                                </div>
                            )}
                            <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                                <h3 className="flex items-baseline gap-3 font-display text-[1.28rem] font-bold leading-tight text-ink">
                                    <span className="shrink-0 font-mono text-[0.78rem] font-semibold tabular-nums tracking-[0.12em] text-teal-600">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <Link
                                        href={`/odjeljenja/${department.slug}`}
                                        className="transition-colors after:absolute after:inset-0 group-hover:text-teal-800"
                                    >
                                        {department.name}
                                    </Link>
                                </h3>
                                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">
                                    {department.shortDescription}
                                </p>
                                {department.services.length > 0 && (
                                    <ul className="relative z-10 mt-4 flex flex-wrap gap-1.5">
                                        {department.services.slice(0, 4).map((service) => (
                                            <li key={service.slug}>
                                                <Link
                                                    href={`/usluge/${service.slug}`}
                                                    className="inline-block rounded-md border border-teal-600/20 bg-teal-50 px-2.5 py-1 text-[0.78rem] font-medium leading-none text-teal-800 transition-colors hover:border-teal-600/45 hover:bg-teal-100"
                                                >
                                                    {service.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <span className="meta-label mt-auto flex items-center gap-2 pt-5 text-teal-700">
                                    Saznajte više
                                    <svg aria-hidden="true" viewBox="0 0 24 12" className="h-2.5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M0 6h22M17 1l5 5-5 5" />
                                    </svg>
                                </span>
                            </div>
                        </article>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
