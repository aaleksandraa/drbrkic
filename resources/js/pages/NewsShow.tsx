import { Link, usePage } from '@inertiajs/react';
import SiteLayout from '@/layout/SiteLayout';
import PageHero from '@/components/PageHero';
import ClinicImage, { isCustomImagePath } from '@/components/ClinicImage';
import PhoneIcon from '@/components/PhoneIcon';
import type { SeoData, SharedProps } from '@/types';
import { telHref } from '@/types';

interface NewsShowProps {
    article: {
        title: string;
        slug: string;
        excerpt: string | null;
        body: string | null;
        category: { name: string; slug: string } | null;
        department: { name: string; slug: string } | null;
        publishedAt: string | null;
        publishedAtIso: string | null;
        readingMinutes: number;
        image: string | null;
    };
    relatedArticles: { title: string; slug: string; excerpt: string | null; category: string | null; publishedAt: string | null; image: string | null }[];
    visit?: {
        doctorName: string | null;
        specialty: string | null;
        dateLabel: string;
        dateIso: string;
        startTime: string | null;
        endTime: string | null;
        note: string | null;
        department: { name: string; slug: string } | null;
        services: { name: string; price: string; href?: string | null }[];
        priceListHref: string;
        priceListTitle: string | null;
    } | null;
    seo: SeoData;
}

function NewsBody({ body, title }: { body: string; title: string }) {
    return (
        <div className="mt-6 max-w-2xl space-y-4">
            {body.split('\n\n').map((block, i) => {
                const image = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
                if (image) {
                    return (
                        <img
                            key={i}
                            src={image[2]}
                            alt={image[1] || title}
                            width={670}
                            height={446}
                            loading="lazy"
                            className="w-full object-cover"
                        />
                    );
                }

                const lines = block.split('\n').filter(Boolean);
                if (lines.length > 0 && lines.every((line) => line.startsWith('- '))) {
                    return (
                        <ul key={i} className="space-y-3">
                            {lines.map((line, j) => (
                                <li key={j} className="flex gap-3">
                                    <span className="shrink-0 tabular-nums text-teal-600">{String(j + 1).padStart(2, '0')}</span>
                                    <p className="leading-relaxed text-ink-soft">{line.slice(2)}</p>
                                </li>
                            ))}
                        </ul>
                    );
                }

                return (
                    <p key={i} className="leading-relaxed text-ink-soft">
                        {block}
                    </p>
                );
            })}
        </div>
    );
}

