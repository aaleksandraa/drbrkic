import PhoneIcon from '@/components/PhoneIcon';
import Reveal from '@/components/Reveal';
import { SectionMeta } from '@/components/Motif';
import type { LymphDrainageContent, SharedProps } from '@/types';
import { phoneHref, telHref, viberHref, whatsappHref } from '@/types';
import { usePage } from '@inertiajs/react';

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path d="M12.04 2.5A9.45 9.45 0 002.6 11.9c0 1.67.44 3.3 1.27 4.73L2.5 21.5l5.02-1.32a9.5 9.5 0 004.52 1.15h.01a9.46 9.46 0 000-18.83zm0 17.3h-.01a7.86 7.86 0 01-4-.1l-.29-.1-2.98.78.8-2.9-.19-.3a7.84 7.84 0 01-1.2-4.28 7.87 7.87 0 0113.44-5.57 7.86 7.86 0 01-5.57 13.47zm4.32-5.88c-.24-.12-1.4-.69-1.62-.77s-.37-.12-.53.12-.61.77-.75.93-.28.18-.52.06a6.44 6.44 0 01-1.9-1.17 7.1 7.1 0 01-1.31-1.63c-.14-.24 0-.37.1-.49s.24-.28.35-.42.16-.24.24-.4.04-.3-.02-.42-.53-1.27-.72-1.74c-.19-.46-.38-.4-.53-.4h-.45c-.16 0-.42.06-.64.3s-.84.82-.84 2 .86 2.32.98 2.48 1.69 2.58 4.1 3.62c.57.25 1.02.4 1.37.51.57.18 1.1.16 1.51.1.46-.07 1.4-.57 1.6-1.12s.2-1.02.14-1.12-.22-.18-.46-.3z" />
        </svg>
    );
}

function ViberIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
            <path d="M18.2 2.4H5.8A3.4 3.4 0 002.4 5.8v9.3A3.4 3.4 0 005.8 18.5h.9v2.4a.7.7 0 001.14.55l3.56-2.95h6.8a3.4 3.4 0 003.4-3.4V5.8a3.4 3.4 0 00-3.4-3.4zm-6.7 12.7c-2.3 0-4.3-1.5-4.8-3.6-.1-.4.2-.8.6-.8h.7c.3 0 .5.2.6.5.3 1.1 1.3 1.9 2.9 1.9s2.6-.8 2.9-1.9c.1-.3.3-.5.6-.5h.7c.4 0 .7.4.6.8-.5 2.1-2.5 3.6-4.8 3.6zm4.4-6.2c0 .4-.3.7-.7.7h-.8a.7.7 0 01-.7-.7V6.6c0-.4.3-.7.7-.7h.8c.4 0 .7.3.7.7zm-3.3 0c0 .4-.3.7-.7.7h-.8a.7.7 0 01-.7-.7V6.6c0-.4.3-.7.7-.7h.8c.4 0 .7.3.7.7zm-3.3 0c0 .4-.3.7-.7.7h-.8a.7.7 0 01-.7-.7V6.6c0-.4.3-.7.7-.7h.8c.4 0 .7.3.7.7z" />
        </svg>
    );
}

function PinIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M10 18s6-5.1 6-9.5A6 6 0 004 8.5C4 12.9 10 18 10 18z" />
            <circle cx="10" cy="8.5" r="2.25" />
        </svg>
    );
}

function CalendarIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="4.5" width="14" height="12.5" rx="1.5" />
            <path d="M3 8.5h14M7 3v3M13 3v3" />
        </svg>
    );
}

