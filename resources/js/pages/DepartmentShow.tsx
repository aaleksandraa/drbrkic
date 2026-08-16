import { Link, usePage } from '@inertiajs/react';
import SiteLayout from '@/layout/SiteLayout';
import PageHero from '@/components/PageHero';
import FaqAccordion from '@/components/FaqAccordion';
import ClinicImage from '@/components/ClinicImage';
import PhoneIcon from '@/components/PhoneIcon';
import PreparationGuide from '@/components/PreparationGuide';
import type { Consultant, Faq, PreparationGuideData, SeoData, SharedProps, SpecialistVisitItem } from '@/types';
import { priceListHref, telHref } from '@/types';

interface DepartmentShowProps {
    department: {
        name: string;
        slug: string;
        pageTitle: string | null;
        shortDescription: string | null;
        description: string | null;
        equipment: string[];
        indications: string[];
        faq: Faq[];
        preparation: PreparationGuideData | null;
        image: string | null;
        gallery: string[];
        services: { name: string; slug: string; summary: string | null; label: string | null }[];
        doctors: { name: string; slug: string; title: string | null }[];
        consultants: { roster: Consultant[]; fields: string[] } | null;
        upcomingVisits: SpecialistVisitItem[];
    };
    otherDepartments: { name: string; slug: string; shortDescription: string | null; image: string | null }[];
    seo: SeoData;
}