export default function NewsShow({ article, relatedArticles, visit = null, seo }: NewsShowProps) {
    const { settings } = usePage<SharedProps>().props;
    const shareUrl = seo.canonical;
    const customPhoto = isCustomImagePath(article.image)
        ? { src: article.image as string, position: 'object-center' }
        : null;

    return (
        <SiteLayout seo={seo}>
            <PageHero
                label={article.category?.name ?? 'Novost'}
                title={article.title}
                image={customPhoto ? null : (article.image ?? 'fasada')}
                photo={customPhoto}
                crumbs={[
                    { label: 'Početna', href: '/' },
                    { label: 'Novosti', href: '/novosti' },
                    { label: article.title },
                ]}
            >
                <p className="meta-label mt-5 flex flex-wrap items-center gap-3 text-ink-faint">
                    {article.publishedAtIso && <time dateTime={article.publishedAtIso}>{article.publishedAt}</time>}
                    <span aria-hidden="true" className="h-3 w-px bg-ink/15" />
                    <span>{article.readingMinutes} min čitanja</span>
                    <span aria-hidden="true" className="h-3 w-px bg-ink/15" />
                    <span>ZU SC Dr Brkić</span>
                </p>
            </PageHero>

            <div className="mx-auto max-w-[1360px] px-4 py-14 sm:px-6 lg:px-10">
                <div className="grid gap-14 lg:grid-cols-[2fr_1fr]">
                    <article>
                        {article.image && (
                            <ClinicImage
                                crop={article.image}
                                alt={article.title}
                                className="mb-8 aspect-[16/9] w-full object-cover"
                                sizes="(min-width: 1024px) 60vw, 100vw"
                            />
                        )}
                        {article.excerpt && (
                            <p className="border-l-2 border-teal-500 pl-5 text-lg font-medium leading-relaxed text-ink">
                                {article.excerpt}
                            </p>
                        )}

                        {visit && (
                            <section aria-labelledby="termin-naslov" className="mt-8 border border-ink/12 bg-mineral p-6 sm:p-7">
                                <h2 id="termin-naslov" className="font-display text-xl font-bold text-ink">Termin dolaska</h2>
                                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <dt className="text-[0.75rem] text-ink-faint">Specijalista</dt>
                                        <dd className="mt-1 font-semibold text-ink">{visit.doctorName}</dd>
                                        {visit.specialty && <dd className="text-[0.9rem] text-ink-soft">{visit.specialty}</dd>}
                                    </div>
                                    <div>
                                        <dt className="text-[0.75rem] text-ink-faint">Datum i vrijeme</dt>
                                        <dd className="mt-1 font-semibold tabular-nums text-ink">
                                            <time dateTime={visit.dateIso}>{visit.dateLabel}</time>
                                        </dd>
                                        {visit.startTime && visit.endTime && (
                                            <dd className="text-[0.9rem] tabular-nums text-ink-soft">{visit.startTime} – {visit.endTime}</dd>
                                        )}
                                    </div>
                                    {visit.note && (
                                        <div className="sm:col-span-2">
                                            <dt className="text-[0.75rem] text-ink-faint">Napomena</dt>
                                            <dd className="mt-1 font-medium text-crimson">{visit.note}</dd>
                                        </div>
                                    )}
                                </dl>
                                {visit.department && (
                                    <p className="mt-5 text-[0.92rem] text-ink-soft">
                                        Odjeljenje:{' '}
                                        <Link href={`/odjeljenja/${visit.department.slug}`} className="font-semibold text-teal-700 hover:text-teal-900">
                                            {visit.department.name}
                                        </Link>
                                    </p>
                                )}
                            </section>
                        )}

                        <NewsBody body={article.body ?? ''} title={article.title} />

                        {visit && visit.services.length > 0 && (
                            <section aria-labelledby="pregledi-naslov" className="mt-10">
                                <div className="flex flex-wrap items-end justify-between gap-3">
                                    <h2 id="pregledi-naslov" className="font-display text-xl font-bold text-ink">
                                        {visit.priceListTitle ?? 'Pregledi'}
                                    </h2>
                                    <Link href={visit.priceListHref} className="text-[0.88rem] font-semibold text-teal-700 hover:text-teal-900">
                                        Cijeli cjenovnik →
                                    </Link>
                                </div>
                                <table className="mt-4 w-full text-[0.95rem]">
                                    <thead>
                                        <tr className="border-b border-ink/12 text-left text-ink-faint">
                                            <th className="py-2 pr-4 font-medium">Usluga</th>
                                            <th className="py-2 text-right font-medium">Cijena</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {visit.services.map((item) => (
                                            <tr key={item.name} className="border-b border-ink/8">
                                                <td className="py-2.5 pr-4 text-ink">
                                                    {item.href ? (
                                                        <Link href={item.href} className="font-medium text-teal-700 hover:text-teal-900">
                                                            {item.name}
                                                        </Link>
                                                    ) : (
                                                        item.name
                                                    )}
                                                </td>
                                                <td className="py-2.5 text-right tabular-nums text-ink">{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </section>
                        )}

                        {article.department && (
                            <p className="mt-8 text-[0.92rem] text-ink-soft">
                                Povezano odjeljenje:{' '}
                                <Link href={`/odjeljenja/${article.department.slug}`} className="font-semibold text-teal-700 hover:text-teal-900">
                                    {article.department.name}
                                </Link>
                            </p>
                        )}

                        <div className="mt-10 border-t border-ink/12 pt-6">
                            <p className="meta-label text-ink-faint">Podijelite članak:</p>
                            <div className="mt-3 flex gap-3">
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-[3px] border border-ink/20 px-4 py-2 text-[0.88rem] font-medium text-ink transition-colors hover:border-teal-600 hover:text-teal-700"
                                >
                                    Facebook
                                </a>
                                <a
                                    href={`viber://forward?text=${encodeURIComponent(`${article.title} ${shareUrl}`)}`}
                                    className="rounded-[3px] border border-ink/20 px-4 py-2 text-[0.88rem] font-medium text-ink transition-colors hover:border-teal-600 hover:text-teal-700"
                                >
                                    Viber
                                </a>
                            </div>
                        </div>
                    </article>

                    <aside className="space-y-8 lg:pt-2">
                        <div className="border border-ink/12 bg-teal-900 p-6 text-white">
                            <h2 className="meta-label text-teal-300">Zakažite pregled</h2>
                            <p className="mt-3 text-[0.92rem] leading-relaxed text-teal-100/80">
                                Pozovite nas za više informacija ili zakazivanje.
                            </p>
                            <a href={telHref(settings.phonePrimary)} className="mt-4 flex items-center gap-3 font-display text-2xl font-bold tabular-nums transition-colors hover:text-teal-300">
                                <PhoneIcon className="size-5 shrink-0 text-teal-300" />
                                {settings.phonePrimary}
                            </a>
                            <div className="mt-4 border-t border-white/15 pt-4 text-[0.88rem] text-teal-100/70">
                                <p>{settings.hoursWeekdays}</p>
                                <p>{settings.hoursSaturday}</p>
                            </div>
                        </div>
                    </aside>
                </div>

                {relatedArticles.length > 0 && (
                    <section aria-labelledby="ostale" className="mt-20 border-t border-ink/12 pt-10">
                        <div className="flex items-end justify-between gap-4">
                            <h2 id="ostale" className="font-display text-2xl font-bold text-ink">Ostale novosti</h2>
                            <Link href="/novosti" className="meta-label text-teal-700 hover:text-teal-900">Pročitajte još →</Link>
                        </div>
                        <div className="mt-6 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-3">
                            {relatedArticles.map((related) => (
                                <Link key={related.slug} href={`/novosti/${related.slug}`} className="group bg-paper transition-colors hover:bg-teal-50/60">
                                    {related.image && (
                                        <ClinicImage crop={related.image} decorative className="aspect-[16/10] w-full object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
                                    )}
                                    <span className="block px-6 py-6">
                                        <span className="meta-label text-ink-faint">{related.publishedAt}{related.category ? ` · ${related.category}` : ''}</span>
                                        <span className="mt-2 block font-display text-lg font-semibold leading-snug text-ink group-hover:text-teal-800">
                                            {related.title}
                                        </span>
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
