import { Link, usePage } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import type { SharedProps } from '@/types';
import { mapsHref, mapsNavHref, telHref } from '@/types';
import {
    ClockOutlineIcon,
    MailOutlineIcon,
    PhoneOutlineIcon,
    PinOutlineIcon,
} from '@/components/home-v2/icons';

export default function ContactPreviewV2() {
    const { settings } = usePage<SharedProps>().props;
    const query = `ZU SC Dr Brkić, ${settings.address}, ${settings.city}`;
    const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

    return (
        <section aria-labelledby="kontakt-naslov" className="bg-paper py-14 lg:py-20">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
                        <div>
                            <h2
                                id="kontakt-naslov"
                                className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl"
                            >
                                Kontaktirajte nas
                            </h2>
                            <address className="mt-6 space-y-4 text-[0.95rem] not-italic text-ink">
                                <p className="flex items-center gap-2.5">
                                    <PinOutlineIcon className="size-[1.15em] shrink-0 text-teal-600" />
                                    {settings.address}, {settings.city}
                                </p>
                                <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                    <PhoneOutlineIcon className="size-[1.15em] shrink-0 text-teal-600" />
                                    <a href={telHref(settings.phonePrimary)} className="tabular-nums hover:text-teal-700">
                                        {settings.phonePrimary}
                                    </a>
                                    <span aria-hidden="true" className="text-ink/25">
                                        ·
                                    </span>
                                    <a href={telHref(settings.phoneSecondary)} className="tabular-nums hover:text-teal-700">
                                        {settings.phoneSecondary}
                                    </a>
                                </p>
                                <p className="flex items-center gap-2.5">
                                    <MailOutlineIcon className="size-[1.15em] shrink-0 text-teal-600" />
                                    <a href={`mailto:${settings.email}`} className="hover:text-teal-700">
                                        {settings.email}
                                    </a>
                                </p>
                            </address>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    href="/kontakt"
                                    className="inline-flex items-center rounded-md bg-teal-600 px-5 py-2.5 text-[0.9rem] font-semibold text-white hover:bg-teal-700"
                                >
                                    Pošaljite upit
                                </Link>
                                <a
                                    href={mapsNavHref(settings.address, settings.city)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center rounded-md border border-ink/15 px-5 py-2.5 text-[0.9rem] font-semibold text-ink hover:border-teal-600 hover:text-teal-700"
                                >
                                    Navigacija
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-[-0.02em] text-ink">
                                <ClockOutlineIcon className="size-[1em] shrink-0 text-teal-600" />
                                Radno vrijeme
                            </h3>
                            <p className="mt-4 text-[1.02rem] font-medium text-ink">{settings.hoursWeekdays}</p>
                            <p className="text-[1.02rem] font-medium text-ink">{settings.hoursSaturday}</p>
                            <a
                                href={mapsHref(settings.address, settings.city)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-teal-700 hover:text-teal-900"
                            >
                                Otvori u Google Maps
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg border border-ink/10">
                        <iframe
                            title="Mapa – ZU SC Dr Brkić, Bukovica Mala bb, Doboj"
                            src={embedSrc}
                            className="h-[min(52vh,420px)] w-full lg:h-full lg:min-h-[360px]"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
