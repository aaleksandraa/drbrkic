import { Link, usePage } from '@inertiajs/react';
import SiteLayout from '@/layout/SiteLayout';
import PageHero from '@/components/PageHero';
import PriceListExplorer from '@/components/PriceListExplorer';
import type { PriceGroup, SeoData, SharedProps } from '@/types';
import { telHref } from '@/types';

interface PriceListProps {
    groups: PriceGroup[];
    updatedAt: string | null;
    seo: SeoData;
}

export default function PriceList({ groups, updatedAt, seo }: PriceListProps) {
    const { settings } = usePage<SharedProps>().props;

    return (
        <SiteLayout seo={seo}>
            <PageHero
                label="Cjenovnik"
                title="Cjenovnik medicinskih usluga"
                intro="Pretražite cijene po usluzi ili otvorite odjeljenje. Cijene su izražene u konvertibilnim markama (KM)."
                image="natpis"
                crumbs={[{ label: 'Početna', href: '/' }, { label: 'Cjenovnik' }]}
            >
                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                    <a href={telHref(settings.phonePrimary)} className="rounded-[3px] bg-teal-600 px-6 py-3 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-teal-700">
                        Provjerite termin
                    </a>
                    <Link href="/kontakt" className="rounded-[3px] border border-ink/20 px-6 py-3 text-[0.9375rem] font-semibold text-ink transition-colors hover:border-teal-600 hover:text-teal-700">
                        Pošaljite upit
                    </Link>
                    {updatedAt && <p className="meta-label text-ink-faint">Ažurirano: {updatedAt}</p>}
                </div>
            </PageHero>

            <div className="mx-auto max-w-[1360px] px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
                <PriceListExplorer groups={groups} />
                <p className="mt-10 border-t border-ink/12 pt-6 text-[0.9rem] leading-relaxed text-ink-soft">
                    Za laboratorijske analize i specifične procedure kontaktirajte ustanovu na{' '}
                    <a href={telHref(settings.phonePrimary)} className="font-semibold text-teal-700 hover:text-teal-900">
                        {settings.phonePrimary}
                    </a>.
                </p>
            </div>
        </SiteLayout>
    );
}
