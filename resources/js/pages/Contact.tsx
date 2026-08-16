import { usePage } from '@inertiajs/react';
import SiteLayout from '@/layout/SiteLayout';
import PageHero from '@/components/PageHero';
import ClinicImage from '@/components/ClinicImage';
import type { SeoData, SharedProps } from '@/types';
import { mapsHref, mapsNavHref, telHref } from '@/types';

export default function Contact({ seo }: { seo: SeoData }) {
    const { settings } = usePage<SharedProps>().props;
    const query = `ZU SC Dr Brkić, ${settings.address}, ${settings.city}`;
    const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

    return (
        <SiteLayout seo={seo}>
            <PageHero
                label="Kontakt"
                title="Kontaktirajte nas"
                intro="Tu smo za vas – pozovite, pišite ili nas posjetite lično. Rado ćemo odgovoriti na sva vaša pitanja."
                image="ulaz"
                crumbs={[{ label: 'Početna', href: '/' }, { label: 'Kontakt' }]}
            />

            <div className="border-b border-ink/10 bg-mineral">
                <div className="mx-auto grid max-w-[1360px] sm:grid-cols-2 xl:grid-cols-4">
                    <div className="border-b border-ink/10 px-4 py-6 sm:border-r sm:px-6 lg:px-10 xl:border-b-0">
                        <h2 className="meta-label text-ink-faint">Telefon</h2>
                        <a href={telHref(settings.phonePrimary)} className="mt-2 block font-display text-lg font-bold tabular-nums text-ink hover:text-teal-700">{settings.phonePrimary}</a>
                        <a href={telHref(settings.phoneSecondary)} className="block font-display font-semibold tabular-nums text-ink-soft hover:text-teal-700">{settings.phoneSecondary}</a>
                    </div>
                    <div className="border-b border-ink/10 px-4 py-6 sm:px-6 lg:px-10 xl:border-b-0 xl:border-r">
                        <h2 className="meta-label text-ink-faint">Email</h2>
                        <a href={`mailto:${settings.email}`} className="mt-2 block font-display text-lg font-bold text-ink hover:text-teal-700">{settings.email}</a>
                        <p className="text-[0.88rem] text-ink-soft">Pišite nam bilo kada</p>
                    </div>
                    <div className="px-4 py-6 sm:border-r sm:px-6 lg:px-10">
                        <h2 className="meta-label text-ink-faint">Adresa</h2>
                        <p className="mt-2 font-display text-lg font-bold text-ink">{settings.address}</p>
                        <p className="text-[0.88rem] text-ink-soft">{settings.city}, BiH</p>
                    </div>
                    <div className="border-t border-ink/10 px-4 py-6 sm:border-t-0 sm:px-6 lg:px-10">
                        <h2 className="meta-label text-ink-faint">Radno vrijeme</h2>
                        <p className="mt-2 font-display font-bold text-ink">{settings.hoursWeekdays}</p>
                        <p className="font-display font-semibold text-ink-soft">{settings.hoursSaturday}</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-[1360px] px-4 py-14 sm:px-6 lg:px-10">
                <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr]">
                    <section aria-labelledby="mapa-naslov">
                        <h2 id="mapa-naslov" className="font-display text-2xl font-bold text-ink">Lokacija</h2>
                        <p className="mt-2 text-[0.95rem] text-ink-soft">
                            ZU SC Dr Brkić – {settings.address}, {settings.city}
                        </p>
                        <div className="mt-6 overflow-hidden rounded-xl border border-ink/12">
                            <iframe
                                title="Mapa – ZU SC Dr Brkić, Bukovica Mala bb, Doboj"
                                src={embedSrc}
                                className="h-[min(70vh,640px)] w-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            <a
                                href={mapsNavHref(settings.address, settings.city)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="meta-label text-teal-700 hover:text-teal-900"
                            >
                                Navigacija
                            </a>
                            <a
                                href={mapsHref(settings.address, settings.city)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="meta-label text-teal-700 hover:text-teal-900"
                            >
                                Otvori u Google Maps
                            </a>
                        </div>
                    </section>

                    <section aria-labelledby="dolazak-naslov">
                        <h2 id="dolazak-naslov" className="font-display text-2xl font-bold text-ink">Kako do nas?</h2>
                        <p className="mt-2 text-[0.95rem] text-ink-soft">
                            Objekat se nalazi u Bukovici Maloj, oko pet minuta od centra Doboja.
                        </p>
                        <ClinicImage crop="fasada" className="mt-6 aspect-[16/10] w-full rounded-xl object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
                        <ul className="mt-6 space-y-2.5">
                            {['Besplatan parking ispred ustanove', '5 minuta od centra Doboja', 'Pristupačno za osobe sa invaliditetom'].map((item) => (
                                <li key={item} className="flex items-start gap-3 text-[0.95rem] text-ink-soft">
                                    <span aria-hidden="true" className="mt-[8px] size-1.5 shrink-0 bg-teal-600" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </SiteLayout>
    );
}
