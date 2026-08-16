import { Link } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import { SectionMeta } from '@/components/Motif';
import DoctorPortrait, { doctorCrop } from '@/components/DoctorPortrait';
import type { HomeDoctor } from '@/types';

export default function DoctorsEditorial({ doctors }: { doctors: HomeDoctor[] }) {
    return (
        <section aria-labelledby="tim-naslov" className="bg-paper py-16 lg:py-24">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal>
                    <SectionMeta index="06" label="Ljudi" />
                    <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                        <h2 id="tim-naslov" className="font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]">
                            Naš stručni tim
                        </h2>
                        <Link
                            href="/doktori"
                            className="meta-label flex items-center gap-2 text-teal-700 transition-colors hover:text-teal-900"
                        >
                            Pogledajte sve doktore
                            <svg aria-hidden="true" viewBox="0 0 24 12" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M0 6h22M17 1l5 5-5 5" />
                            </svg>
                        </Link>
                    </div>
                </Reveal>

                <Reveal className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
                    {doctors.map((doctor) => (
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
                                    sizes="(min-width: 1024px) 33vw, 100vw"
                                />
                                <div className="pointer-events-none absolute inset-2.5 bottom-0 rounded-lg bg-gradient-to-t from-teal-950/90 via-teal-950/25 to-transparent" />
                                <div className="pointer-events-none absolute inset-x-2.5 bottom-0 p-5">
                                    {doctor.department && (
                                        <p className="meta-label text-teal-300">{doctor.department.name}</p>
                                    )}
                                    <h3 className="mt-1.5 font-display text-[1.4rem] font-bold leading-tight text-white group-hover:text-teal-100">
                                        {doctor.name}
                                    </h3>
                                    <p className="mt-1 text-[0.9rem] text-white/75">{doctor.title}</p>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                            {doctor.experience && (
                                <span className="meta-label text-ink-faint">{doctor.experience}</span>
                            )}

                            {doctor.services.length > 0 && (
                                <ul className="relative z-10 mt-4 flex flex-wrap gap-1.5">
                                    {doctor.services.map((service) => (
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
                                Pogledajte profil
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
