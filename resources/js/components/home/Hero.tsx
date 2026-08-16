import { Link, usePage } from '@inertiajs/react';
import ClinicImage from '@/components/ClinicImage';
import type { HomeNewsArticle, SharedProps, SpecialistVisitItem } from '@/types';
import { telHref } from '@/types';

interface HeroProps {
    visits: SpecialistVisitItem[];
    news: HomeNewsArticle[];
}

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3.5 3.5h3l1.5 4-2 1.5a12 12 0 005 5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5C7.6 17.6 2.4 12.4 2 5.1A1.5 1.5 0 013.5 3.5z" />
        </svg>
    );
}

function MapPinIcon({ className }: { className?: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 18s6-5.1 6-9.5A6 6 0 004 8.5C4 12.9 10 18 10 18z" />
            <circle cx="10" cy="8.5" r="2.25" />
        </svg>
    );
}

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg aria-hidden="true" viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="10" cy="10" r="7.25" />
            <path d="M10 5.5V10l3 2" />
        </svg>
    );
}

/** Featured article — thumbnail + stronger contrast so it reads on the photo. */
function SpotlightNews({ news }: { news: HomeNewsArticle[] }) {
    const article = news.find((item) => item.isFeatured) ?? news[0];
    if (!article) return null;

    return (
        <Link
            href={`/novosti/${article.slug}`}
            className="group flex w-full max-w-lg overflow-hidden rounded-xl border border-white/28 bg-teal-950/70 text-left shadow-[0_10px_28px_rgb(0_0_0/0.35)] backdrop-blur-md transition-colors hover:border-teal-300/55 hover:bg-teal-950/80"
        >
            <span className="relative isolate min-h-[6.5rem] w-[6.25rem] shrink-0 overflow-hidden sm:w-[8.25rem]">
                <ClinicImage
                    crop={article.image ?? 'fasada'}
                    decorative
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    sizes="132px"
                />
            </span>
            <span className="flex min-w-0 flex-1 flex-col justify-center px-4 py-3.5 sm:px-5">
                <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <span className="rounded-full bg-teal-400/25 px-2 py-0.5 text-[0.7rem] font-semibold text-teal-100">
                        {article.category ?? 'Novost'}
                    </span>
                    {article.publishedAt && (
                        <span className="text-[0.75rem] tabular-nums text-white/60">{article.publishedAt}</span>
                    )}
                </span>
                <span className="mt-1.5 font-display text-[1.05rem] font-semibold leading-snug text-white transition-colors group-hover:text-teal-200 sm:text-[1.12rem]">
                    {article.title}
                </span>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[0.8rem] font-medium text-teal-200">
                    Pročitajte
                    <svg aria-hidden="true" viewBox="0 0 16 12" className="h-2 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M0 6h14M10 2l4 4-4 4" />
                    </svg>
                </span>
            </span>
        </Link>
    );
}

