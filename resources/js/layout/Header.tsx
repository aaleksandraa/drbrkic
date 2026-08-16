import { Link, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import type { SharedProps } from '@/types';
import { mapsNavHref, telHref } from '@/types';

const mainLinks = [
    { label: 'Početna', href: '/' },
    { label: 'O nama', href: '/o-nama' },
    { label: 'Doktori', href: '/doktori' },
    { label: 'Novosti', href: '/novosti' },
    { label: 'Cjenovnik', href: '/cjenovnik' },
    { label: 'Kontakt', href: '/kontakt' },
];

const iconBtn =
    'flex size-11 items-center justify-center rounded-[3px] border border-ink/15 text-ink hover:border-teal-600 hover:text-teal-700';

function MapPinIcon() {
    return (
        <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 17.5s5.5-4.7 5.5-9.1a5.5 5.5 0 10-11 0c0 4.4 5.5 9.1 5.5 9.1z" />
            <circle cx="10" cy="8.4" r="1.7" />
        </svg>
    );
}

export default function Header() {
    const { settings, nav } = usePage<SharedProps>().props;
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState<'odjeljenja' | 'usluge' | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileGroup, setMobileGroup] = useState<'odjeljenja' | 'usluge' | null>(null);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(null);
                setMobileOpen(false);
            }
        };
        const onClick = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
        };
        document.addEventListener('keydown', onKey);
        document.addEventListener('click', onClick);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('click', onClick);
        };
    }, []);

    useEffect(() => {
        document.documentElement.style.overflow = mobileOpen ? 'hidden' : '';
        return () => {
            document.documentElement.style.overflow = '';
        };
    }, [mobileOpen]);

    const linkCls =
        'px-3 py-2 text-[0.9375rem] font-medium text-ink hover:text-teal-700 transition-colors';
    const mapsUrl = mapsNavHref(settings.address, settings.city);

    return (
        <header className={`sticky top-0 z-40 border-b bg-paper/95 backdrop-blur transition-shadow ${scrolled ? 'border-ink/10 shadow-[0_1px_0_rgba(20,28,30,0.06),0_8px_24px_-16px_rgba(20,28,30,0.25)]' : 'border-transparent'}`}>
            <a
                href="#sadrzaj"
                className="absolute left-3 top-3 z-50 -translate-y-24 bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
            >
                Preskočite na sadržaj
            </a>

            <nav ref={navRef} aria-label="Glavna navigacija" className="mx-auto flex h-[68px] max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[76px] lg:px-10">
                <Link href="/" className="shrink-0" aria-label="ZU Dr Brkić – početna stranica">
                    <img
                        src="/images/logo-dr-brkic.png"
                        alt="ZU Dr Brkić – zdravstvena ustanova Doboj"
                        width={1024}
                        height={323}
                        className="h-9 w-auto lg:h-10"
                    />
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center xl:flex">
                    <Link href="/" className={linkCls}>Početna</Link>
                    <Link href="/o-nama" className={linkCls}>O nama</Link>

                    {(
                        [
                            ['odjeljenja', 'Odjeljenja', nav.departments.map((d) => ({ label: d.name, href: `/odjeljenja/${d.slug}` }))],
                            ['usluge', 'Usluge', nav.services.map((s) => ({ label: s.name, href: `/usluge/${s.slug}` }))],
                        ] as const
                    ).map(([key, label, items]) => (
                        <div key={key} className="relative">
                            <button
                                type="button"
                                aria-expanded={open === key}
                                aria-haspopup="true"
                                className={`${linkCls} flex items-center gap-1.5`}
                                onClick={() => setOpen(open === key ? null : key)}
                            >
                                {label}
                                <svg aria-hidden="true" viewBox="0 0 10 6" className={`h-1.5 w-2.5 transition-transform ${open === key ? 'rotate-180' : ''}`}>
                                    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                </svg>
                            </button>
                            {open === key && (
                                <div className={`absolute left-0 top-full border border-ink/10 bg-paper shadow-[0_20px_50px_-24px_rgba(20,28,30,0.4)] ${key === 'usluge' ? 'grid w-[560px] grid-cols-2 gap-x-2 p-4' : 'w-72 p-4'}`}>
                                    {items.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setOpen(null)}
                                            className="block border-l border-ink/10 px-4 py-2 text-[0.9rem] text-ink-soft transition-colors hover:border-teal-500 hover:bg-teal-50 hover:text-teal-800"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    <Link href="/doktori" className={linkCls}>Doktori</Link>
                    <Link href="/novosti" className={linkCls}>Novosti</Link>
                    <Link href="/cjenovnik" className={linkCls}>Cjenovnik</Link>
                    <Link href="/kontakt" className={linkCls}>Kontakt</Link>
                </div>

                <div className="hidden items-center gap-4 xl:flex">
                    <a href={telHref(settings.phonePrimary)} className="group text-right">
                        <span className="meta-label block text-ink-faint">Recepcija</span>
                        <span className="font-display text-[1.05rem] font-semibold tabular-nums text-ink transition-colors group-hover:text-teal-700">
                            {settings.phonePrimary}
                        </span>
                    </a>
                    <Link
                        href="/kontakt"
                        className="rounded-[3px] bg-teal-600 px-5 py-2.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-teal-700"
                    >
                        Zakažite pregled
                    </Link>
                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Navigacija do ustanove na Google Maps"
                        className={iconBtn}
                    >
                        <MapPinIcon />
                    </a>
                </div>

                {/* Mobile trigger */}
                <div className="flex items-center gap-2 xl:hidden">
                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Navigacija do ustanove na Google Maps"
                        className={iconBtn}
                    >
                        <MapPinIcon />
                    </a>
                    <a
                        href={telHref(settings.phonePrimary)}
                        aria-label={`Pozovite ${settings.phonePrimary}`}
                        className={iconBtn}
                    >
                        <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M3.5 3.5h3l1.5 4-2 1.5a12 12 0 005 5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5C7.6 17.6 2.4 12.4 2 5.1A1.5 1.5 0 013.5 3.5z" />
                        </svg>
                    </a>
                    <button
                        type="button"
                        aria-expanded={mobileOpen}
                        aria-label="Otvorite meni"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex size-11 flex-col items-center justify-center gap-[5px] rounded-[3px] border border-ink/15"
                    >
                        <span className={`h-px w-5 bg-ink transition-transform ${mobileOpen ? 'translate-y-[3px] rotate-45' : ''}`} />
                        <span className={`h-px w-5 bg-ink transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-px w-5 bg-ink transition-transform ${mobileOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-68px)] overflow-y-auto bg-paper xl:hidden">
                    <nav aria-label="Mobilna navigacija" className="flex min-h-full flex-col px-6 py-6">
                        <div className="flex-1 divide-y divide-ink/8">
                            {mainLinks.slice(0, 2).map((l) => (
                                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-4 font-display text-xl font-semibold">
                                    {l.label}
                                </Link>
                            ))}

                            {(
                                [
                                    ['odjeljenja', 'Odjeljenja', nav.departments.map((d) => ({ label: d.name, href: `/odjeljenja/${d.slug}` }))],
                                    ['usluge', 'Usluge', nav.services.map((s) => ({ label: s.name, href: `/usluge/${s.slug}` }))],
                                ] as const
                            ).map(([key, label, items]) => (
                                <div key={key}>
                                    <button
                                        type="button"
                                        aria-expanded={mobileGroup === key}
                                        onClick={() => setMobileGroup(mobileGroup === key ? null : key)}
                                        className="flex w-full items-center justify-between py-4 font-display text-xl font-semibold"
                                    >
                                        {label}
                                        <svg aria-hidden="true" viewBox="0 0 10 6" className={`h-2 w-3 transition-transform ${mobileGroup === key ? 'rotate-180' : ''}`}>
                                            <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        </svg>
                                    </button>
                                    {mobileGroup === key && (
                                        <div className="border-l border-teal-500/50 pb-4 pl-4">
                                            {items.map((item) => (
                                                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2.5 text-[0.95rem] text-ink-soft">
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {mainLinks.slice(2).map((l) => (
                                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-4 font-display text-xl font-semibold">
                                    {l.label}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-8 space-y-3 border-t border-ink/10 pt-6 pb-10">
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-[3px] border border-ink/20 px-5 py-3.5 font-semibold"
                            >
                                Navigacija
                            </a>
                            <a
                                href={telHref(settings.phonePrimary)}
                                className="flex items-center justify-center gap-2 rounded-[3px] border border-ink/20 px-5 py-3.5 font-semibold"
                            >
                                {settings.phonePrimary}
                            </a>
                            <Link
                                href="/kontakt"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center rounded-[3px] bg-teal-600 px-5 py-3.5 font-semibold text-white"
                            >
                                Zakažite pregled
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
