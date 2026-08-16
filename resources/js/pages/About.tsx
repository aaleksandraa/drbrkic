import { useEffect, useRef, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import SiteLayout from '@/layout/SiteLayout';
import Reveal from '@/components/Reveal';
import ClinicImage from '@/components/ClinicImage';
import PhotoGallery from '@/components/PhotoGallery';
import InteractiveTeam from '@/components/InteractiveTeam';
import { SectionMeta } from '@/components/Motif';
import type { SeoData, SharedProps } from '@/types';
import { telHref } from '@/types';

const timeline = [
    { year: '2006', text: 'Osnivanje Specijalističke ambulante za kompjuterizovanu tomografiju „Dr. Brkić“ u Doboju' },
    { year: '2010', text: 'Proširenje dijagnostičkih usluga – uvođenje ultrazvučne dijagnostike i laboratorijskih analiza' },
    { year: '2014', text: 'Osnivanje Specijalističkog centra „Dr. Brkić“ – oporavak i rast nakon velikih poplava' },
    { year: '2018', text: 'Uvođenje magnetne rezonance i proširenje kapaciteta ustanove' },
    { year: '2022', text: 'Modernizacija laboratorije i uvođenje novih specijalističkih pregleda' },
    { year: '2024', text: 'Nastavak ulaganja u najsavremeniju medicinsku opremu i stručni kadar' },
    { year: '2026', text: '20 godina neprekidnog rada sa pacijentima iz Doboja i regije', current: true },
];

const values = [
    {
        title: 'Pacijent na prvom mjestu',
        text: 'Svaki pacijent zaslužuje pažnju, razumijevanje i individualan pristup. Naša misija je pružiti kvalitetnu zdravstvenu uslugu u ugodnom okruženju.',
    },
    {
        title: 'Pouzdanost i tačnost',
        text: 'Posvećeni smo tačnoj i pravovremenoj dijagnozi koristeći najsavremeniju medicinsku opremu i provjerene metode.',
    },
    {
        title: 'Kontinuirano unapređenje',
        text: 'Stalno ulažemo u edukaciju našeg tima, novu opremu i razvoj usluga kako bismo bili u koraku sa svjetskim standardima.',
    },
    {
        title: 'Timski rad',
        text: 'Naš multidisciplinarni tim specijalista sarađuje kako bi pružio sveobuhvatnu zdravstvenu zaštitu na jednom mjestu.',
    },
];

const reasons = [
    'Više medicinskih usluga na jednom mjestu',
    'Najsavremenija dijagnostička oprema',
    'Tim iskusnih specijalista',
    'Brzi rezultati bez dugih čekanja',
    'Individualan pristup svakom pacijentu',
    'Kontinuirano ulaganje u kvalitet',
];

const stats = [
    { value: 20, suffix: '', label: 'godina sa vama' },
    { value: 6, suffix: '', label: 'odjeljenja' },
    { value: 10, suffix: '+', label: 'specijalista' },
    { value: 1000, suffix: '+', label: 'pacijenata godišnje' },
];

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const [shown, setShown] = useState(value);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let frame = 0;
        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries[0]?.isIntersecting) return;
                observer.disconnect();
                const start = performance.now();
                const duration = value >= 100 ? 1600 : 1200;
                const tick = (now: number) => {
                    const t = Math.min(1, (now - start) / duration);
                    const eased = 1 - (1 - t) ** 3;
                    setShown(Math.round(eased * value));
                    if (t < 1) frame = requestAnimationFrame(tick);
                };
                setShown(0);
                frame = requestAnimationFrame(tick);
            },
            { threshold: 0.4 },
        );

        observer.observe(el);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [value]);

    return (
        <div ref={ref} className="rounded-xl bg-paper px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <dd className="font-display text-3xl font-bold tabular-nums tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
                {shown}
                {suffix}
            </dd>
            <dt className="mt-1.5 text-[0.82rem] leading-snug text-ink-soft sm:mt-2 sm:text-[0.95rem]">{label}</dt>
        </div>
    );
}

