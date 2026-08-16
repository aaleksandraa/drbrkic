import { Link, usePage } from '@inertiajs/react';
import type { SharedProps } from '@/types';
import { mapsHref } from '@/types';
import SocialIcons from '@/components/SocialIcons';

const itemCls = 'transition-colors hover:text-white';

export default function TopBar() {
    const { settings } = usePage<SharedProps>().props;
    const mapsUrl = mapsHref(settings.address, settings.city);

    return (
        <div className="bg-teal-950 text-[0.8125rem] font-medium leading-none tracking-[-0.011em] text-teal-100/80">
            <div className="mx-auto flex h-9 max-w-[1360px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
                <Link
                    href="/#dvadeset-naslov"
                    className={`flex items-center gap-2.5 whitespace-nowrap text-teal-300 ${itemCls}`}
                >
                    <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-teal-400" />
                    20 godina sa vama
                    <span className="hidden text-teal-100/45 sm:inline">2006 — 2026</span>
                </Link>

                <div className="flex items-center gap-4 overflow-hidden whitespace-nowrap">
                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hidden lg:inline ${itemCls}`}
                    >
                        {settings.address}, {settings.city}
                    </a>
                    <span aria-hidden="true" className="hidden h-3 w-px bg-white/15 lg:inline-block" />
                    <Link href="/kontakt" className={`hidden md:inline ${itemCls}`}>
                        {settings.hoursWeekdays}
                    </Link>
                    <span aria-hidden="true" className="hidden h-3 w-px bg-white/15 md:inline-block" />
                    <a href={`mailto:${settings.email}`} className={`hidden xl:inline ${itemCls}`}>
                        {settings.email}
                    </a>
                    <span aria-hidden="true" className="hidden h-3 w-px bg-white/15 xl:inline-block" />
                    <SocialIcons networks={['facebook', 'instagram']} />
                </div>
            </div>
        </div>
    );
}
