import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import type { SharedProps } from '@/types';
import { telHref } from '@/types';

export default function MobileContactBar() {
    const { settings } = usePage<SharedProps>().props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 100);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-ink/10 bg-paper/95 backdrop-blur transition-transform duration-300 lg:hidden ${visible ? 'translate-y-0' : 'translate-y-full'}`}
            style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
            <a
                href={telHref(settings.phonePrimary)}
                className="flex h-[52px] items-center justify-center gap-2 border-r border-ink/10 font-semibold text-ink"
            >
                <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3.5 3.5h3l1.5 4-2 1.5a12 12 0 005 5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5C7.6 17.6 2.4 12.4 2 5.1A1.5 1.5 0 013.5 3.5z" />
                </svg>
                Pozovite
            </a>
            <Link href="/kontakt" className="flex h-[52px] items-center justify-center bg-teal-600 font-semibold text-white">
                Zakažite
            </Link>
        </div>
    );
}
