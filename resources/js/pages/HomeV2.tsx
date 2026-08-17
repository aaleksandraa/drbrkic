import { Head, Link } from '@inertiajs/react';
import SiteLayout from '@/layout/SiteLayout';
import HeroV2 from '@/components/home-v2/HeroV2';
import QuickAccessV2 from '@/components/home-v2/QuickAccessV2';
import DepartmentsV2 from '@/components/home-v2/DepartmentsV2';
import VisitsAndStatsV2 from '@/components/home-v2/VisitsAndStatsV2';
import DoctorsV2 from '@/components/home-v2/DoctorsV2';
import NewsV2 from '@/components/home-v2/NewsV2';
import ContactPreviewV2 from '@/components/home-v2/ContactPreviewV2';
import type {
    HomeDepartment,
    HomeDoctor,
    HomeNewsArticle,
    SeoData,
    SpecialistVisitItem,
} from '@/types';

interface HomeV2Props {
    departments: HomeDepartment[];
    doctors: HomeDoctor[];
    news: HomeNewsArticle[];
    specialistVisits: SpecialistVisitItem[];
    seo: SeoData;
}

export default function HomeV2({ departments, doctors, news, specialistVisits, seo }: HomeV2Props) {
    return (
        <SiteLayout seo={seo}>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <HeroV2 />
            <QuickAccessV2 departments={departments} />
            <DepartmentsV2 departments={departments} />
            <VisitsAndStatsV2 visits={specialistVisits} />
            <DoctorsV2 doctors={doctors} />
            <NewsV2 news={news} />
            <ContactPreviewV2 />
            <p className="border-t border-ink/8 bg-mineral px-4 py-2.5 text-center text-[0.78rem] text-ink-faint">
                Prijedlog početne (v2) ·{' '}
                <Link href="/" className="font-semibold text-teal-700 hover:text-teal-900">
                    trenutna verzija
                </Link>
            </p>
        </SiteLayout>
    );
}