function BookingActions({
    whatsapp,
    tone = 'dark',
}: {
    whatsapp: string;
    tone?: 'dark' | 'light';
}) {
    const { settings } = usePage<SharedProps>().props;
    const primary = tone === 'light'
        ? 'bg-teal-600 text-white hover:bg-teal-700'
        : 'bg-white text-teal-900 hover:bg-teal-50';
    const secondary = tone === 'light'
        ? 'border border-ink/15 text-ink hover:border-teal-600 hover:text-teal-700'
        : 'border border-white/25 text-white hover:border-white';

    return (
        <div className="grid grid-cols-2 gap-2.5">
            <a
                href={whatsappHref(whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] px-4 text-[0.92rem] font-semibold transition-colors ${primary}`}
            >
                <WhatsAppIcon className="size-4 shrink-0" />
                WhatsApp
            </a>
            <a
                href={viberHref(whatsapp)}
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] px-4 text-[0.92rem] font-semibold transition-colors ${secondary}`}
            >
                <ViberIcon className="size-4 shrink-0" />
                Viber
            </a>
            <a
                href={telHref(settings.phonePrimary)}
                className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-[3px] px-4 text-[0.92rem] font-semibold transition-colors col-span-2 ${secondary}`}
            >
                <PhoneIcon className="size-4 shrink-0" />
                {settings.phonePrimary}
            </a>
        </div>
    );
}

function SessionChips({ content }: { content: LymphDrainageContent }) {
    const items = content.sessionItems ?? [];
    if (items.length === 0) {
        return null;
    }

    return (
        <ul className="mt-5 flex flex-wrap gap-2">
            {items.map((item) => (
                <li
                    key={item.date}
                    className="min-w-[4.5rem] border border-white/20 bg-white/5 px-3 py-2.5 text-center"
                >
                    <span className="block font-display text-2xl font-bold tabular-nums leading-none">{item.day}</span>
                    <span className="mt-1 block text-[0.68rem] font-medium uppercase tracking-[0.12em] text-teal-200">
                        {item.month}
                    </span>
                    {item.startTime && (
                        <span className="mt-1 block text-[0.75rem] tabular-nums text-teal-100/75">
                            {item.startTime}
                            {item.endTime ? `–${item.endTime}` : ''}
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
}

export function WhatsAppHeroLink({ whatsapp }: { whatsapp: string }) {
    return (
        <a
            href={whatsappHref(whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[3px] border border-ink/20 px-6 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700 sm:w-auto"
        >
            <WhatsAppIcon className="size-4 shrink-0" />
            WhatsApp
        </a>
    );
}

export default function LymphDrainagePanel({
    content,
    intro,
}: {
    content: LymphDrainageContent;
    intro?: string | null;
}) {
    const practitioner = content.practitioner;
    const paragraphs = (intro ?? '').split('\n\n').filter(Boolean);

    return (
        <div className="space-y-14 sm:space-y-16">
            <Reveal>
                <section aria-labelledby="o-usluzi">
                    <SectionMeta index="01" label="O tretmanu" />
                    <h2 id="o-usluzi" className="mt-4 font-display text-2xl font-bold tracking-[-0.015em] text-ink sm:text-3xl">
                        Šta je limfna drenaža?
                    </h2>
                    {paragraphs.map((paragraph) => (
                        <p key={paragraph} className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
                            {paragraph}
                        </p>
                    ))}
                    <p className="mt-5 max-w-2xl border-l-2 border-teal-600 pl-4 text-[0.92rem] leading-relaxed text-ink-soft">
                        Zakazivanje je obavezno. Tretmani se održavaju u okviru periodičnih dolazaka Gordane Kolb u Doboj.
                    </p>
                </section>
            </Reveal>

            <div className="lg:hidden">
                <div className="relative overflow-hidden bg-teal-900 p-5 text-white">
                    <div aria-hidden="true" className="mesh-dark pointer-events-none absolute inset-0 opacity-40" />
                    <div className="relative">
                        <p className="meta-label text-teal-300">Zakažite tretman</p>
                        <p className="mt-3 font-display text-xl font-bold leading-snug">
                            {content.sessions ?? 'Termini putem recepcije'}
                        </p>
                        <p className="mt-2 text-[0.88rem] leading-relaxed text-teal-100/80">{content.venue}</p>
                        <div className="mt-5">
                            <BookingActions whatsapp={content.whatsapp} />
                        </div>
                        <a
                            href={phoneHref(content.whatsapp)}
                            className="mt-3 block text-center text-[0.88rem] tabular-nums text-teal-100/80"
                        >
                            {content.whatsapp}
                        </a>
                    </div>
                </div>
            </div>

            <Reveal>
                <section aria-labelledby="indikacije">
                    <SectionMeta index="02" label="Indikacije" />
                    <h2 id="indikacije" className="mt-4 font-display text-2xl font-bold tracking-[-0.015em] text-ink sm:text-3xl">
                        {content.indicationsHeading}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">{content.indicationsIntro}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                        {content.indications.map((item, i) => (
                            <li
                                key={item.title}
                                className="flex gap-3 border border-ink/10 bg-paper p-4 transition-colors hover:border-teal-500/40 hover:bg-teal-50/50 sm:p-5"
                            >
                                <span className="shrink-0 font-display text-[1.05rem] font-semibold tabular-nums text-teal-600">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <p className="font-display text-[1.05rem] font-semibold text-ink">{item.title}</p>
                                    {item.text && <p className="mt-1 text-[0.88rem] leading-relaxed text-ink-soft">{item.text}</p>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </Reveal>

            <Reveal>
                <section aria-labelledby="gordana-kolb">
                    <SectionMeta index="03" label="Terapeutkinja" />
                    <p className="mt-4 text-[0.95rem] font-medium text-teal-800">{practitioner.kicker}</p>
                    <h2 id="gordana-kolb" className="mt-1 font-display text-2xl font-bold tracking-[-0.015em] text-ink sm:text-3xl">
                        {practitioner.name}
                    </h2>
                    <div className="mt-6 overflow-hidden border border-ink/10 bg-mineral lg:grid lg:grid-cols-[minmax(200px,260px)_1fr]">
                        <picture>
                            <source type="image/webp" srcSet={practitioner.photo} />
                            <img
                                src={practitioner.photoFallback}
                                alt={practitioner.name}
                                width={240}
                                height={360}
                                className="mx-auto aspect-[3/4] w-full max-w-[220px] object-cover object-top sm:max-w-[260px] lg:max-w-none lg:h-full"
                            />
                        </picture>
                        <div className="flex flex-col justify-center px-5 py-6 sm:px-8 sm:py-8">
                            <p className="meta-label text-ink-faint">{practitioner.role}</p>
                            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ink-soft">{practitioner.bio}</p>
                        </div>
                    </div>
                </section>
            </Reveal>

            <Reveal>
                <section aria-labelledby="naredni-termini-drenaze">
                    <div className="relative overflow-hidden bg-teal-900 p-5 text-white sm:p-8 lg:p-10">
                        <div aria-hidden="true" className="mesh-dark pointer-events-none absolute inset-0 opacity-40" />
                        <div className="relative">
                            <p className="meta-label text-teal-300">Aktuelni raspored</p>
                            <h2 id="naredni-termini-drenaze" className="mt-3 font-display text-2xl font-bold tracking-[-0.015em] sm:text-3xl">
                                Naredni termini limfne drenaže
                            </h2>
                            {content.sessions ? (
                                <p className="mt-6 flex items-center gap-2.5 font-display text-[1.45rem] font-bold leading-snug tracking-[-0.02em] sm:text-3xl">
                                    <CalendarIcon className="size-[1.05em] shrink-0 text-teal-300" />
                                    {content.sessions}
                                </p>
                            ) : (
                                <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-teal-100/90">
                                    Sljedeći termini objavljuju se putem recepcije. Pozovite nas ili pišite na WhatsApp i Viber.
                                </p>
                            )}
                            <SessionChips content={content} />
                            <p className="mt-4 flex items-center gap-2 text-[0.95rem] text-teal-100/85">
                                <PinIcon className="size-4 shrink-0 text-teal-300" />
                                {content.venue}
                            </p>
                        </div>
                    </div>
                </section>
            </Reveal>
        </div>
    );
}

export function LymphDrainageAside({ content }: { content: LymphDrainageContent }) {
    const { settings } = usePage<SharedProps>().props;

    return (
        <div className="hidden space-y-4 lg:sticky lg:top-24 lg:block">
            <div className="border border-ink/12 bg-teal-900 p-5 text-white sm:p-6">
                <p className="meta-label text-teal-300">Zakažite tretman</p>
                <p className="mt-3 font-display text-xl font-bold leading-snug">
                    {content.sessions ?? 'Termini putem recepcije'}
                </p>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-teal-100/80">{content.venue}</p>
                <div className="mt-5">
                    <BookingActions whatsapp={content.whatsapp} />
                </div>
                <a
                    href={telHref(settings.phoneSecondary)}
                    className="mt-3 flex min-h-11 items-center gap-2 text-[0.92rem] font-semibold tabular-nums text-teal-100 transition-colors hover:text-white"
                >
                    <PhoneIcon className="size-4 shrink-0 text-teal-300" />
                    {settings.phoneSecondary}
                </a>
                <a
                    href={phoneHref(content.whatsapp)}
                    className="mt-2 block text-[0.82rem] tabular-nums text-teal-100/70 transition-colors hover:text-white"
                >
                    WhatsApp / Viber {content.whatsapp}
                </a>
            </div>
        </div>
    );
}
