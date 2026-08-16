import { Link, usePage } from '@inertiajs/react';
import type { SharedProps } from '@/types';
import { telHref } from '@/types';
import { ModuleMark } from '@/components/Motif';
import SocialIcons from '@/components/SocialIcons';

export default function Footer() {
    const { settings, nav } = usePage<SharedProps>().props;
    const year = new Date().getFullYear();

    const quickLinks = [
        { label: 'Početna', href: '/' },
        { label: 'O nama', href: '/o-nama' },
        { label: 'Doktori', href: '/doktori' },
        { label: 'Novosti', href: '/novosti' },
        { label: 'Cjenovnik', href: '/cjenovnik' },
        { label: 'Kontakt', href: '/kontakt' },
    ];

    const linkRow = 'flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 text-[0.9rem] lg:flex-col lg:items-start lg:gap-y-2.5 lg:text-[0.95rem]';

    return (
        <footer className="relative bg-teal-950 text-teal-100/80">
            <div aria-hidden="true" className="mesh-dark absolute inset-0 opacity-60" />
            <div className="relative mx-auto max-w-[1360px] px-4 pt-12 pb-[calc(5.75rem+env(safe-area-inset-bottom))] sm:px-6 lg:px-10 lg:py-16">
                <div className="grid gap-10 text-center lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12 lg:text-left">
                    <div className="flex flex-col items-center lg:items-start">
                        <div className="inline-block bg-white p-3">
                            <img
                                src="/images/logo-dr-brkic.png"
                                alt="ZU Dr Brkić – zdravstvena ustanova Doboj"
                                width={1024}
                                height={323}
                                loading="lazy"
                                className="h-9 w-auto"
                            />
                        </div>
                        <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed">
                            Savremeni dijagnostički i specijalistički centar u Doboju. Više medicinskih usluga
                            na jednom mjestu.
                        </p>
                        <p className="meta-label mt-6 flex items-center justify-center gap-3 text-teal-300 lg:justify-start">
                            <ModuleMark tone="light" />
                            20 godina sa vama
                        </p>
                    </div>

                    <nav aria-label="Brzi linkovi">
                        <h2 className="meta-label mb-4 text-teal-300 lg:mb-5">Brzi linkovi</h2>
                        <ul className={linkRow}>
                            {quickLinks.map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="transition-colors hover:text-white">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Odjeljenja">
                        <h2 className="meta-label mb-4 text-teal-300 lg:mb-5">Odjeljenja</h2>
                        <ul className={linkRow}>
                            {nav.departments.map((d) => (
                                <li key={d.slug}>
                                    <Link href={`/odjeljenja/${d.slug}`} className="transition-colors hover:text-white">
                                        {d.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="flex flex-col items-center lg:items-start">
                        <h2 className="meta-label mb-4 text-teal-300 lg:mb-5">Kontakt</h2>
                        <address className="space-y-2.5 text-[0.95rem] not-italic">
                            <p>{settings.address}, {settings.city}</p>
                            <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 lg:justify-start">
                                <a href={telHref(settings.phonePrimary)} className="tabular-nums transition-colors hover:text-white">
                                    {settings.phonePrimary}
                                </a>
                                <span aria-hidden="true" className="text-white/30">·</span>
                                <a href={telHref(settings.phoneSecondary)} className="tabular-nums transition-colors hover:text-white">
                                    {settings.phoneSecondary}
                                </a>
                            </p>
                            <p>
                                <a href={`mailto:${settings.email}`} className="transition-colors hover:text-white">
                                    {settings.email}
                                </a>
                            </p>
                        </address>
                        <div className="mt-5 text-[0.9rem] lg:border-l lg:border-teal-500/40 lg:pl-4">
                            <p>{settings.hoursWeekdays}</p>
                            <p>{settings.hoursSaturday}</p>
                        </div>
                        <SocialIcons
                            networks={['facebook', 'instagram', 'linkedin']}
                            className="mt-6 justify-center lg:justify-start"
                            iconClassName="size-[1.05rem]"
                        />
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-[0.85rem] text-teal-100/50 sm:mt-14 sm:flex-row sm:justify-between sm:text-left">
                    <p>© {year} ZU SC Dr Brkić. Sva prava zadržana.</p>
                    <p className="meta-label">Doboj · EST. 2006</p>
                </div>
            </div>
        </footer>
    );
}
