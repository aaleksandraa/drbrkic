import { Link } from '@inertiajs/react';
import ClinicImage from '@/components/ClinicImage';
import type { HomeDepartment } from '@/types';
import { ArrowRightIcon, CalendarIcon } from '@/components/home-v2/icons';

const HERO_LABEL: Record<string, string> = {
    radiologija: 'Radiologija i ultrazvuk',
};

export default function HeroV2({ departments }: { departments: HomeDepartment[] }) {
    const labels = departments
        .filter((d) => d.slug !== 'specijalisticki-pregledi')
        .map((d) => HERO_LABEL[d.slug] ?? d.name);

    return (
        <section aria-label="Uvod" className="relative isolate overflow-hidden bg-teal-950">
            <ClinicImage
                crop="fasada"
                priority
                className="absolute inset-0 -z-10 size-full object-cover object-[72%_center]"
                sizes="100vw"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 lg:hidden"
                style={{
                    background:
                        'linear-gradient(to bottom, rgb(8 33 30 / 0.55) 0%, rgb(8 33 30 / 0.72) 40%, rgb(8 33 30 / 0.92) 100%)',
                }}
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 hidden lg:block"
                style={{
                    background:
                        'linear-gradient(90deg, rgb(8 33 30 / 0.92) 0%, rgb(8 33 30 / 0.78) 38%, rgb(8 33 30 / 0.28) 68%, rgb(8 33 30 / 0.08) 100%)',
                }}
            />

            <div className="mx-auto flex min-h-[28rem] w-full max-w-[1360px] flex-col justify-center px-4 py-16 sm:min-h-[32rem] sm:px-6 lg:min-h-[36rem] lg:px-10 lg:py-24">
                <div className="max-w-2xl">
                    <p
                        className="hero-rise text-[0.8rem] font-medium tracking-[0.04em] text-teal-200 [text-shadow:0_1px_12px_rgb(0_0_0/0.35)] sm:text-[0.88rem]"
                        style={{ '--rise-delay': '0ms' } as React.CSSProperties}
                    >
                        20 godina zdravstvene zaštite u Doboju
                    </p>

                    <h1
                        className="hero-rise mt-3 font-display text-[1.85rem] font-bold leading-[1.12] tracking-[-0.025em] text-white [text-shadow:0_1px_18px_rgb(0_0_0/0.4)] sm:text-[2.6rem] lg:text-[3.15rem] lg:leading-[1.08]"
                        style={{ '--rise-delay': '60ms' } as React.CSSProperties}
                    >
                        Specijalistički pregledi i dijagnostika na jednom mjestu
                    </h1>

                    {labels.length > 0 && (
                        <p
                            className="hero-rise mt-5 text-[0.92rem] leading-relaxed text-white/80 [text-shadow:0_1px_12px_rgb(0_0_0/0.35)] sm:text-[1rem]"
                            style={{ '--rise-delay': '120ms' } as React.CSSProperties}
                        >
                            {labels.join(' · ')}
                        </p>
                    )}

                    <div
                        className="hero-rise mt-8 flex flex-wrap items-center gap-3"
                        style={{ '--rise-delay': '180ms' } as React.CSSProperties}
                    >
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-5 py-3 text-[0.92rem] font-semibold text-white shadow-lg shadow-teal-950/30 transition-colors hover:bg-teal-700"
                        >
                            <CalendarIcon className="size-[1.1em] shrink-0" />
                            Zakažite pregled
                        </Link>
                        <a
                            href="#usluge"
                            className="inline-flex items-center gap-2 rounded-md border border-white/70 px-5 py-3 text-[0.92rem] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                        >
                            Pogledajte usluge
                            <ArrowRightIcon className="h-2.5 w-5 shrink-0" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
