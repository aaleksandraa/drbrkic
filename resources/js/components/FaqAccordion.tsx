import { useState } from 'react';
import type { Faq } from '@/types';

export default function FaqAccordion({ items }: { items: Faq[] }) {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="border-t border-ink/12">
            {items.map((item, i) => {
                const expanded = open === i;
                return (
                    <div key={i} className="border-b border-ink/12">
                        <h3>
                            <button
                                type="button"
                                aria-expanded={expanded}
                                onClick={() => setOpen(expanded ? null : i)}
                                className="flex w-full items-center justify-between gap-4 py-4 text-left font-display text-[1.05rem] font-semibold text-ink transition-colors hover:text-teal-800"
                            >
                                {item.question}
                                <span
                                    aria-hidden="true"
                                    className={`flex size-7 shrink-0 items-center justify-center border border-ink/15 text-teal-700 transition-transform ${expanded ? 'rotate-45' : ''}`}
                                >
                                    <svg viewBox="0 0 12 12" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M6 0v12M0 6h12" />
                                    </svg>
                                </span>
                            </button>
                        </h3>
                        {expanded && (
                            <p className="pb-5 pr-12 text-[0.95rem] leading-relaxed text-ink-soft">{item.answer}</p>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
