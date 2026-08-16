import type { PreparationGuideData, PreparationGroup, PreparationSection } from '@/types';

export default function PreparationGuide({
    data,
    heading = 'Priprema za pregled',
    headingId = 'priprema',
}: {
    data: PreparationGuideData;
    heading?: string;
    headingId?: string;
}) {
    return (
        <section aria-labelledby={headingId} className="mt-12">
            <h2 id={headingId} className="font-display text-2xl font-bold text-ink">
                {heading}
            </h2>
            {data.intro && <p className="mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-ink-soft">{data.intro}</p>}

            <div className="mt-6 space-y-4">
                {data.sections.map((section) => (
                    <article
                        key={section.id ?? section.title}
                        className={
                            section.emphasis
                                ? 'border border-teal-600/25 bg-teal-50/70 px-5 py-5 sm:px-6'
                                : 'border border-ink/12 bg-paper px-5 py-5 sm:px-6'
                        }
                    >
                        <h3 className="font-display text-lg font-semibold text-ink">{section.title}</h3>
                        <SectionBody section={section} />
                    </article>
                ))}
            </div>
        </section>
    );
}

function SectionBody({ section }: { section: PreparationSection }) {
    return (
        <>
            {section.intro && <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{section.intro}</p>}
            <ItemList items={section.items} />
            {section.note && <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft">{section.note}</p>}
            {section.groups && section.groups.length > 0 && (
                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                    {section.groups.map((group) => (
                        <GroupCard key={group.title} group={group} />
                    ))}
                </div>
            )}
        </>
    );
}

function GroupCard({ group }: { group: PreparationGroup }) {
    return (
        <div className="border-l-2 border-teal-500 bg-mineral px-4 py-4">
            <h4 className="font-display text-[1.02rem] font-semibold text-ink">{group.title}</h4>
            {group.intro && <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">{group.intro}</p>}
            <ItemList items={group.items} />
        </div>
    );
}

function ItemList({ items }: { items?: string[] }) {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <ul className="mt-3 space-y-2.5">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-[9px] size-1.5 shrink-0 bg-teal-600" />
                    {item}
                </li>
            ))}
        </ul>
    );
}