export default function DepartmentShow({ department, otherDepartments, seo }: DepartmentShowProps) {
    const { settings } = usePage<SharedProps>().props;

    return (
        <SiteLayout seo={seo}>
            <PageHero
                label="Odjeljenje"
                title={department.pageTitle ?? department.name}
                intro={department.shortDescription}
                image={department.image ?? 'fasada'}
                crumbs={[
                    { label: 'Početna', href: '/' },
                    { label: 'Odjeljenja', href: '/#odjeljenja' },
                    { label: department.name },
                ]}
            >
                <div className="mt-8 flex flex-wrap gap-3">
                    <a href={telHref(settings.phonePrimary)} className="rounded-[3px] bg-teal-600 px-6 py-3 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-teal-700">
                        Zakažite pregled
                    </a>
                    <Link href="/kontakt" className="rounded-[3px] border border-ink/20 px-6 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700">
                        Kontaktirajte nas
                    </Link>
                    <Link href={priceListHref(department.slug)} className="rounded-[3px] border border-ink/20 px-6 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700">
                        Cjenovnik
                    </Link>
                </div>
            </PageHero>

            <div className="mx-auto max-w-[1360px] px-4 py-14 sm:px-6 lg:px-10">
                <div className="grid gap-14 lg:grid-cols-[2fr_1fr]">
                    <div>
                        <section aria-labelledby="o-odjeljenju">
                            <h2 id="o-odjeljenju" className="font-display text-2xl font-bold text-ink">O odjeljenju</h2>
                            {(department.description ?? '').split('\n\n').map((paragraph, i) => (
                                <p key={i} className="mt-4 max-w-3xl leading-relaxed text-ink-soft">{paragraph}</p>
                            ))}
                        </section>

                        {department.equipment.length > 0 && (
                            <section aria-labelledby="oprema" className="mt-12">
                                <h2 id="oprema" className="font-display text-2xl font-bold text-ink">Oprema</h2>
                                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {department.equipment.map((item) => (
                                        <li key={item} className="flex items-start gap-3 border-l-2 border-teal-500 bg-mineral px-4 py-3 text-[0.93rem] leading-snug text-ink">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {department.consultants && department.consultants.roster.length > 0 && (
                            <section aria-labelledby="specijalisti" className="mt-12">
                                <h2 id="specijalisti" className="font-display text-2xl font-bold text-ink">Specijalisti</h2>
                                <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft">
                                    Konsultativne preglede obavljaju specijalisti iz navedenih oblasti. Termini se objavljuju prema rasporedu dolazaka, a zakazivanje je obavezno preko recepcije.
                                </p>
                                <ol className="mt-6 border-t border-ink/12">
                                    {department.consultants.roster.map((consultant, i) => (
                                        <li
                                            key={`${consultant.name}-${consultant.title}`}
                                            className="grid grid-cols-[auto_1fr] items-baseline gap-x-5 border-b border-ink/12 py-4"
                                        >
                                            <span className="meta-label tabular-nums text-teal-600">{String(i + 1).padStart(2, '0')}</span>
                                            <div>
                                                <span className="font-display text-[1.08rem] font-semibold text-ink">{consultant.name}</span>
                                                <span className="mt-0.5 block text-[0.9rem] text-ink-soft">{consultant.title}</span>
                                                {consultant.focus && (
                                                    <span className="mt-1 inline-block text-[0.78rem] font-medium uppercase tracking-[0.08em] text-teal-700">
                                                        {consultant.focus}
                                                    </span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        )}

                        {department.upcomingVisits?.length > 0 && (
                            <section aria-labelledby="naredni-termini" className="mt-12">
                                <h2 id="naredni-termini" className="font-display text-2xl font-bold text-ink">Naredni termini</h2>
                                <p className="mt-3 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft">
                                    Aktuelni dolasci specijalista. Termin potvrdite pozivom recepcije.
                                </p>
                                <ol className="mt-6 border-t border-ink/12">
                                    {department.upcomingVisits.map((visit) => (
                                        <li
                                            key={`${visit.doctorName}-${visit.date}`}
                                            className="grid grid-cols-[72px_1fr] items-center gap-x-5 border-b border-ink/12 py-4 sm:grid-cols-[88px_1fr_auto]"
                                        >
                                            <time dateTime={visit.date} className="border-r border-ink/12 pr-5 text-center">
                                                <span className="block font-display text-3xl font-bold leading-none tabular-nums text-ink">{visit.day}</span>
                                                <span className="meta-label mt-1 block text-teal-600">{visit.month}</span>
                                            </time>
                                            <div>
                                                {visit.href ? (
                                                    <Link href={visit.href} className="font-display text-[1.05rem] font-semibold text-ink transition-colors hover:text-teal-800">
                                                        {visit.doctorName}
                                                    </Link>
                                                ) : (
                                                    <span className="font-display text-[1.05rem] font-semibold text-ink">{visit.doctorName}</span>
                                                )}
                                                <span className="mt-0.5 block text-[0.88rem] text-ink-soft">{visit.specialty}</span>
                                                {visit.startTime && visit.endTime && (
                                                    <span className="mt-0.5 block text-[0.88rem] tabular-nums text-ink-soft">{visit.startTime} – {visit.endTime}</span>
                                                )}
                                                {visit.note && <span className="mt-0.5 block text-[0.85rem] text-crimson/90">{visit.note}</span>}
                                            </div>
                                            {visit.href ? (
                                                <Link href={visit.href} className="col-span-2 mt-2 text-[0.9rem] font-semibold text-teal-700 hover:text-teal-900 sm:col-span-1 sm:mt-0">
                                                    Detalji dolaska →
                                                </Link>
                                            ) : (
                                                <a href={telHref(settings.phonePrimary)} className="col-span-2 mt-2 text-[0.9rem] font-semibold text-teal-700 hover:text-teal-900 sm:col-span-1 sm:mt-0">
                                                    Zakažite termin →
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        )}

                        {department.services.length > 0 && (
                            <section aria-labelledby="usluge-odjeljenja" className="mt-12">
                                <h2 id="usluge-odjeljenja" className="font-display text-2xl font-bold text-ink">Usluge odjeljenja</h2>
                                <ul className="mt-5 border-t border-ink/12">
                                    {department.services.map((service, i) => (
                                        <li key={service.slug}>
                                            <Link href={`/usluge/${service.slug}`} className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 border-b border-ink/12 py-4 transition-colors hover:bg-teal-50/60">
                                                <span className="meta-label tabular-nums text-teal-600">{String(i + 1).padStart(2, '0')}</span>
                                                <span>
                                                    <span className="font-display text-[1.08rem] font-semibold text-ink group-hover:text-teal-800">{service.name}</span>
                                                    {service.summary && <span className="mt-0.5 block text-[0.88rem] text-ink-soft">{service.summary}</span>}
                                                </span>
                                                <span aria-hidden="true" className="self-center text-teal-600 transition-transform group-hover:translate-x-1">
                                                    <svg viewBox="0 0 24 12" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 6h22M17 1l5 5-5 5" /></svg>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {department.preparation && (
                            <PreparationGuide
                                data={department.preparation}
                                heading="Priprema za MR, CT i RTG preglede"
                            />
                        )}

                        {department.indications.length > 0 && (
                            <section aria-labelledby="kada" className="mt-12">
                                <h2 id="kada" className="font-display text-2xl font-bold text-ink">Kada se obratiti ovom odjeljenju?</h2>
                                <ul className="mt-5 space-y-3">
                                    {department.indications.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
                                            <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 bg-teal-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {department.faq.length > 0 && (
                            <section aria-labelledby="faq" className="mt-12">
                                <h2 id="faq" className="mb-5 font-display text-2xl font-bold text-ink">Česta pitanja</h2>
                                <FaqAccordion items={department.faq} />
                            </section>
                        )}

                    </div>

                    <aside className="space-y-8 lg:pt-2">
                        <div className="border border-ink/12 bg-mineral p-6">
                            <h2 className="text-[0.95rem] font-semibold text-ink">Zakazivanje</h2>
                            <a
                                href={telHref(settings.phonePrimary)}
                                className="mt-4 flex items-center gap-3 font-display text-2xl font-bold tabular-nums text-ink transition-colors hover:text-teal-700"
                            >
                                <PhoneIcon className="size-5 shrink-0 text-teal-600" />
                                {settings.phonePrimary}
                            </a>
                            <a
                                href={telHref(settings.phoneSecondary)}
                                className="mt-2 flex items-center gap-3 font-display text-2xl font-bold tabular-nums text-ink transition-colors hover:text-teal-700"
                            >
                                <PhoneIcon className="size-5 shrink-0 text-teal-600" />
                                {settings.phoneSecondary}
                            </a>
                            <div className="mt-4 border-t border-ink/10 pt-4 text-[0.9rem] text-ink-soft">
                                <p>{settings.hoursWeekdays}</p>
                                <p>{settings.hoursSaturday}</p>
                            </div>
                        </div>

                        <Link
                            href={priceListHref(department.slug)}
                            className="flex items-center justify-between rounded-[3px] bg-teal-600 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-teal-700"
                        >
                            Cjenovnik
                            <svg aria-hidden="true" viewBox="0 0 24 12" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <path d="M0 6h22M17 1l5 5-5 5" />
                            </svg>
                        </Link>

                        {department.consultants && department.consultants.fields.length > 0 ? (
                            <div className="border border-ink/12 p-6">
                                <h2 className="meta-label text-ink-faint">Oblasti pregleda</h2>
                                <ul className="mt-4 space-y-2">
                                    {department.consultants.fields.map((field) => (
                                        <li key={field} className="text-[0.92rem] leading-snug text-ink">
                                            {field}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : department.doctors.length > 0 ? (
                            <div className="border border-ink/12 p-6">
                                <h2 className="meta-label text-ink-faint">Doktori odjeljenja</h2>
                                <ul className="mt-4 space-y-3">
                                    {department.doctors.map((doctor) => (
                                        <li key={doctor.slug}>
                                            <Link href={`/doktori/${doctor.slug}`} className="group block">
                                                <span className="font-display font-semibold text-ink group-hover:text-teal-800">{doctor.name}</span>
                                                <span className="block text-[0.85rem] text-ink-soft">{doctor.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </aside>
                </div>

                <section aria-labelledby="druga-odjeljenja" className="mt-20 border-t border-ink/12 pt-10">
                    <h2 id="druga-odjeljenja" className="font-display text-2xl font-bold text-ink">Pogledajte i druga odjeljenja</h2>
                    <div className="mt-6 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-3">
                        {otherDepartments.map((other) => (
                            <Link key={other.slug} href={`/odjeljenja/${other.slug}`} className="group bg-paper transition-colors hover:bg-teal-50/60">
                                {other.image && (
                                    <ClinicImage crop={other.image} decorative className="aspect-[16/10] w-full object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
                                )}
                                <span className="block px-6 py-6">
                                    <span className="font-display text-lg font-semibold text-ink group-hover:text-teal-800">{other.name}</span>
                                    <span className="mt-1.5 block text-[0.88rem] leading-relaxed text-ink-soft">{other.shortDescription}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </SiteLayout>
    );
}
