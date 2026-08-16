import { Link, usePage } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import { SectionMeta } from '@/components/Motif';
import ClinicImage from '@/components/ClinicImage';
import type { SharedProps } from '@/types';
import { telHref } from '@/types';

const arrival = [
    'Besplatan parking ispred ustanove',
    '5 minuta od centra Doboja',
    'Pristupačno za osobe sa invaliditetom',
];

export default function LocationPreview() {
    const { settings } = usePage<SharedProps>().props;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`ZU SC Dr Brkić, ${settings.address}, Doboj`)}`;

    return (
        <section aria-labelledby="lokacija-naslov" className="plan-grid bg-paper py-16 lg:py-24">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal>
                    <SectionMeta index="09" label="Lokacija i kontakt" />
                    <h2 id="lokacija-naslov" className="mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl">
                        Kako do nas
                    </h2>
                </Reveal>

                <Reveal className="mt-10 overflow-hidden border border-ink/12">
                    <ClinicImage crop="fasada" className="aspect-[21/9] w-full object-cover" sizes="100vw" />
                </Reveal>

                <Reveal className="mt-0 grid border border-t-0 border-ink/12 bg-paper md:grid-cols-2 xl:grid-cols-4">
                    <div className="border-b border-ink/12 px-6 py-7 md:border-r xl:border-b-0">
                        <h3 className="meta-label text-ink-faint">Adresa</h3>
                        <address className="mt-3 text-[1.02rem] font-medium not-italic leading-relaxed text-ink">
                            {settings.address}
                            <br />
                            {settings.city}
                        </address>
                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="meta-label mt-4 inline-flex items-center gap-2 text-teal-700 transition-colors hover:text-teal-900"
                        >
                            Prikažite na mapi
                            <svg aria-hidden="true" viewBox="0 0 24 12" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M0 6h22M17 1l5 5-5 5" />
                            </svg>
                        </a>
                    </div>

                    <div className="border-b border-ink/12 px-6 py-7 xl:border-b-0 xl:border-r">
                        <h3 className="meta-label text-ink-faint">Telefoni</h3>
                        <p className="mt-3 space-y-1">
                            <a href={telHref(settings.phonePrimary)} className="block text-[1.02rem] font-medium tabular-nums text-ink transition-colors hover:text-teal-700">
                                {settings.phonePrimary}
                            </a>
                            <a href={telHref(settings.phoneSecondary)} className="block text-[1.02rem] font-medium tabular-nums text-ink transition-colors hover:text-teal-700">
                                {settings.phoneSecondary}
                            </a>
                        </p>
                        <a href={`mailto:${settings.email}`} className="mt-3 block text-[0.9rem] text-ink-soft transition-colors hover:text-teal-700">
                            {settings.email}
                        </a>
                    </div>

                    <div className="border-b border-ink/12 px-6 py-7 md:border-b-0 md:border-r">
                        <h3 className="meta-label text-ink-faint">Radno vrijeme</h3>
                        <p className="mt-3 text-[1.02rem] font-medium leading-relaxed text-ink">{settings.hoursWeekdays}</p>
                        <p className="text-[1.02rem] font-medium leading-relaxed text-ink">{settings.hoursSaturday}</p>
                    </div>

                    <div className="px-6 py-7">
                        <h3 className="meta-label text-ink-faint">Dolazak</h3>
                        <ul className="mt-3 space-y-2">
                            {arrival.map((item) => (
                                <li key={item} className="flex items-start gap-2.5 text-[0.92rem] leading-snug text-ink-soft">
                                    <span aria-hidden="true" className="mt-[7px] size-1.5 shrink-0 bg-teal-600" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Link href="/kontakt" className="meta-label mt-4 inline-flex items-center gap-2 text-teal-700 transition-colors hover:text-teal-900">
                            Kontakt stranica
                            <svg aria-hidden="true" viewBox="0 0 24 12" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M0 6h22M17 1l5 5-5 5" />
                            </svg>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
