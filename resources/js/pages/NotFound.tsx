import { Link } from '@inertiajs/react';
import SiteLayout from '@/layout/SiteLayout';
import type { SeoData } from '@/types';

export default function NotFound({ seo }: { seo: SeoData }) {
    return (
        <SiteLayout seo={seo}>
            <section className="plan-grid flex min-h-[55vh] items-center bg-paper">
                <div className="mx-auto max-w-[1360px] px-4 py-20 sm:px-6 lg:px-10">
                    <p
                        aria-hidden="true"
                        className="font-display text-[7rem] font-bold leading-none tracking-[-0.04em] text-transparent sm:text-[10rem]"
                        style={{ WebkitTextStroke: '1.5px rgba(35,188,166,0.6)' }}
                    >
                        404
                    </p>
                    <h1 className="mt-4 font-display text-3xl font-bold text-ink">Ups! Stranica nije pronađena</h1>
                    <p className="mt-3 max-w-md text-ink-soft">
                        Stranica koju tražite ne postoji ili je premještena.
                    </p>
                    <Link
                        href="/"
                        className="mt-8 inline-block rounded-[3px] bg-teal-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-700"
                    >
                        Povratak na početnu
                    </Link>
                </div>
            </section>
        </SiteLayout>
    );
}
