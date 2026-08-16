import { Link } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import { SectionMeta } from '@/components/Motif';
import type { HomeService } from '@/types';

export default function ServiceIndex({ services }: { services: HomeService[] }) {
    return (
        <section id="usluge" aria-labelledby="usluge-naslov" className="mesh-light border-y border-ink/10 bg-mineral py-16 lg:py-24">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal>
                    <SectionMeta index="04" label="Medicinski indeks" />
                    <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                        <h2 id="usluge-naslov" className="font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]">
                            Najtraženije usluge
                        </h2>
                        <p className="max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
                            Pronađite uslugu koja vam je potrebna — brzo, pouzdano i na jednom mjestu.
                        </p>
                    </div>
                </Reveal>

                <Reveal className="mt-10 border-t border-ink/12">
                    <ol>
                        {services.map((service, i) => (
                            <li key={service.slug}>
                                <Link
                                    href={`/usluge/${service.slug}`}
                                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 border-b border-ink/12 bg-transparent py-4 transition-colors hover:bg-paper sm:gap-x-8 sm:py-5 lg:grid-cols-[64px_1fr_minmax(0,1.1fr)_150px_auto] lg:px-2"
                                >
                                    <span className="meta-label tabular-nums text-ink-faint transition-colors group-hover:text-teal-600">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="font-display text-[1.15rem] font-semibold leading-snug text-ink transition-colors group-hover:text-teal-800 sm:text-[1.35rem]">
                                        {service.name}
                                    </h3>
                                    <p className="col-start-2 mt-1 hidden text-[0.88rem] leading-relaxed text-ink-soft md:block lg:col-start-3 lg:mt-0">
                                        {service.summary}
                                    </p>
                                    <span className="meta-label col-start-2 mt-1 text-ink-faint lg:col-start-4 lg:mt-0">
                                        {service.department?.name}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="col-start-3 row-start-1 self-center justify-self-end text-teal-600 transition-transform group-hover:translate-x-1.5 lg:col-start-5"
                                    >
                                        <svg viewBox="0 0 24 12" className="h-3 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M0 6h22M17 1l5 5-5 5" />
                                        </svg>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ol>
                </Reveal>

                <Reveal className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link
                        href="/cjenovnik"
                        className="rounded-[3px] border border-ink/20 px-6 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700"
                    >
                        Pogledajte kompletan cjenovnik
                    </Link>
                    <p className="text-[0.9rem] text-ink-soft">
                        Kompletna ponuda dostupna je i kroz meni <span className="font-medium text-ink">Usluge</span>.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
