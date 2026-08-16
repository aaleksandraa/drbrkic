import { Link, usePage } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import { SectionMeta } from '@/components/Motif';
import PhoneIcon from '@/components/PhoneIcon';
import type { SharedProps, SpecialistVisitItem } from '@/types';
import { telHref } from '@/types';

export default function SpecialistSchedule({ visits }: { visits: SpecialistVisitItem[] }) {
    const { settings } = usePage<SharedProps>().props;

    return (
        <section aria-labelledby="specijalisti-naslov" className="border-y border-ink/10 bg-mineral py-16 lg:py-24">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal className="grid gap-10 lg:grid-cols-[minmax(280px,0.9fr)_2fr] lg:gap-16">
                    <div>
                        <SectionMeta index="02" label="Raspored" />
                        <h2 id="specijalisti-naslov" className="mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl">
                            Dolasci specijalista
                        </h2>
                        <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
                            Gostujući specijalisti primaju pacijente prema objavljenom rasporedu.
                            Termin zakazujete pozivom na recepciju.
                        </p>
                        <div className="mt-8 inline-flex flex-col border-l-2 border-teal-500 pl-5">
                            <span className="meta-label text-ink-faint">Zakazivanje termina</span>
                            <a href={telHref(settings.phonePrimary)} className="mt-1 flex items-center gap-3 font-display text-2xl font-bold tabular-nums text-ink transition-colors hover:text-teal-700">
                                <PhoneIcon className="size-5 shrink-0 text-teal-600" />
                                {settings.phonePrimary}
                            </a>
                        </div>
                    </div>

                    <div>
                        {visits.length > 0 ? (
                            <ol className="border-t border-ink/12">
                                {visits.map((visit) => (
                                    <li
                                        key={`${visit.doctorName}-${visit.date}`}
                                        className="grid grid-cols-[72px_1fr] items-center gap-x-5 border-b border-ink/12 bg-paper/0 py-5 transition-colors hover:bg-paper sm:grid-cols-[88px_1.2fr_1fr_auto] sm:gap-x-8"
                                    >
                                        <time dateTime={visit.date} className="row-span-2 border-r border-ink/12 pr-5 text-center sm:row-span-1 sm:pr-8">
                                            <span className="block font-display text-4xl font-bold leading-none tabular-nums text-ink sm:text-[2.75rem]">
                                                {visit.day}
                                            </span>
                                            <span className="meta-label mt-1 block text-teal-600">{visit.month}</span>
                                        </time>
                                        <div>
                                            {visit.href ? (
                                                <Link href={visit.href} className="font-display text-lg font-semibold text-ink transition-colors hover:text-teal-700">
                                                    {visit.doctorName}
                                                </Link>
                                            ) : (
                                                <h3 className="font-display text-lg font-semibold text-ink">{visit.doctorName}</h3>
                                            )}
                                            <p className="text-[0.9rem] text-ink-soft">{visit.specialty}</p>
                                        </div>
                                        <div className="text-[0.9rem] text-ink-soft">
                                            {visit.startTime && visit.endTime && (
                                                <p className="tabular-nums">{visit.startTime} – {visit.endTime}</p>
                                            )}
                                            {visit.note && <p className="mt-0.5 text-crimson/90">{visit.note}</p>}
                                        </div>
                                        {visit.href ? (
                                            <Link
                                                href={visit.href}
                                                className="col-span-2 mt-2 text-[0.9rem] font-semibold text-teal-700 transition-colors hover:text-teal-900 sm:col-span-1 sm:mt-0"
                                            >
                                                Detalji dolaska →
                                            </Link>
                                        ) : (
                                            <a
                                                href={telHref(settings.phonePrimary)}
                                                className="col-span-2 mt-2 text-[0.9rem] font-semibold text-teal-700 transition-colors hover:text-teal-900 sm:col-span-1 sm:mt-0"
                                            >
                                                Zakažite termin →
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            <div className="flex h-full flex-col justify-center border border-ink/12 bg-paper px-6 py-10 sm:px-10">
                                <p className="meta-label text-ink-faint">Trenutno stanje</p>
                                <p className="mt-3 max-w-md font-display text-xl font-semibold leading-snug text-ink">
                                    Trenutno nema najavljenih termina gostujućih specijalista.
                                </p>
                                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
                                    Novi termini objavljuju se u novostima, a informacije možete dobiti
                                    i pozivom na recepciju.
                                </p>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    <a
                                        href={telHref(settings.phonePrimary)}
                                        className="rounded-[3px] bg-teal-600 px-5 py-3 text-[0.9rem] font-semibold text-white transition-colors hover:bg-teal-700"
                                    >
                                        Pozovite recepciju
                                    </a>
                                    <Link
                                        href="/novosti"
                                        className="rounded-[3px] border border-ink/20 px-5 py-3 text-[0.9rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700"
                                    >
                                        Pratite novosti
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
