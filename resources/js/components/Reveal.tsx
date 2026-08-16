import { useEffect, useRef, type ElementType, type ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    as?: ElementType;
    delay?: number;
    className?: string;
    id?: string;
}

/**
 * Scroll-linked reveal. Content is always present in server-rendered HTML;
 * the animation class is only applied on the client, and CSS disables it
 * entirely under prefers-reduced-motion.
 */
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '', id }: RevealProps) {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        el.classList.add('reveal');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag ref={ref} id={id} className={className} style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}>
            {children}
        </Tag>
    );
}
