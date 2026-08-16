import { Link, usePage } from '@inertiajs/react';
import Reveal from '@/components/Reveal';
import PhoneIcon from '@/components/PhoneIcon';
import type { SharedProps } from '@/types';
import { telHref } from '@/types';

export default function ConversionCta() {
    const { settings } = usePage<SharedProps>().props;

    return (
        <section aria-labelledby="cta-naslov" className="bg-teal-900 text-white">
            <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-10">
                <Reveal className="grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:py-20">
                    <div>
                        <h2 id="cta-naslov" className="font-display text-3xl font-bold tracking-[-0.015em] sm:text-4xl">
                            Vaše zdravlje ne treba čekati
                        </h2>
                        <p className="mt-4 max-w-md text-[1rem] leading-relaxed text-teal-100/80">
                            Zakažite pregled brzo i jednostavno. Naš tim je tu za vas.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 lg:items-end">
                        <a href={telHref(settings.phonePrimary)} className="group">
                            <span className="meta-label block text-teal-300">Pozovite nas</span>
                            <span className="mt-1 flex items-center gap-3 font-display text-3xl font-bold tabular-nums transition-colors group-hover:text-teal-300 sm:text-4xl">
                                <PhoneIcon className="size-6 shrink-0 text-teal-300 sm:size-7" />
                                {settings.phonePrimary}
                            </span>
                        </a>
                        <div className="mt-2 flex flex-wrap gap-3">
                            <Link
                                href="/kontakt"
                                className="rounded-[3px] bg-teal-600 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-teal-700"
                            >
                                Pošaljite upit
                            </Link>
                            <a
                                href={telHref(settings.phoneSecondary)}
                                className="rounded-[3px] border border-white/25 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:border-white/60"
                            >
                                {settings.phoneSecondary}
                            </a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
