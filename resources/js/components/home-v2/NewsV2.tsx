import { Link } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import ClinicImage from '@/components/ClinicImage';
import type { HomeNewsArticle } from '@/types';
import { ArrowRightIcon } from '@/components/home-v2/icons';

export default function NewsV2({ news }: { news: HomeNewsArticle[] }) {
    if (news.length === 0) return null;

    return (
        <section aria-labelledby="novosti-naslov" className="bg-mineral py-14 lg:py-20">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal className="flex flex-wrap items-end justify-between gap-4">
                    <h2
                        id="novosti-naslov"
                        className="font-display text-2xl font-bold tracking-[-0.02em] text-ink sm:text-3xl"
                    >
                        Savjeti i novosti
                    </h2>
                    <Link
                        href="/novosti"
                        className="inline-flex items-center gap-2 text-[0.9rem] font-semibold text-teal-700 transition-colors hover:text-teal-900"
                    >
                        Sve novosti
                        <ArrowRightIcon className="h-2.5 w-5 shrink-0" />
                    </Link>
                </Reveal>

                <Reveal className="mt-8 grid gap-4 lg:grid-cols-3">
                    {news.map((article) => (
                        <article
                            key={article.slug}
                            className="group relative flex gap-4 overflow-hidden rounded-lg border border-ink/10 bg-paper p-3 transition-all duration-300 hover:border-teal-500/35 hover:shadow-[0_16px_36px_-24px_rgba(13,61,54,0.4)] sm:p-4"
                        >
                            <ClinicImage
                                crop={article.image ?? 'fasada'}
                                decorative
                                className="size-[5.5rem] shrink-0 rounded-md object-cover sm:size-[6.5rem]"
                                sizes="104px"
                            />
                            <div className="min-w-0 flex-1 py-0.5">
                                <p className="flex flex-wrap items-center gap-x-2 text-[0.75rem] text-ink-faint">
                                    <span className="font-medium text-teal-700">{article.category ?? 'Novosti'}</span>
                                    {article.publishedAtIso && (
                                        <time dateTime={article.publishedAtIso}>{article.publishedAt}</time>
                                    )}
                                </p>
                                <h3 className="mt-1.5 font-display text-[1.02rem] font-semibold leading-snug text-ink transition-colors group-hover:text-teal-800">
                                    <Link href={`/novosti/${article.slug}`} className="after:absolute after:inset-0">
                                        {article.title}
                                    </Link>
                                </h3>
                                <span className="mt-2 inline-flex items-center gap-2 text-[0.82rem] font-semibold text-teal-700">
                                    Pročitajte više
                                    <ArrowRightIcon className="h-2 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
                                </span>
                            </div>
                        </article>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
