import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';
import ClinicImage from '@/components/ClinicImage';

interface Crumb {
    label: string;
    href?: string;
}

interface PageHeroProps {
    label: string;
    title: string;
    intro?: string | null;
    kicker?: string;
    crumbs?: Crumb[];
    children?: ReactNode;
    image?: string | null;
    photo?: {
        src: string;
        webp?: string | null;
        srcSet?: string | null;
        webpSrcSet?: string | null;
        position?: string;
    } | null;
}

export default function PageHero({ label, title, intro, kicker, crumbs, children, image, photo }: PageHeroProps) {
    if (photo?.src || image) {
        const position = photo?.position ?? 'object-center';

        return (
            <section aria-label={label} className="relative isolate overflow-hidden bg-teal-950">
                {photo?.src ? (
                    <picture>
                        {photo.webp && (
                            <source type="image/webp" srcSet={photo.webpSrcSet ?? photo.webp} sizes="100vw" />
                        )}
                        <img
                            src={photo.src}
                            srcSet={photo.srcSet ?? undefined}
                            sizes="100vw"
                            alt=""
                            width={1600}
                            height={685}
                            loading="eager"
                            fetchPriority="high"
                            decoding="sync"
                            className={`absolute inset-0 -z-10 size-full object-cover ${position}`}
                        />
                    </picture>
                ) : (
                    <ClinicImage
                        crop={image}
                        priority
                        className="absolute inset-0 -z-10 size-full object-cover object-center"
                        sizes="100vw"
                    />
                )}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-950/88 via-teal-950/62 to-teal-950/28"
                />
                <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-teal-950/70 to-transparent" />

                <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
                    {crumbs && crumbs.length > 0 && (
                        <nav aria-label="Navigacioni put" className="meta-label mb-6 flex flex-wrap items-center gap-2 text-white/55">
                            {crumbs.map((crumb, i) => (
                                <span key={i} className="flex items-center gap-2">
                                    {i > 0 && <span aria-hidden="true">/</span>}
                                    {crumb.href ? (
                                        <Link href={crumb.href} className="transition-colors hover:text-teal-200">
                                            {crumb.label}
                                        </Link>
                                    ) : (
                                        <span aria-current="page" className="text-white/80">{crumb.label}</span>
                                    )}
                                </span>
                            ))}
                        </nav>
                    )}
                    {kicker && (
                        <p className="mb-3 text-[0.78rem] font-medium tracking-[0.04em] text-teal-200 [text-shadow:0_1px_12px_rgb(0_0_0/0.35)] sm:text-[0.85rem]">
                            {kicker}
                        </p>
                    )}
                    <h1 className="max-w-4xl font-display text-3xl font-bold leading-[1.08] tracking-[-0.018em] text-white [text-shadow:0_1px_18px_rgb(0_0_0/0.35)] sm:text-4xl lg:text-[3rem]">
                        {title}
                    </h1>
                    {intro && (
                        <p className="mt-5 max-w-3xl text-[1.02rem] leading-relaxed text-white/85 [text-shadow:0_1px_12px_rgb(0_0_0/0.3)]">
                            {intro}
                        </p>
                    )}
                    {children && <div className="page-hero-photo-actions mt-8">{children}</div>}
                </div>
            </section>
        );
    }

    return (
        <section className="plan-grid border-b border-ink/10 bg-paper">
            <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 lg:px-10 lg:py-16">
                {crumbs && crumbs.length > 0 && (
                    <nav aria-label="Navigacioni put" className="meta-label mb-6 flex flex-wrap items-center gap-2 text-ink-faint">
                        {crumbs.map((crumb, i) => (
                            <span key={i} className="flex items-center gap-2">
                                {i > 0 && <span aria-hidden="true">/</span>}
                                {crumb.href ? (
                                    <Link href={crumb.href} className="transition-colors hover:text-teal-700">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span aria-current="page" className="text-ink-soft">{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}
                {kicker && (
                    <p className="mb-3 text-[0.78rem] font-medium tracking-[0.04em] text-teal-700 sm:text-[0.85rem]">
                        {kicker}
                    </p>
                )}
                <h1 className="max-w-4xl font-display text-3xl font-bold leading-[1.08] tracking-[-0.018em] text-ink sm:text-4xl lg:text-[3rem]">
                    {title}
                </h1>
                {intro && <p className="mt-5 max-w-3xl text-[1.02rem] leading-relaxed text-ink-soft">{intro}</p>}
                {children}
            </div>
        </section>
    );
}
