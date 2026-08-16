import { Link } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import { SectionMeta } from '@/components/Motif';

const intents = [
    {
        title: 'Trebam dijagnostiku',
        detail: 'MR, CT, RTG, ultrazvuk, DEXA',
        href: '/odjeljenja/radiologija',
    },
    {
        title: 'Trebam laboratorijske analize',
        detail: 'Biohemijske, hematološke i hormonske analize',
        href: '/usluge/laboratorijske-analize',
    },
    {
        title: 'Trebam specijalistički pregled',
        detail: 'Konsultativni pregledi prema rasporedu specijalista',
        href: '/odjeljenja/specijalisticki-pregledi',
    },
    {
        title: 'Imam bol ili poteškoće sa kretanjem',
        detail: 'Fizijatrija i fizikalna terapija',
        href: '/odjeljenja/fizijatrija',
    },
    {
        title: 'Imam otoke ili osjećaj težine u rukama ili nogama',
        detail: 'Limfna drenaža, limfedem i lipoedem',
        href: '/usluge/limfna-drenaza',
    },
    {
        title: 'Trebam medicinu rada ili ljekarsko uvjerenje',
        detail: 'Pregledi za radnike, vozače i firme',
        href: '/odjeljenja/medicina-rada',
    },
    {
        title: 'Želim sistematski pregled',
        detail: 'Za pojedince i kompanije',
        href: '/usluge/sistematski-pregledi',
    },
];

export default function PatientIntent() {
    return (
        <section aria-labelledby="pomoc-naslov" className="bg-paper py-16 lg:py-24">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal>
                    <SectionMeta index="01" label="Orijentacija" />
                    <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                        <h2 id="pomoc-naslov" className="font-display text-3xl font-bold tracking-[-0.015em] text-ink sm:text-4xl lg:text-[2.75rem]">
                            Kako vam možemo pomoći?
                        </h2>
                        <p className="max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
                            Ne morate poznavati strukturu ustanove — krenite od onoga što vam treba.
                        </p>
                    </div>
                </Reveal>

                <Reveal className="mt-10 border-t border-ink/12">
                    <ul>
                        {intents.map((intent, i) => (
                            <li key={intent.href}>
                                <Link
                                    href={intent.href}
                                    className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 border-b border-ink/12 py-5 transition-colors hover:bg-teal-50/70 sm:gap-x-8 sm:py-6 lg:grid-cols-[64px_1fr_auto_auto] lg:px-2"
                                >
                                    <span className="meta-label tabular-nums text-teal-600">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-teal-800 sm:text-xl lg:text-[1.45rem]">
                                        {intent.title}
                                    </span>
                                    <span className="col-start-2 mt-1 text-[0.9rem] text-ink-soft lg:col-start-3 lg:mt-0 lg:text-right">
                                        {intent.detail}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="col-start-3 row-start-1 self-center text-teal-600 transition-transform group-hover:translate-x-1.5 lg:col-start-4"
                                    >
                                        <svg viewBox="0 0 24 12" className="h-3 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M0 6h22M17 1l5 5-5 5" />
                                        </svg>
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
