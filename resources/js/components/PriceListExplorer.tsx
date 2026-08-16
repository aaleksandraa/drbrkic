import { useEffect, useMemo, useState } from 'react';
import { Link } from '@inertiajs/react';
import type { PriceGroup, PriceItem, PriceSection } from '@/types';

function normalize(value: string) {
    return value
        .toLowerCase()
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'd')
        .normalize('NFD')
        .replace(/\p{M}/gu, '');
}

function uslugaLabel(count: number) {
    const mod10 = count % 10;
    const mod100 = count % 100;
    if (mod10 === 1 && mod100 !== 11) return `${count} usluga`;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} usluge`;
    return `${count} usluga`;
}

function groupCount(group: PriceGroup) {
    return group.sections.reduce((sum, section) => sum + section.items.length, 0);
}

function highlight(text: string, query: string) {
    const trimmed = query.trim();
    if (!trimmed) return text;
    const escaped = trimmed.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escaped})`, 'ig'));
    if (parts.length === 1) return text;
    return parts.map((part, i) =>
        part.toLowerCase() === trimmed.toLowerCase() ? (
            <mark key={i} className="rounded-[2px] bg-teal-100 text-inherit">
                {part}
            </mark>
        ) : (
            part
        ),
    );
}

function matchesQuery(text: string, query: string) {
    return normalize(text).includes(query);
}

