import { Link, usePage } from '@inertiajs/react';
import SiteLayout from '@/layout/SiteLayout';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';
import ClinicImage from '@/components/ClinicImage';
import PhoneIcon from '@/components/PhoneIcon';
import PreparationGuide from '@/components/PreparationGuide';
import LymphDrainagePanel, { LymphDrainageAside, WhatsAppHeroLink } from '@/components/LymphDrainagePanel';
import { SectionMeta } from '@/components/Motif';
import type { Faq, LymphDrainageContent, NavItem, PreparationGuideData, SeoData, ServiceHeroPhoto, SharedProps } from '@/types';
import { isPreparationGuide, priceListHref, telHref } from '@/types';

interface ServiceShowProps {
    service: {
        name: string;
        slug: string;
        label: string | null;
        subtitle: string | null;
        summary: string | null;
        description: string | null;
        benefits: string[];
        preparation: string[] | PreparationGuideData;
        process: string[];
        duration: string | null;
        price: string | null;
        faq: Faq[];
        image: string | null;
        gallery: string[];
        department: NavItem | null;
        priceListHash: string;
        hero: ServiceHeroPhoto | null;
        lymphDrainage: LymphDrainageContent | null;
    };
    relatedServices: { name: string; slug: string; summary: string | null; image: string | null }[];
    seo: SeoData;
}

