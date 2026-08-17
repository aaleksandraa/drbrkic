import { Link } from '@inertiajs/react';
import ClinicImage from '@/components/ClinicImage';
import { ArrowRightIcon, CalendarIcon } from '@/components/home-v2/icons';

const HERO_SERVICES = [
    'Radiologija i ultrazvuk',
    'Laboratorija',
    'Porodična medicina',
    'Medicina rada',
    'Fizijatrija',
];

export default function HeroV2() {
    return (
        <section aria-label="Uvod" className="relative isolate overflow-hidden bg-[#1a2224]">
            <div className="absolute inset-y-0 right-0 -z-10 w-full lg:w-[56%]">
                <ClinicImage
                    crop="fasada"
                    priority
                    className="size-full object-cover object-[62%_center] lg:object-[center_center]"
                    sizes="(min-width: 1024px) 56vw, 100vw"
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-0 lg:hidden"
                    style={{
                        background:
                            'linear-gradient(to bottom, rgb(26 34 36 / 0.62) 0%, rgb(26 34 36 / 0.78) 55%, rgb(26 34 36 / 0.94) 100%)',
                    }}
                />
                <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-[#1a2224] to-transparent lg:block"
                />
            </div>

            <div className="mx-auto flex min-h-[30rem] w-full max-w-[1360px] items-center px-4 py-16 sm:min-h-[34rem] sm:px-6 lg:min-h-[38rem] lg:px-10 lg:py-20 xl:min-h-[42rem]">
                <div className="max-w-xl lg:max-w-[36rem]">
                    <p
                        className="hero-rise text-[0.82rem] font-medium tracking-[0.03em] text-white/80 sm:text-[0.9rem]"
                        style={{ '--rise-delay': '0ms' } as React.CSSProperties}
                    >
                        20 godina zdravstvene zaštite u Doboju
                    </p>

                    <h1
                        className="hero-rise mt-4 font-display text-[1.9rem] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[2.75rem] lg:text-[3.25rem] lg:leading-[1.06]"
                        style={{ '--rise-delay': '60ms' } as React.CSSProperties}
                    >
                        Specijalistički pregledi i dijagnostika na jednom mjestu
                    </h1>

                    <p
                        className="hero-rise mt-5 text-[0.92rem] leading-relaxed text-white/75 sm:text-[1.02rem]"
                        style={{ '--rise-delay': '120ms' } as React.CSSProperties}
                    >
                        {HERO_SERVICES.join(' · ')}
                    </p>

                    <div
                        className="hero-rise mt-8 flex flex-wrap items-center gap-3"
                        style={{ '--rise-delay': '180ms' } as React.CSSProperties}
                    >
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-5 py-3 text-[0.92rem] font-semibold text-white transition-colors hover:bg-teal-700"
                        >
                            <CalendarIcon className="size-[1.15em] shrink-0" />
                            Zakažite pregled
                        </Link>
                        <a
                            href="#usluge"
                            className="inline-flex items-center gap-2 rounded-md border border-white/80 px-5 py-3 text-[0.92rem] font-semibold text-white transition-colors hover:bg-white/10"
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
