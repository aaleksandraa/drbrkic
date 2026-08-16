/**
 * Modular-square motif derived from the official logo grid.
 * Used as a small, consistent brand marker — never as a copy of the logo.
 */
export function ModuleMark({ className = '', tone = 'teal' }: { className?: string; tone?: 'teal' | 'light' }) {
    const filled = tone === 'teal' ? 'bg-teal-600' : 'bg-teal-400';
    const empty = tone === 'teal' ? 'border border-ink/15' : 'border border-white/20';

    return (
        <span aria-hidden="true" className={`grid w-fit grid-cols-3 gap-[3px] ${className}`}>
            <span className={`size-[7px] rounded-[1.5px] bg-crimson`} />
            <span className={`size-[7px] rounded-[1.5px] ${filled}`} />
            <span className={`size-[7px] rounded-[1.5px] ${empty}`} />
            <span className={`size-[7px] rounded-[1.5px] ${filled}`} />
            <span className={`size-[7px] rounded-[1.5px] ${filled}`} />
            <span className={`size-[7px] rounded-[1.5px] ${filled}`} />
            <span className={`size-[7px] rounded-[1.5px] ${empty}`} />
            <span className={`size-[7px] rounded-[1.5px] ${filled}`} />
            <span className={`size-[7px] rounded-[1.5px] ${empty}`} />
        </span>
    );
}

/** Section heading kit: technical index + label on a hairline rail. */
export function SectionMeta({
    index,
    label,
    tone = 'dark',
    className = '',
}: {
    index: string;
    label: string;
    tone?: 'dark' | 'light';
    className?: string;
}) {
    const color = tone === 'dark' ? 'text-ink-soft' : 'text-teal-300';
    const line = tone === 'dark' ? 'bg-ink/15' : 'bg-white/20';

    return (
        <p className={`meta-label flex items-center gap-4 ${color} ${className}`}>
            <span className={tone === 'light' ? 'text-teal-300' : 'text-teal-600'}>{index}</span>
            <span aria-hidden="true" className={`h-px w-10 ${line}`} />
            <span>{label}</span>
        </p>
    );
}

/** Architectural crosshair used at panel intersections. */
export function Crosshair({ className = '' }: { className?: string }) {
    return (
        <span aria-hidden="true" className={`pointer-events-none absolute size-3 ${className}`}>
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink/25" />
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-ink/25" />
        </span>
    );
}