export default function ServiceShow({ service, relatedServices, seo }: ServiceShowProps) {
    const { settings } = usePage<SharedProps>().props;
    const lymph = service.lymphDrainage;

    return (
        <SiteLayout seo={seo}>
            <PageHero
                label={service.department?.name ?? 'Usluga'}
                title={lymph?.heading ?? service.name}
                intro={service.subtitle !== service.name ? service.subtitle : service.summary}
                kicker={lymph ? (service.label ? `${service.label} · Fizijatrija` : 'Fizijatrija') : undefined}
                image={service.hero ? null : (service.image ?? 'fasada')}
                photo={service.hero}
                crumbs={[
                    { label: 'Početna', href: '/' },
                    { label: 'Usluge', href: '/#usluge' },
                    { label: service.name },
                ]}
            >
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a href={telHref(settings.phonePrimary)} className="inline-flex min-h-12 w-full items-center justify-center rounded-[3px] bg-teal-600 px-6 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-teal-700 sm:w-auto">
                        Zakažite termin
                    </a>
                    {lymph ? (
                        <WhatsAppHeroLink whatsapp={lymph.whatsapp} />
                    ) : (
                        <Link href="/kontakt" className="inline-flex min-h-12 w-full items-center justify-center rounded-[3px] border border-ink/20 px-6 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700 sm:w-auto">
                            Kontaktirajte nas
                        </Link>
                    )}
                    <Link href={priceListHref(service.priceListHash)} className="inline-flex min-h-12 w-full items-center justify-center rounded-[3px] border border-ink/20 px-6 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700 sm:w-auto">
                        Cjenovnik
                    </Link>
                </div>
            </PageHero>

            {/* Key facts strip */}
            <div className="border-b border-ink/10 bg-mineral">
                <dl className="mx-auto grid max-w-[1360px] grid-cols-1 sm:grid-cols-3">
                    <div className="px-4 py-5 sm:px-6 lg:px-10">
                        <dt className="meta-label text-ink-faint">{lymph ? 'Raspored' : 'Trajanje'}</dt>
                        <dd className="mt-1 font-display font-semibold text-ink">
                            {lymph ? (lymph.sessions ?? 'Putem recepcije') : (service.duration ?? 'Prema vrsti pregleda')}
                        </dd>
                    </div>
                    <div className="border-t border-ink/10 px-4 py-5 sm:border-l sm:border-t-0 sm:px-6 lg:px-10">
                        <dt className="meta-label text-ink-faint">{lymph ? 'Zakazivanje' : 'Cijena'}</dt>
                        <dd className="mt-1 font-display font-semibold text-ink">
                            {lymph ? (
                                'Obavezno'
                            ) : (
                                <>
                                    {service.price ?? 'Informacije na upit'}
                                    <Link href={priceListHref(service.priceListHash)} className="mt-1 block text-[0.78rem] font-medium text-teal-700 hover:text-teal-900">
                                        Pogledajte u cjenovniku
                                    </Link>
                                </>
                            )}
                        </dd>
                    </div>
                    <div className="border-t border-ink/10 px-4 py-5 sm:border-l sm:border-t-0 sm:px-6 lg:px-10">
                        <dt className="meta-label text-ink-faint">Odjeljenje</dt>
                        <dd className="mt-1 font-display font-semibold text-ink">
                            {service.department ? (
                                <Link href={`/odjeljenja/${service.department.slug}`} className="hover:text-teal-700">
                                    {service.department.name}
                                </Link>
                            ) : '—'}
                        </dd>
                    </div>
                </dl>
            </div>

            <div className="mx-auto max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
                <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-14">
                    <div>
                        {lymph ? (
                            <LymphDrainagePanel content={lymph} intro={service.description} />
                        ) : (
                            <>
                                <section aria-labelledby="o-usluzi">
                                    <h2 id="o-usluzi" className="font-display text-2xl font-bold text-ink">
                                        {`Šta je ${service.name}?`}
                                    </h2>
                                    {(service.description ?? '').split('\n\n').map((paragraph, i) => (
                                        <p key={i} className="mt-4 max-w-3xl leading-relaxed text-ink-soft">{paragraph}</p>
                                    ))}
                                </section>

                                {service.benefits.length > 0 ? (
                                    <section aria-labelledby="prednosti" className="mt-12">
                                        <h2 id="prednosti" className="font-display text-2xl font-bold text-ink">Prednosti</h2>
                                        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                                            {service.benefits.map((item) => (
                                                <li key={item} className="flex items-start gap-3 border-l-2 border-teal-500 bg-mineral px-4 py-3 text-[0.93rem] leading-snug text-ink">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                ) : null}
                            </>
                        )}

                        {isPreparationGuide(service.preparation) ? (
                            <PreparationGuide data={service.preparation} />
                        ) : service.preparation.length > 0 ? (
                            <section aria-labelledby="priprema" className="mt-12 sm:mt-16">
                                {lymph ? <SectionMeta index="04" label="Priprema" /> : null}
                                <h2 id="priprema" className={`${lymph ? 'mt-4' : ''} font-display text-2xl font-bold tracking-[-0.015em] text-ink ${lymph ? 'sm:text-3xl' : ''}`}>
                                    {lymph ? 'Priprema za tretman' : 'Priprema za pregled'}
                                </h2>
                                <ul className="mt-5 space-y-3">
                                    {service.preparation.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
                                            <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 bg-teal-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ) : null}

                        {service.process.length > 0 && (
                            <section aria-labelledby="tok" className="mt-12 sm:mt-16">
                                {lymph ? <SectionMeta index="05" label="Tok tretmana" /> : null}
                                <h2 id="tok" className={`${lymph ? 'mt-4' : ''} font-display text-2xl font-bold tracking-[-0.015em] text-ink ${lymph ? 'sm:text-3xl' : ''}`}>
                                    {lymph ? 'Kako izgleda tretman' : 'Tok pregleda'}
                                </h2>
                                <ol className="mt-5 border-l border-teal-500/40">
                                    {service.process.map((step, i) => (
                                        <li key={step} className="relative pb-6 pl-8 last:pb-0">
                                            <span aria-hidden="true" className="meta-label absolute -left-[13px] top-0 flex size-[26px] items-center justify-center border border-teal-500 bg-paper tabular-nums text-teal-700">
                                                {i + 1}
                                            </span>
                                            <p className="pt-0.5 text-[0.98rem] font-medium text-ink">{step}</p>
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        )}

                        {service.faq.length > 0 && (
                            <section aria-labelledby="faq" className="mt-12 sm:mt-16">
                                {lymph ? <SectionMeta index="06" label="Pitanja" /> : null}
                                <h2 id="faq" className={`${lymph ? 'mt-4 mb-5' : 'mb-5'} font-display text-2xl font-bold tracking-[-0.015em] text-ink ${lymph ? 'sm:text-3xl' : ''}`}>
                                    Česta pitanja
                                </h2>
                                <FaqAccordion items={service.faq} />
                            </section>
                        )}

                    </div>

                    <aside className={`space-y-8 lg:pt-2 ${lymph ? 'hidden lg:block' : ''}`}>
                        {lymph ? (
                            <LymphDrainageAside content={lymph} />
                        ) : (
                            <div className="border border-ink/12 bg-teal-900 p-6 text-white">
                                <h2 className="meta-label text-teal-300">Zakažite danas</h2>
                                <p className="mt-3 font-display text-xl font-bold leading-snug">Spremni za {service.name}?</p>
                                <p className="mt-2 text-[0.9rem] leading-relaxed text-teal-100/80">
                                    Pozovite nas ili dođite lično – naš tim je tu da vam pomogne.
                                </p>
                                <a href={telHref(settings.phonePrimary)} className="mt-5 flex items-center gap-3 font-display text-2xl font-bold tabular-nums transition-colors hover:text-teal-300">
                                    <PhoneIcon className="size-5 shrink-0 text-teal-300" />
                                    {settings.phonePrimary}
                                </a>
                                <Link href="/kontakt" className="mt-4 inline-block rounded-[3px] bg-teal-600 px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-teal-700">
                                    Kontaktirajte nas
                                </Link>
                            </div>
                        )}
                    </aside>
                </div>

                {relatedServices.length > 0 && (
                    <section aria-labelledby="povezane" className="mt-20 border-t border-ink/12 pt-10">
                        <h2 id="povezane" className="font-display text-2xl font-bold text-ink">Povezane usluge</h2>
                        <div className="mt-6 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-3">
                            {relatedServices.map((related) => (
                                <Link key={related.slug} href={`/usluge/${related.slug}`} className="group bg-paper transition-colors hover:bg-teal-50/60">
                                    {related.image && (
                                        <ClinicImage crop={related.image} decorative className="aspect-[16/10] w-full object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
                                    )}
                                    <span className="block px-6 py-6">
                                        <span className="font-display text-lg font-semibold text-ink group-hover:text-teal-800">{related.name}</span>
                                        <span className="mt-1.5 block text-[0.88rem] leading-relaxed text-ink-soft">{related.summary}</span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </SiteLayout>
    );
}
