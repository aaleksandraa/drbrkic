import { Link } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import DoctorPortrait, { doctorCrop } from '@/components/DoctorPortrait';
import type { HomeDoctor } from '@/types';
import { ArrowRightIcon } from '@/components/home-v2/icons';

export default function DoctorsV2({ doctors }: { doctors: HomeDoctor[] }) {
    if (doctors.length === 0) return null;

    const featured = doctors.slice(0, 4);

    return (
        <section aria-labelledby="doktori-naslov" className="bg-paper py-14 lg:py-20">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal className="flex flex-wrap items-end justify-between gap-4">
                    <h2
                        id="doktori-naslov"
                        className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl"
                    >
                        Naši doktori
                    </h2>
                    <Link
                        href="/doktori"
                        className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal-700 transition-colors hover:text-teal-900"
                    >
                        Svi doktori
                        <ArrowRightIcon className="h-2.5 w-5 shrink-0" />
                    </Link>
                </Reveal>

                <Reveal className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {featured.map((doctor) => (
                        <article
                            key={doctor.slug}
                            className="group relative overflow-hidden rounded-lg border border-ink/10 bg-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-500/35 hover:shadow-[0_16px_36px_-24px_rgba(13,61,54,0.4)]"
                        >
                            <Link href={`/doktori/${doctor.slug}`} className="absolute inset-0 z-[1]" aria-label={doctor.name} />
                            <DoctorPortrait
                                name={doctor.name}
                                photo={doctor.photo}
                                crop={doctorCrop(doctor.slug)}
                                className="aspect-[4/5]"
                                sizes="(min-width: 1280px) 22vw, (min-width: 640px) 50vw, 100vw"
                            />
                            <div className="px-5 py-4">
                                <h3 className="font-display text-[1.15rem] font-semibold leading-snug text-ink group-hover:text-teal-800">
                                    {doctor.name}
                                </h3>
                                <p className="mt-1 text-[0.9rem] text-ink-soft">
                                    {doctor.specialty ?? doctor.title}
                                </p>
                                <span className="mt-3 inline-flex items-center gap-2 text-[0.86rem] font-semibold text-teal-700">
                                    Pogledajte profil
                                    <ArrowRightIcon className="h-2 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                                </span>
                            </div>
                        </article>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
