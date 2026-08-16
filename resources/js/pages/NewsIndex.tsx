import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import SiteLayout from '@/layout/SiteLayout';
import PageHero from '@/components/PageHero';
import ClinicImage from '@/components/ClinicImage';
import type { SeoData, SharedProps, SpecialistVisitItem } from '@/types';
import { telHref } from '@/types';

interface Article {
    title: string;
    slug: string;
    excerpt: string | null;
    image: string | null;
    category: { name: string; slug: string } | null;
    department: { name: string; slug: string } | null;
    publishedAt: string | null;
}

interface NewsIndexProps {
    articles: { data: Article[]; links: { url: string | null; label: string; active: boolean }[] };
    categories: { name: string; slug: string }[];
    specialistVisits: SpecialistVisitItem[];
    seo: SeoData;
}

export default function NewsIndex({ articles, categories, specialistVisits, seo }: NewsIndexProps) {
    const { settings } = usePage<SharedProps>().props;
    const [filter, setFilter] = useState<string | null>(null);

    const filtered = filter
        ? articles.data.filter((a) => a.category?.slug === filter || a.department?.slug === filter)
        : articles.data;

    return (
        <SiteLayout seo={seo}>
            <PageHero
                label="Aktuelno"
                title="Novosti i obavještenja"
                intro="Pratite najnovije informacije iz ZU SC Dr Brkić — nove usluge, dolaske specijalista, akcije i obavještenja."
                image="fasada"
                crumbs={[{ label: 'Početna', href: '/' }, { label: 'Novosti' }]}
            >
                <div className="mt-7 flex flex-wrap gap-x-8 gap-y-2 border-l-2 border-teal-500 pl-5">
                    <p className="text-[0.92rem] text-ink-soft">
                        <span className="meta-label block text-ink-faint">Radno vrijeme</span>
                        <span className="font-medium text-ink">{settings.hoursWeekdays}</span>
                    </p>
                    <p className="text-[0.92rem] text-ink-soft">
                        <span className="meta-label block text-ink-faint">Kontakt</span>
                        <a href={telHref(settings.phonePrimary)} className="font-medium tabular-nums text-ink hover:text-teal-700">{settings.phonePrimary}</a>
                        {' · '}
                        <a href={telHref(settings.phoneSecondary)} className="font-medium tabular-nums text-ink hover:text-teal-700">{settings.phoneSecondary}</a>
                    </p>
                </div>
            </PageHero>

            {specialistVisits.length > 0 && (
                <section aria-labelledby="dolasci" className="border-b border-ink/10 bg-mineral py-10">
                    <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                        <h2 id="dolasci" className="meta-label text-teal-700">Dolasci specijalista</h2>
                        <ol className="mt-5 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2 xl:grid-cols-3">
                            {specialistVisits.map((visit) => {
                                const inner = (
                                    <>
                                        <span className="border-r border-ink/12 pr-5 text-center">
                                            <span className="block font-display text-3xl font-bold tabular-nums text-ink">{visit.day}</span>
                                            <span className="meta-label text-teal-600">{visit.month}</span>
                                        </span>
                                        <span>
                                            <span className="block font-display font-semibold text-ink">{visit.doctorName}</span>
                                            <span className="block text-[0.85rem] text-ink-soft">
                                                {visit.specialty}
                                                {visit.startTime && visit.endTime ? ` · ${visit.startTime}–${visit.endTime}` : ''}
                                            </span>
                                            {visit.note && <span className="block text-[0.82rem] text-crimson/90">{visit.note}</span>}
                                        </span>
                                    </>
                                );

                                return (
                                    <li key={`${visit.doctorName}-${visit.day}`}>
                                        {visit.href ? (
                                            <Link href={visit.href} className="flex items-center gap-5 bg-paper px-5 py-4 transition-colors hover:bg-teal-50/70">
                                                {inner}
                                            </Link>
                                        ) : (
                                            <div className="flex items-center gap-5 bg-paper px-5 py-4">{inner}</div>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </section>
            )}

            <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-10">
                <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter po kategoriji">
                    <button
                        type="button"
                        onClick={() => setFilter(null)}
                        aria-pressed={filter === null}
                        className={`rounded-[3px] border px-4 py-2 text-[0.9rem] font-medium transition-colors ${filter === null ? 'border-teal-600 bg-teal-600 text-white' : 'border-ink/20 text-ink hover:border-teal-600 hover:text-teal-700'}`}
                    >
                        Sve
                    </button>
                    {categories.map((c) => (
                        <button
                            key={c.slug}
                            type="button"
                            onClick={() => setFilter(c.slug)}
                            aria-pressed={filter === c.slug}
                            className={`rounded-[3px] border px-4 py-2 text-[0.9rem] font-medium transition-colors ${filter === c.slug ? 'border-teal-600 bg-teal-600 text-white' : 'border-ink/20 text-ink hover:border-teal-600 hover:text-teal-700'}`}
                        >
                            {c.name}
                        </button>
                    ))}
                </div>

                {filtered.length > 0 ? (
                    <div className="mt-8 grid gap-px border border-ink/12 bg-ink/12 md:grid-cols-2 xl:grid-cols-3">
                        {filtered.map((article) => (
                            <article key={article.slug} className="group relative flex flex-col bg-paper transition-colors hover:bg-teal-50/50">
                                {article.image && (
                                    <ClinicImage crop={article.image} decorative className="aspect-[16/10] w-full object-cover" sizes="(min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw" />
                                )}
                                <div className="flex flex-1 flex-col px-7 py-8">
                                <p className="meta-label flex items-center gap-3 text-ink-faint">
                                    <span>{article.publishedAt}</span>
                                    {article.category && (
                                        <>
                                            <span aria-hidden="true" className="h-3 w-px bg-ink/15" />
                                            <span className="text-teal-700">{article.category.name}</span>
                                        </>
                                    )}
                                </p>
                                <h2 className="mt-4 font-display text-xl font-bold leading-snug text-ink group-hover:text-teal-800">
                                    <Link href={`/novosti/${article.slug}`} className="after:absolute after:inset-0">
                                        {article.title}
                                    </Link>
                                </h2>
                                {article.excerpt && <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">{article.excerpt}</p>}
                                <span className="meta-label mt-auto flex items-center gap-2 pt-6 text-teal-700">
                                    Pročitajte više
                                    <svg aria-hidden="true" viewBox="0 0 24 12" className="h-2.5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 6h22M17 1l5 5-5 5" /></svg>
                                </span>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="mt-8 border border-ink/12 bg-mineral px-8 py-14 text-center">
                        <p className="font-display text-xl font-semibold text-ink">Nema novosti u ovoj kategoriji.</p>
                    </div>
                )}

                {articles.links.length > 3 && (
                    <nav aria-label="Paginacija" className="mt-10 flex flex-wrap gap-2">
                        {articles.links.map((link, i) =>
                            link.url ? (
                                <Link
                                    key={i}
                                    href={link.url}
                                    className={`rounded-[3px] border px-4 py-2 text-[0.9rem] font-medium ${link.active ? 'border-teal-600 bg-teal-600 text-white' : 'border-ink/20 text-ink hover:border-teal-600'}`}
                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                />
                            ) : (
                                <span key={i} className="px-3 py-2 text-[0.9rem] text-ink-faint" dangerouslySetInnerHTML={{ __html: link.label }} />
                            ),
                        )}
                    </nav>
                )}
            </div>
        </SiteLayout>
    );
}
