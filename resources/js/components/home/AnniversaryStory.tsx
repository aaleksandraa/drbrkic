import { Link } from '@inertiajs/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from '@/components/Reveal';
import { SectionMeta } from '@/components/Motif';
import ClinicImage from '@/components/ClinicImage';

const milestones = [
    { year: '2006', text: 'Osnivanje Specijalističke ambulante za kompjuterizovanu tomografiju „Dr. Brkić“ u Doboju' },
    { year: '2010', text: 'Uvođenje ultrazvučne dijagnostike i laboratorijskih analiza' },
    { year: '2014', text: 'Osnivanje Specijalističkog centra „Dr. Brkić“ — oporavak i rast nakon velikih poplava' },
    { year: '2018', text: 'Uvođenje magnetne rezonance i proširenje kapaciteta ustanove' },
    { year: '2022', text: 'Modernizacija laboratorije i uvođenje novih specijalističkih pregleda' },
    { year: '2024', text: 'Nastavak ulaganja u najsavremeniju medicinsku opremu i stručni kadar' },
];

/** Counts 0 → 20 when the anniversary block enters the viewport. SSR always prints 20. */
function AnniversaryCount({ onArm }: { onArm: () => void }) {
    const [value, setValue] = useState(20);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let frame = 0;
        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries[0]?.isIntersecting) return;
                observer.disconnect();
                onArm();
                const start = performance.now();
                const duration = 1600;
                const tick = (now: number) => {
                    const t = Math.min(1, (now - start) / duration);
                    const eased = 1 - (1 - t) ** 3;
                    setValue(Math.round(eased * 20));
                    if (t < 1) frame = requestAnimationFrame(tick);
                };
                setValue(0);
                frame = requestAnimationFrame(tick);
            },
            { threshold: 0.35 },
        );

        observer.observe(el);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [onArm]);

    return (
        <span
            ref={ref}
            className="anniversary-num block select-none font-display text-[11rem] font-bold leading-[0.78] tracking-[-0.04em] text-transparent sm:text-[15.5rem] lg:text-[19rem]"
            style={{ WebkitTextStroke: '2px rgba(35,188,166,0.82)' }}
        >
            {value}
        </span>
    );
}

export default function AnniversaryStory() {
    const [armed, setArmed] = useState(false);
    const onArm = useCallback(() => setArmed(true), []);

    return (
        <section aria-labelledby="dvadeset-naslov" className="relative isolate overflow-hidden bg-teal-950 py-20 text-teal-100/90 lg:py-28">
            <ClinicImage
                crop="fasada"
                decorative
                className="absolute inset-0 -z-10 size-full object-cover object-center"
                sizes="100vw"
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-teal-950/72" />
            <div aria-hidden="true" className="mesh-dark absolute inset-0 -z-10" />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-950/88 via-teal-950/55 to-teal-950/30"
            />

            <div className="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal>
                    <SectionMeta index="05" label="Kontinuitet" tone="light" />
                </Reveal>

                <div className="mt-8 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
                    <div>
                        <Reveal>
                            <h2 id="dvadeset-naslov" className="font-display leading-none">
                                <span className="sr-only">20 godina sa vama</span>
                                <span aria-hidden="true" className={`block ${armed ? 'anniversary-armed' : ''}`}>
                                    <span className="relative block w-fit">
                                        <AnniversaryCount onArm={onArm} />
                                        <span
                                            className="anniversary-script"
                                            style={{ '--rise-delay': '280ms' } as React.CSSProperties}
                                        >
                                            godina
                                        </span>
                                    </span>
                                    <span
                                        className="anniversary-line mt-6 block text-3xl font-bold tracking-[-0.015em] text-white sm:mt-8 sm:text-4xl lg:text-[2.75rem]"
                                        style={{ '--rise-delay': '420ms' } as React.CSSProperties}
                                    >
                                        sa vama
                                    </span>
                                </span>
                            </h2>
                            <p
                                className="anniversary-line meta-label mt-6 text-teal-400"
                                style={{ '--rise-delay': '460ms' } as React.CSSProperties}
                            >
                                2006 — 2026 · Doboj
                            </p>
                        </Reveal>

                        <Reveal delay={100}>
                            <p className="mt-8 max-w-lg text-[1.02rem] leading-relaxed">
                                Dvije decenije povjerenja, razvoja i kontinuiranog ulaganja u savremenu
                                zdravstvenu uslugu.
                            </p>
                            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-teal-100/70">
                                Zdravstvena ustanova Dr Brkić razvija svoju medicinsku priču od 2006. godine,
                                sa jasnom misijom da pacijentima u Doboju i regiji omogući kvalitetnu, dostupnu
                                i savremenu zdravstvenu uslugu na jednom mjestu.
                            </p>
                            <Link
                                href="/o-nama"
                                className="meta-label mt-8 inline-flex items-center gap-3 border-b border-teal-500/60 pb-1 text-teal-300 transition-colors hover:border-teal-300 hover:text-white"
                            >
                                Pročitajte našu priču
                                <svg aria-hidden="true" viewBox="0 0 24 12" className="h-2.5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M0 6h22M17 1l5 5-5 5" />
                                </svg>
                            </Link>
                        </Reveal>
                    </div>

                    <Reveal delay={150}>
                        <ol className="relative border-l border-teal-500/30 pl-8">
                            {milestones.map((m) => (
                                <li key={m.year} className="relative pb-8 last:pb-0">
                                    <span aria-hidden="true" className="absolute -left-[37px] top-[7px] size-2 bg-teal-600" />
                                    <p className="font-display text-xl font-bold tabular-nums text-white">{m.year}</p>
                                    <p className="mt-1 max-w-md text-[0.92rem] leading-relaxed text-teal-100/70">{m.text}</p>
                                </li>
                            ))}
                            <li className="relative">
                                <span aria-hidden="true" className="absolute -left-[39px] top-[7px] size-2.5 bg-crimson" />
                                <p className="font-display text-xl font-bold tabular-nums text-teal-300">2026</p>
                                <p className="mt-1 max-w-md text-[0.92rem] leading-relaxed text-teal-100/70">
                                    20 godina neprekidnog rada sa pacijentima iz Doboja i regije
                                </p>
                            </li>
                        </ol>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