export default function PriceListExplorer({ groups }: { groups: PriceGroup[] }) {
    const [query, setQuery] = useState('');
    const [openGroups, setOpenGroups] = useState<Set<string>>(() => new Set());
    const [openSections, setOpenSections] = useState<Set<string>>(() => new Set());

    const needle = normalize(query.trim());

    const visible = useMemo(() => {
        if (!needle) return groups;
        return groups
            .map((group) => {
                const groupHit = matchesQuery(group.title, needle);
                const sections = group.sections
                    .map((section) => {
                        if (groupHit || matchesQuery(section.title, needle)) return section;
                        const items = section.items.filter(
                            (item) => matchesQuery(item.name, needle) || matchesQuery(item.price, needle),
                        );
                        return items.length ? { ...section, items } : null;
                    })
                    .filter((section): section is PriceSection => section !== null);
                return sections.length ? { ...group, sections } : null;
            })
            .filter((group): group is PriceGroup => group !== null);
    }, [groups, needle]);

    const resultCount = visible.reduce((sum, group) => sum + groupCount(group), 0);

    useEffect(() => {
        if (needle) {
            setOpenGroups(new Set(visible.map((group) => group.id)));
            setOpenSections(new Set(visible.flatMap((group) => group.sections.map((section) => section.id))));
        }
    }, [needle, visible]);

    useEffect(() => {
        const applyHash = () => {
            const hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
            if (!hash) return;

            const parent = groups.find((group) => group.id === hash || group.sections.some((section) => section.id === hash));
            if (!parent) return;

            const sectionIds =
                parent.id === hash
                    ? parent.sections.map((section) => section.id)
                    : parent.sections.filter((section) => section.id === hash).map((section) => section.id);

            setOpenGroups(new Set([parent.id]));
            setOpenSections(new Set(sectionIds));

            window.setTimeout(() => {
                document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 80);
        };

        applyHash();
        window.addEventListener('hashchange', applyHash);
        return () => window.removeEventListener('hashchange', applyHash);
    }, [groups]);

    const toggleGroup = (id: string, sections: PriceSection[]) => {
        setOpenGroups((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
                setOpenSections((open) => {
                    const merged = new Set(open);
                    sections.forEach((section) => merged.add(section.id));
                    return merged;
                });
            }
            return next;
        });
    };

    const toggleSection = (id: string) => {
        setOpenSections((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    };

    const expandAll = () => {
        setOpenGroups(new Set(visible.map((group) => group.id)));
        setOpenSections(new Set(visible.flatMap((group) => group.sections.map((section) => section.id))));
    };

    const collapseAll = () => {
        setOpenGroups(new Set());
        setOpenSections(new Set());
    };

    const jumpTo = (group: PriceGroup) => {
        setQuery('');
        setOpenGroups(new Set([group.id]));
        setOpenSections(new Set(group.sections.map((section) => section.id)));
        window.history.replaceState(null, '', `#${group.id}`);
        window.setTimeout(() => {
            document.getElementById(group.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 40);
    };

    return (
        <div>
            <div className="sticky top-[68px] z-30 -mx-4 border-y border-ink/10 bg-paper/95 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6 lg:top-[76px] lg:-mx-10 lg:px-10">
                <div className="relative">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-faint"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20l-3.2-3.2" />
                    </svg>
                    <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Escape') setQuery('');
                        }}
                        placeholder="Pretražite uslugu, npr. CT glave, Holter, mamografija…"
                        autoComplete="off"
                        className="w-full rounded-[3px] border border-ink/15 bg-paper py-3.5 pl-12 pr-4 text-[0.98rem] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                        aria-label="Pretraga cjenovnika"
                    />
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                    {groups.map((group) => (
                        <button
                            key={group.id}
                            type="button"
                            onClick={() => jumpTo(group)}
                            className={`rounded-[3px] border px-3 py-1.5 text-[0.82rem] font-medium transition-colors ${
                                openGroups.has(group.id) && !needle
                                    ? 'border-teal-600 bg-teal-600 text-white'
                                    : 'border-ink/15 text-ink hover:border-teal-600 hover:text-teal-700'
                            }`}
                        >
                            {group.title}
                        </button>
                    ))}
                    <span className="ml-auto flex gap-3 text-[0.8rem] font-medium">
                        <button type="button" onClick={expandAll} className="text-teal-700 hover:text-teal-900">
                            Otvori sve
                        </button>
                        <button type="button" onClick={collapseAll} className="text-ink-soft hover:text-ink">
                            Zatvori sve
                        </button>
                    </span>
                </div>

                {needle && (
                    <p className="mt-3 text-[0.88rem] text-ink-soft">
                        {resultCount > 0
                            ? `${uslugaLabel(resultCount)} za „${query.trim()}“`
                            : `Nema usluga za „${query.trim()}“.`}
                    </p>
                )}
            </div>

            <div className="mt-8 space-y-3">
                {visible.map((group) => {
                    const expanded = openGroups.has(group.id);
                    const count = groupCount(group);
                    return (
                        <section
                            key={group.id}
                            id={group.id}
                            className="scroll-mt-32 overflow-hidden rounded-[3px] border border-ink/12 bg-paper lg:scroll-mt-36"
                        >
                            <h2>
                                <button
                                    type="button"
                                    aria-expanded={expanded}
                                    onClick={() => toggleGroup(group.id, group.sections)}
                                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                                >
                                    <span>
                                        <span className="block font-display text-xl font-bold text-ink sm:text-[1.35rem]">
                                            {group.title}
                                        </span>
                                        <span className="mt-0.5 block text-[0.82rem] text-ink-faint">{uslugaLabel(count)}</span>
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className={`flex size-8 shrink-0 items-center justify-center border border-ink/15 text-teal-700 transition-transform ${expanded ? 'rotate-45' : ''}`}
                                    >
                                        <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M6 0v12M0 6h12" />
                                        </svg>
                                    </span>
                                </button>
                            </h2>

                            <div hidden={!expanded} className="border-t border-ink/10">
                                {group.departmentSlug && (
                                    <div className="flex justify-end border-b border-ink/8 px-5 py-2.5 sm:px-6">
                                        <Link
                                            href={`/odjeljenja/${group.departmentSlug}`}
                                            className="text-[0.82rem] font-medium text-teal-700 hover:text-teal-900"
                                        >
                                            Stranica odjeljenja
                                        </Link>
                                    </div>
                                )}
                                {group.sections.map((section) => {
                                    const sectionOpen = openSections.has(section.id);
                                    const showHeading = group.sections.length > 1;
                                    return (
                                        <div
                                            key={section.id}
                                            id={section.id !== group.id ? section.id : undefined}
                                            className="scroll-mt-32 lg:scroll-mt-36"
                                        >
                                            {showHeading && (
                                                <h3>
                                                    <button
                                                        type="button"
                                                        aria-expanded={sectionOpen}
                                                        onClick={() => toggleSection(section.id)}
                                                        className="flex w-full items-center justify-between gap-3 bg-mineral/70 px-5 py-3 text-left font-display text-[1.02rem] font-semibold text-ink hover:text-teal-800 sm:px-6"
                                                    >
                                                        {section.title}
                                                        <span className="text-[0.75rem] font-medium text-ink-faint">
                                                            {uslugaLabel(section.items.length)}
                                                        </span>
                                                    </button>
                                                </h3>
                                            )}
                                            <div hidden={showHeading && !sectionOpen}>
                                                <PriceTable items={section.items} query={query} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

function PriceTable({ items, query }: { items: PriceItem[]; query: string }) {
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-[0.9375rem]">
                <thead>
                    <tr className="border-b border-ink/12">
                        <th className="meta-label px-5 py-2.5 text-left font-medium text-ink-faint sm:px-6">Usluga</th>
                        <th className="meta-label px-5 py-2.5 text-right font-medium text-ink-faint sm:px-6">Cijena</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, i) => (
                        <tr key={`${item.name}-${item.price}`} className={i % 2 === 1 ? 'bg-teal-50/70 hover:bg-teal-50' : 'bg-paper hover:bg-teal-50/50'}>
                            <td className="px-5 py-2.5 leading-snug text-ink sm:px-6">
                                {item.href ? (
                                    <Link
                                        href={item.href}
                                        className="font-medium text-teal-700 underline-offset-2 hover:text-teal-900 hover:underline"
                                    >
                                        {highlight(item.name, query)}
                                    </Link>
                                ) : (
                                    highlight(item.name, query)
                                )}
                            </td>
                            <td className="px-5 py-2.5 text-right font-semibold tabular-nums whitespace-nowrap text-ink sm:px-6">
                                {item.price}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