export default function About({ seo }: { seo: SeoData }) {
    const { settings } = usePage<SharedProps>().props;

    return (
        <SiteLayout seo={seo}>
            <section aria-labelledby="o-nama-naslov" className="mx-auto max-w-[1360px] scroll-mt-24 px-4 pt-6 pb-10 sm:px-6 sm:pt-8 sm:pb-12 lg:px-10 lg:pt-10 lg:pb-16">
                <InteractiveTeam />
                <Reveal className="mt-8 sm:mt-10">
                    <SectionMeta index="01" label="Naš tim" />
                    <h1 id="o-nama-naslov" className="mt-5 w-full font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]">
                        Zdravstvena ustanova sa tradicijom i vizijom
                    </h1>
                    <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft sm:text-lg">
                        Ljudi iza ustanove — tim specijalista Specijalističkog centra Dr Brkić u Doboju.
                    </p>
                </Reveal>
            </section>

            <section aria-label="U brojkama" className="border-y border-ink/10 bg-mineral">
                <dl className="mx-auto grid max-w-[1360px] grid-cols-2 gap-3 px-4 py-6 sm:gap-4 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-10 lg:py-10">
                    {stats.map((stat) => (
                        <AnimatedStat key={stat.label} {...stat} />
                    ))}
                </dl>
            </section>

            <section aria-labelledby="prica" className="mx-auto max-w-[1360px] scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
                <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    <Reveal>
                        <SectionMeta index="02" label="Naša priča" />
                        <h2 id="prica" className="mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]">
                            Od ambulante do specijalističkog centra
                        </h2>
                        <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-ink-soft sm:text-[1.02rem]">
                            <p>
                                Zdravstvena ustanova Dr Brkić osnovana je 2006. godine kao Specijalistička ambulanta
                                za kompjuterizovanu tomografiju u Doboju. Osnivač, dr Jovica Brkić, specijalista
                                radiodijagnostike, želio je pacijentima u regiji pružiti pristup savremenoj
                                dijagnostici bez dugih čekanja.
                            </p>
                            <p>
                                Kroz godine, ustanova je rasla i razvijala se. Uprkos izazovima, uključujući razorne
                                poplave 2014. godine, ustanova je pokazala izuzetnu otpornost i posvećenost –
                                obnovljena je i proširena u Specijalistički centar „Dr. Brkić“.
                            </p>
                            <p>
                                Danas, sa šest odjeljenja i timom od preko deset specijalista, pružamo širok spektar
                                dijagnostičkih i specijalističkih usluga. Kontinuirano ulažemo u najsavremeniju
                                opremu i stručni kadar, jer vjerujemo da svaki pacijent zaslužuje najbolju moguću njegu.
                            </p>
                        </div>
                        <blockquote className="mt-8 border-l-2 border-teal-600 pl-5">
                            <p className="font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
                                Svaki pacijent zaslužuje pristup savremenoj dijagnostici, bez dugih čekanja.
                            </p>
                            <footer className="mt-2 text-[0.88rem] text-ink-soft">dr Jovica Brkić, osnivač</footer>
                        </blockquote>
                    </Reveal>

                    <Reveal delay={120}>
                        <div className="media-zoom relative rounded-xl">
                            <ClinicImage
                                crop="mreza"
                                className="aspect-[4/3] w-full object-cover sm:aspect-[4/5]"
                                sizes="(min-width: 1024px) 40vw, 100vw"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-teal-950/85 to-transparent px-5 py-5 sm:px-6 sm:py-6">
                                <p className="font-display text-4xl font-bold tabular-nums leading-none text-white sm:text-5xl">2006</p>
                                <p className="mt-1.5 text-[0.88rem] text-white/80">Godina osnivanja u Doboju</p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="mt-16 lg:mt-24">
                    <Reveal>
                        <SectionMeta index="03" label="Ključni momenti" />
                        <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl">
                            Naš put kroz godine
                        </h2>
                    </Reveal>
                    <ol className="relative mt-8 space-y-3 sm:mt-10 sm:space-y-4">
                        {timeline.map((m, i) => (
                            <Reveal key={m.year} as="li" delay={i * 70}>
                                <div
                                    className={`group grid gap-2 rounded-xl border p-4 transition-all duration-300 sm:grid-cols-[6.5rem_1fr] sm:items-baseline sm:gap-8 sm:p-6 ${
                                        m.current
                                            ? 'border-teal-500/50 bg-teal-50/80 shadow-[0_16px_40px_-24px_rgba(13,61,54,0.35)]'
                                            : 'border-ink/10 bg-paper hover:border-teal-500/35 hover:shadow-[0_16px_40px_-24px_rgba(13,61,54,0.28)]'
                                    }`}
                                >
                                    <p className={`font-display text-2xl font-bold tabular-nums sm:text-3xl ${m.current ? 'text-teal-700' : 'text-ink'}`}>
                                        {m.year}
                                    </p>
                                    <p className="text-[0.92rem] leading-relaxed text-ink-soft sm:text-[0.98rem]">{m.text}</p>
                                </div>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>

            <section aria-labelledby="vrijednosti" className="border-y border-ink/10 bg-mineral py-14 sm:py-16 lg:py-24">
                <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                    <Reveal className="max-w-2xl">
                        <SectionMeta index="04" label="Naše vrijednosti" />
                        <h2 id="vrijednosti" className="mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl">
                            Principi koji nas vode
                        </h2>
                        <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft sm:text-lg">
                            Svakodnevni rad u ustanovi počiva na jasnim principima — od prvog kontakta do nalaza.
                        </p>
                    </Reveal>
                    <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:gap-6">
                        {values.map((value, i) => (
                            <Reveal key={value.title} delay={i * 80}>
                                <article className="group h-full rounded-xl border border-ink/10 bg-paper p-5 transition-all duration-300 hover:border-teal-500/40 hover:shadow-[0_16px_40px_-24px_rgba(13,61,54,0.35)] sm:p-8">
                                    <h3 className="flex items-baseline gap-3 font-display text-xl font-bold text-ink sm:text-[1.35rem]">
                                        <span className="tabular-nums text-teal-600">{String(i + 1).padStart(2, '0')}</span>
                                        {value.title}
                                    </h3>
                                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft sm:text-[0.95rem]">{value.text}</p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            <section aria-labelledby="misija" className="mx-auto max-w-[1360px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
                <Reveal className="grid gap-3 sm:gap-5 lg:grid-cols-2 lg:gap-6">
                    <div className="relative overflow-hidden rounded-xl bg-teal-900 px-5 py-8 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-14">
                        <div aria-hidden="true" className="mesh-dark pointer-events-none absolute inset-0 opacity-60" />
                        <div className="relative">
                            <h2 id="misija" className="font-display text-2xl font-bold sm:text-3xl">Naša misija</h2>
                            <p className="mt-4 text-[0.98rem] leading-relaxed text-teal-50/90 sm:text-[1.05rem]">
                                Pružiti pacijentima u Doboju i regiji kvalitetnu, dostupnu i savremenu zdravstvenu uslugu
                                na jednom mjestu. Kroz profesionalan pristup, najsavremeniju opremu i tim posvećenih
                                stručnjaka, želimo biti prva adresa za dijagnostiku i specijalističke preglede.
                            </p>
                        </div>
                    </div>
                    <div className="rounded-xl border border-ink/10 bg-paper px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-14">
                        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Naša vizija</h2>
                        <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft sm:text-[1.05rem]">
                            Biti vodeća privatna zdravstvena ustanova u regionu, prepoznata po kvalitetu usluga,
                            pouzdanosti dijagnostike i brizi za pacijente. Težimo kontinuiranom unapređenju i
                            uvođenju novih medicinskih usluga u skladu sa svjetskim standardima.
                        </p>
                    </div>
                </Reveal>

                <Reveal className="mt-14 sm:mt-16" delay={80}>
                    <PhotoGallery crops={['fasada', 'ulaz', 'mreza', 'natpis']} />
                </Reveal>

                <Reveal className="mt-14 sm:mt-16 lg:mt-20">
                    <SectionMeta index="05" label="Zašto mi" />
                    <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl">
                        Zašto izabrati Dr Brkić?
                    </h2>
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                        {reasons.map((reason) => (
                            <li
                                key={reason}
                                className="flex items-start gap-3 rounded-xl border border-ink/10 bg-paper px-4 py-4 text-[0.92rem] font-medium leading-snug text-ink sm:px-5 sm:py-5 sm:text-[0.95rem]"
                            >
                                <span
                                    aria-hidden="true"
                                    className="about-dot mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white"
                                >
                                    <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M2 6.2l2.6 2.6L10 3.4" />
                                    </svg>
                                </span>
                                {reason}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </section>

            <section aria-labelledby="o-nama-cta" className="bg-teal-900 text-white">
                <Reveal className="mx-auto flex max-w-[1360px] flex-col gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-20">
                    <div className="max-w-xl">
                        <h2 id="o-nama-cta" className="font-display text-3xl font-bold tracking-[-0.015em] sm:text-4xl">
                            Dođite da se uvjerite
                        </h2>
                        <p className="mt-3 text-[0.98rem] leading-relaxed text-teal-100/80 sm:text-[1.05rem]">
                            Zakazivanje je brzo — pozovite recepciju ili pošaljite upit. Tim ZU SC Dr Brkić je tu za vas.
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                        <a
                            href={telHref(settings.phonePrimary)}
                            className="inline-flex justify-center rounded-[3px] bg-teal-600 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-teal-700"
                        >
                            Pozovite {settings.phonePrimary}
                        </a>
                        <Link
                            href="/kontakt"
                            className="inline-flex justify-center rounded-[3px] border border-white/30 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/10"
                        >
                            Pošaljite upit
                        </Link>
                    </div>
                </Reveal>
            </section>
        </SiteLayout>
    );
}
