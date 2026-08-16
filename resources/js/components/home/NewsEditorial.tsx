import { Link } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import { SectionMeta } from '@/components/Motif';
import ClinicImage from '@/components/ClinicImage';
import type { HomeNewsArticle } from '@/types';

export default function NewsEditorial({ news }: { news: HomeNewsArticle[] }) {
    if (news.length === 0) return null;

    const [lead, ...rest] = news;

    return (
        <section aria-labelledby="novosti-naslov" className="bg-paper py-16 lg:py-24">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal>
                    <SectionMeta index="08" label="Aktuelno" />
                    <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                        <h2 id="novosti-naslov" className="font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]">
                            Novosti i obavještenja
                        </h2>
                        <Link href="/novosti" className="meta-label flex items-center gap-2 text-teal-700 transition-colors hover:text-teal-900">
                            Sve novosti
                            <svg aria-hidden="true" viewBox="0 0 24 12" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M0 6h22M17 1l5 5-5 5" />
                            </svg>
                        </Link>
                    </div>
                </Reveal>

                <Reveal className="mt-10 grid gap-10 border-t border-ink/12 pt-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
                    {/* Dominant article */}
                    <article className="group relative">
                        {lead.image && (
                            <ClinicImage
                                crop={lead.image}
                                decorative
                                className="mb-6 aspect-[16/9] w-full object-cover"
                                sizes="(min-width: 1024px) 55vw, 100vw"
                            />
                        )}
                        <p className="meta-label flex items-center gap-3 text-ink-faint">
                            {lead.publishedAtIso && <time dateTime={lead.publishedAtIso}>{lead.publishedAt}</time>}
                            {lead.category && (
                                <>
                                    <span aria-hidden="true" className="h-3 w-px bg-ink/15" />
                                    <span className="text-teal-700">{lead.category}</span>
                                </>
                            )}
                        </p>
                        <h3 className="mt-4 max-w-xl font-display text-2xl font-bold leading-tight text-ink transition-colors group-hover:text-teal-800 sm:text-3xl lg:text-[2.35rem]">
                            <Link href={`/novosti/${lead.slug}`} className="after:absolute after:inset-0">
                                {lead.title}
                            </Link>
                        </h3>
                        {lead.excerpt && (
                            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ink-soft">{lead.excerpt}</p>
                        )}
                        <span className="meta-label mt-6 flex items-center gap-2 text-teal-700">
                            Pročitajte više
                            <svg aria-hidden="true" viewBox="0 0 24 12" className="h-2.5 w-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M0 6h22M17 1l5 5-5 5" />
                            </svg>
                        </span>
                    </article>

                    {/* Secondary articles */}
                    <div className="flex flex-col justify-between gap-8 lg:border-l lg:border-ink/12 lg:pl-16">
                        {rest.map((article) => (
                            <article key={article.slug} className="group relative border-t border-ink/12 pt-6 first:border-t-0 first:pt-0 lg:first:border-t-0">
                                <p className="meta-label flex items-center gap-3 text-ink-faint">
                                    {article.publishedAtIso && <time dateTime={article.publishedAtIso}>{article.publishedAt}</time>}
                                    {article.category && (
                                        <>
                                            <span aria-hidden="true" className="h-3 w-px bg-ink/15" />
                                            <span className="text-teal-700">{article.category}</span>
                                        </>
                                    )}
                                </p>
                                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-teal-800 sm:text-xl">
                                    <Link href={`/novosti/${article.slug}`} className="after:absolute after:inset-0">
                                        {article.title}
                                    </Link>
                                </h3>
                                {article.excerpt && (
                                    <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{article.excerpt}</p>
                                )}
                            </article>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
