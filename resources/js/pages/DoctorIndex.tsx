import { Link } from '@inertiajs/react';
import { useState } from 'react';
import SiteLayout from '@/layout/SiteLayout';
import PageHero from '@/components/PageHero';
import DoctorPortrait, { doctorCrop } from '@/components/DoctorPortrait';
import type { HomeDoctor, NavItem, SeoData } from '@/types';

interface DoctorIndexProps {
    doctors: (HomeDoctor & { shortBio: string | null })[];
    departments: NavItem[];
    seo: SeoData;
}

export default function DoctorIndex({ doctors, departments, seo }: DoctorIndexProps) {
    const [filter, setFilter] = useState<string | null>(null);
    const filtered = filter ? doctors.filter((d) => d.department?.slug === filter) : doctors;

    return (
        <SiteLayout seo={seo}>
            <PageHero
                label="Stručni tim"
                title="Doktori i specijalisti ZU SC Dr Brkić"
                intro="Pregledajte naš medicinski tim po odjeljenjima, specijalnostima i uslugama."
                image="krilo"
                crumbs={[{ label: 'Početna', href: '/' }, { label: 'Doktori' }]}
            />

            <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-10">
                <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter po odjeljenju">
                    <button
                        type="button"
                        onClick={() => setFilter(null)}
                        aria-pressed={filter === null}
                        className={`rounded-md border px-4 py-2 text-[0.9rem] font-medium transition-colors ${filter === null ? 'border-teal-600 bg-teal-600 text-white' : 'border-ink/20 text-ink hover:border-teal-600 hover:text-teal-700'}`}
                    >
                        Svi doktori
                    </button>
                    {departments.map((d) => (
                        <button
                            key={d.slug}
                            type="button"
                            onClick={() => setFilter(d.slug)}
                            aria-pressed={filter === d.slug}
                            className={`rounded-md border px-4 py-2 text-[0.9rem] font-medium transition-colors ${filter === d.slug ? 'border-teal-600 bg-teal-600 text-white' : 'border-ink/20 text-ink hover:border-teal-600 hover:text-teal-700'}`}
                        >
                            {d.name}
                        </button>
                    ))}
                    <p className="meta-label ml-auto text-ink-faint" aria-live="polite">
                        {filtered.length}
                    </p>
                </div>

                {filtered.length > 0 ? (
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
                        {filtered.map((doctor) => (
                            <article
                                key={doctor.slug}
                                className="group relative flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/35 hover:shadow-[0_18px_40px_-24px_rgba(13,61,54,0.45)]"
                            >
                                <Link href={`/doktori/${doctor.slug}`} className="absolute inset-0 z-[1]" aria-label={doctor.name} />
                                <div className="relative p-2.5 pb-0">
                                    <DoctorPortrait
                                        name={doctor.name}
                                        photo={doctor.photo}
                                        crop={doctorCrop(doctor.slug)}
                                        className="aspect-[4/5] rounded-lg"
                                    />
                                    <div className="pointer-events-none absolute inset-2.5 bottom-0 rounded-lg bg-gradient-to-t from-teal-950/90 via-teal-950/25 to-transparent" />
                                    <div className="pointer-events-none absolute inset-x-2.5 bottom-0 p-5">
                                        {doctor.department && (
                                            <p className="meta-label text-teal-300">{doctor.department.name}</p>
                                        )}
                                        <h2 className="mt-1.5 font-display text-[1.4rem] font-bold leading-tight text-white group-hover:text-teal-100">
                                            {doctor.name}
                                        </h2>
                                        <p className="mt-1 text-[0.9rem] text-white/75">{doctor.title}</p>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                                    {doctor.experience && (
                                        <p className="meta-label text-ink-faint">{doctor.experience}</p>
                                    )}
                                    {doctor.services.length > 0 && (
                                        <ul className="relative z-10 mt-4 flex flex-wrap gap-1.5">
                                            {doctor.services.map((s) => (
                                                <li key={s.slug}>
                                                    <Link
                                                        href={`/usluge/${s.slug}`}
                                                        className="inline-block rounded-md border border-teal-600/20 bg-teal-50 px-2.5 py-1 text-[0.78rem] font-medium leading-none text-teal-800 transition-colors hover:border-teal-600/45 hover:bg-teal-100"
                                                    >
                                                        {s.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <span className="meta-label mt-auto flex items-center gap-2 pt-5 text-teal-700">
                                        Pogledajte profil
                                        <svg aria-hidden="true" viewBox="0 0 24 12" className="h-2.5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M0 6h22M17 1l5 5-5 5" />
                                        </svg>
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="mt-8 rounded-xl border border-ink/12 bg-mineral px-8 py-14 text-center">
                        <p className="font-display text-xl font-semibold text-ink">Nema rezultata za odabrani filter.</p>
                        <p className="mt-2 text-ink-soft">Promijenite odjeljenje.</p>
                    </div>
                )}
            </div>
        </SiteLayout>
    );
}
