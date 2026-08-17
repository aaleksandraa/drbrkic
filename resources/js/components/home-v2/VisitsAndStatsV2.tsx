import { Link, usePage } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import type { SharedProps, SpecialistVisitItem } from '@/types';
import { telHref } from '@/types';
import {
    DepartmentsIcon,
    PatientsIcon,
    TeamIcon,
    YearsIcon,
} from '@/components/home-v2/icons';

const stats = [
    { value: '20+', label: 'godina iskustva', icon: YearsIcon },
    { value: '25.000+', label: 'zadovoljnih pacijenata', icon: PatientsIcon },
    { value: '6', label: 'odjeljenja', icon: DepartmentsIcon },
    { value: 'Tim', label: 'stručan i posvećen', icon: TeamIcon },
];

export default function VisitsAndStatsV2({ visits }: { visits: SpecialistVisitItem[] }) {
    const { settings } = usePage<SharedProps>().props;

    return (
        <section aria-labelledby="specijalisti-naslov" className="bg-paper py-14 lg:py-20">
            <div className="mx-auto grid max-w-[1360px] gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:px-10">
                <Reveal>
                    <h2
                        id="specijalisti-naslov"
                        className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl"
                    >
                        Dolasci specijalista
                    </h2>
                    <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
                        Gostujući specijalisti primaju prema objavljenom rasporedu. Termin zakazujete
                        pozivom na recepciju.
                    </p>

                    {visits.length > 0 ? (
                        <ul className="mt-6 divide-y divide-ink/10 overflow-hidden rounded-lg border border-ink/10 bg-paper">
                            {visits.map((visit) => (
                                <li
                                    key={`${visit.doctorName}-${visit.date}`}
                                    className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:gap-5 sm:px-5"
                                >
                                    <time
                                        dateTime={visit.date}
                                        className="flex shrink-0 items-baseline gap-1.5 rounded-md bg-teal-50 px-3 py-2 text-teal-800"
                                    >
                                        <span className="font-display text-xl font-bold leading-none tabular-nums">
                                            {visit.day}.
                                        </span>
                                        <span className="text-[0.78rem] font-semibold uppercase tracking-wide">
                                            {visit.month.toLowerCase()}
                                        </span>
                                    </time>
                                    <div className="min-w-0 flex-1">
                                        {visit.href ? (
                                            <Link
                                                href={visit.href}
                                                className="font-display text-[1.05rem] font-semibold text-ink transition-colors hover:text-teal-700"
                                            >
                                                {visit.doctorName}
                                            </Link>
                                        ) : (
                                            <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                                                {visit.doctorName}
                                            </h3>
                                        )}
                                        <p className="mt-0.5 text-[0.88rem] text-ink-soft">
                                            {visit.specialty}
                                            {visit.startTime && visit.endTime && (
                                                <span className="tabular-nums">
                                                    {' '}
                                                    · {visit.startTime}–{visit.endTime}
                                                </span>
                                            )}
                                        </p>
                                        {visit.note && (
                                            <p className="mt-0.5 text-[0.82rem] text-crimson/90">{visit.note}</p>
                                        )}
                                    </div>
                                    {visit.href ? (
                                        <Link
                                            href={visit.href}
                                            className="inline-flex shrink-0 items-center justify-center rounded-md bg-teal-600 px-4 py-2.5 text-[0.85rem] font-semibold text-white transition-colors hover:bg-teal-700"
                                        >
                                            Zakažite termin
                                        </Link>
                                    ) : (
                                        <a
                                            href={telHref(settings.phonePrimary)}
                                            className="inline-flex shrink-0 items-center justify-center rounded-md bg-teal-600 px-4 py-2.5 text-[0.85rem] font-semibold text-white transition-colors hover:bg-teal-700"
                                        >
                                            Zakažite termin
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="mt-6 rounded-lg border border-ink/10 bg-mineral px-5 py-8">
                            <p className="font-display text-lg font-semibold text-ink">
                                Trenutno nema najavljenih termina
                            </p>
                            <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-soft">
                                Novi termini objavljuju se u novostima, a informacije možete dobiti i
                                pozivom na recepciju.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-3">
                                <a
                                    href={telHref(settings.phonePrimary)}
                                    className="inline-flex items-center rounded-md bg-teal-600 px-4 py-2.5 text-[0.88rem] font-semibold text-white hover:bg-teal-700"
                                >
                                    Pozovite recepciju
                                </a>
                                <Link
                                    href="/novosti"
                                    className="inline-flex items-center rounded-md border border-ink/15 px-4 py-2.5 text-[0.88rem] font-semibold text-ink hover:border-teal-600 hover:text-teal-700"
                                >
                                    Pratite novosti
                                </Link>
                            </div>
                        </div>
                    )}
                </Reveal>

                <Reveal delay={80} className="rounded-lg border border-ink/10 bg-mineral p-6 sm:p-8 lg:p-10">
                    <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl">
                        20 godina sa vama
                    </h2>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
                        Od 2006. godine ZU SC Dr Brkić razvija dijagnostiku i specijalističku zaštitu
                        u Doboju — s ciljem da pacijenti dobiju pouzdanu uslugu na jednom mjestu.
                    </p>
                    <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
                        {stats.map((stat) => (
                            <li key={stat.label} className="rounded-lg bg-paper px-4 py-4">
                                <p className="flex items-center gap-2 font-display text-xl font-bold text-teal-700 sm:text-2xl">
                                    <stat.icon className="size-[1em] shrink-0" />
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-[0.84rem] leading-snug text-ink-soft">{stat.label}</p>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/o-nama"
                        className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal-700 transition-colors hover:text-teal-900"
                    >
                        Pročitajte našu priču
                        <span aria-hidden="true">→</span>
                    </Link>
                </Reveal>
            </div>
        </section>
    );
}