/** Muted cyan strip — upcoming visits in a single row. */
function VisitsBar({ visits, phone }: { visits: SpecialistVisitItem[]; phone: string }) {
    return (
        <div className="flex flex-col gap-3 rounded-xl bg-teal-600 px-5 py-3.5 sm:flex-row sm:items-center sm:gap-5">
            <p className="shrink-0 text-[1rem] font-semibold tracking-[-0.01em] text-white">
                Dolasci specijalista
            </p>

            {visits.length > 0 ? (
                <ul className="flex min-w-0 flex-1 items-center gap-2.5 overflow-x-auto">
                    {visits.slice(0, 3).map((visit) => {
                        const content = (
                            <>
                                <span className="text-[0.95rem] font-semibold tabular-nums">
                                    {visit.day}. {visit.month.toLowerCase()}
                                </span>
                                <span className="text-[1rem]">
                                    {visit.doctorName}
                                    {visit.specialty ? ` · ${visit.specialty}` : ''}
                                </span>
                                {visit.startTime && visit.endTime && (
                                    <span className="text-[0.9rem] tabular-nums text-white/75">
                                        {visit.startTime}–{visit.endTime}
                                    </span>
                                )}
                            </>
                        );

                        return (
                            <li key={`${visit.doctorName}-${visit.date}`}>
                                {visit.href ? (
                                    <Link
                                        href={visit.href}
                                        className="flex shrink-0 items-center gap-3 rounded-lg bg-white/15 px-3.5 py-2 text-white transition-colors hover:bg-white/25"
                                    >
                                        {content}
                                    </Link>
                                ) : (
                                    <div className="flex shrink-0 items-center gap-3 rounded-lg bg-white/15 px-3.5 py-2 text-white">
                                        {content}
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p className="min-w-0 flex-1 text-[1rem] leading-snug text-white/85">
                    Trenutno nema najavljenih termina — nove objavljujemo u novostima.
                </p>
            )}

            <a
                href={telHref(phone)}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-[0.95rem] font-semibold text-teal-800 transition-colors hover:bg-teal-50"
            >
                <PhoneIcon className="size-4" />
                Zakažite
            </a>
        </div>
    );
}

function QuickInfoItems({ settings }: { settings: SharedProps['settings'] }) {
    return (
        <>
            <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`ZU Dr Brkić, ${settings.address}, Doboj`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
            >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-100">
                    <MapPinIcon className="size-4.5" />
                </span>
                <span>
                    <span className="block text-[0.7rem] text-white/50">Lokacija</span>
                    <span className="block text-[0.88rem] font-medium text-white transition-colors group-hover:text-teal-200">
                        {settings.address}, Doboj
                    </span>
                </span>
            </a>
            <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-100">
                    <PhoneIcon className="size-4.5" />
                </span>
                <span>
                    <span className="block text-[0.7rem] text-white/50">Telefon</span>
                    <span className="block text-[0.88rem] font-medium tabular-nums">
                        <a href={telHref(settings.phonePrimary)} className="text-white transition-colors hover:text-teal-200">
                            {settings.phonePrimary}
                        </a>
                        <span aria-hidden="true" className="px-1.5 text-white/35">·</span>
                        <a href={telHref(settings.phoneSecondary)} className="text-white transition-colors hover:text-teal-200">
                            {settings.phoneSecondary}
                        </a>
                    </span>
                </span>
            </div>
            <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-100">
                    <ClockIcon className="size-4.5" />
                </span>
                <span>
                    <span className="block text-[0.7rem] text-white/50">Radno vrijeme</span>
                    <span className="block text-[0.88rem] font-medium text-white">{settings.hoursWeekdays}</span>
                    <span className="block text-[0.75rem] text-white/60">{settings.hoursSaturday}</span>
                </span>
            </div>
        </>
    );
}

export default function Hero({ visits, news }: HeroProps) {
    const { settings } = usePage<SharedProps>().props;

    return (
        <section aria-label="Uvod" className="relative isolate flex flex-col overflow-hidden bg-teal-950">
            <ClinicImage
                crop="fasada"
                priority
                className="absolute inset-0 -z-10 size-full object-cover object-center"
                sizes="100vw"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        'linear-gradient(to bottom, rgb(8 33 30 / 0.22) 0%, rgb(8 33 30 / 0.28) 32%, rgb(8 33 30 / 0.55) 58%, rgb(8 33 30 / 0.84) 78%, rgb(8 33 30 / 0.96) 100%)',
                }}
            />

            <div className="mx-auto flex w-full max-w-[1360px] flex-1 flex-col px-4 py-10 sm:px-6 lg:min-h-[calc(100svh-124px)] lg:px-10 lg:pb-5 lg:pt-16">
                <div className="mt-auto mb-4 text-center lg:mb-16 lg:border-l-2 lg:border-teal-400/80 lg:pl-6 lg:text-left">
                    <p
                        className="hero-rise mb-3 text-[0.78rem] font-medium tracking-[0.04em] text-teal-200 [text-shadow:0_1px_12px_rgb(0_0_0/0.35)] sm:text-[0.85rem]"
                        style={{ '--rise-delay': '0ms' } as React.CSSProperties}
                    >
                        20 godina uz vas
                        <span aria-hidden="true" className="mx-2 text-white/45">
                            •
                        </span>
                        Specijalistički centar Dr Brkić
                    </p>

                    <h1
                        className="hero-rise font-display text-[1.9rem] font-bold leading-[1.12] tracking-[-0.02em] text-white [text-shadow:0_1px_18px_rgb(0_0_0/0.4)] sm:text-[2.45rem] lg:text-[3.05rem] lg:leading-[1.08] xl:text-[3.25rem]"
                        style={{ '--rise-delay': '60ms' } as React.CSSProperties}
                    >
                        Specijalistički pregledi, ultrazvuk i dijagnostika u Doboju
                    </h1>

                    <p
                        className="hero-rise mt-4 hidden max-w-none text-[0.98rem] leading-relaxed text-white/82 [text-shadow:0_1px_12px_rgb(0_0_0/0.35)] lg:mt-5 lg:block lg:text-[1.05rem]"
                        style={{ '--rise-delay': '120ms' } as React.CSSProperties}
                    >
                        Radiologija i ultrazvuk, laboratorijske analize, porodična medicina, medicina
                        rada i fizijatrija, stručna zdravstvena zaštita na jednom mjestu.
                    </p>

                    <div
                        className="hero-rise mt-6 flex flex-wrap items-center justify-center gap-3 lg:mt-7 lg:justify-start"
                        style={{ '--rise-delay': '180ms' } as React.CSSProperties}
                    >
                        <Link
                            href="/kontakt"
                            className="rounded-full bg-teal-600 px-7 py-3 text-[0.92rem] font-semibold text-white shadow-lg shadow-teal-950/25 transition-colors hover:bg-teal-700"
                        >
                            Zakažite pregled
                        </Link>
                        <a
                            href="#usluge"
                            className="rounded-full bg-crimson px-7 py-3 text-[0.92rem] font-semibold text-white shadow-lg shadow-crimson/25 transition-colors hover:bg-[#c41c2d]"
                        >
                            Naše usluge
                        </a>
                        <a href={telHref(settings.phonePrimary)} className="group hidden px-1 py-2.5 text-[0.9rem] text-white/75 lg:inline">
                            ili pozovite{' '}
                            <span className="font-semibold tabular-nums text-white underline decoration-teal-400 decoration-2 underline-offset-4 transition-colors group-hover:text-teal-200">
                                {settings.phonePrimary}
                            </span>
                        </a>
                    </div>

                    <div
                        className="hero-rise mt-6 flex justify-center lg:mt-7 lg:justify-start"
                        style={{ '--rise-delay': '200ms' } as React.CSSProperties}
                    >
                        <SpotlightNews news={news} />
                    </div>
                </div>

                <div className="hero-rise mt-3 space-y-3 lg:mt-10" style={{ '--rise-delay': '280ms' } as React.CSSProperties}>
                    <VisitsBar visits={visits} phone={settings.phonePrimary} />

                    <div className="grid grid-cols-1 gap-4 rounded-xl bg-teal-950/25 px-4 py-3.5 sm:grid-cols-3 sm:items-center sm:gap-6 lg:px-5">
                        <QuickInfoItems settings={settings} />
                    </div>
                </div>

                <a
                    href="#pomoc-naslov"
                    aria-label="Skrolujte na sadržaj stranice"
                    className="hero-rise mx-auto mt-4 hidden text-white/50 transition-colors hover:text-teal-200 lg:block"
                    style={{ '--rise-delay': '360ms' } as React.CSSProperties}
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-6 motion-safe:animate-bounce"
                    >
                        <path d="M6 6.5l6 5.5 6-5.5" className="opacity-50" />
                        <path d="M6 12.5l6 5.5 6-5.5" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
