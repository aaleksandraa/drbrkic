import { Head } from '@inertiajs/react';
import SiteLayout from '@/layout/SiteLayout';
import VersionBanner from '@/components/home-v2/VersionBanner';
import HeroV2 from '@/components/home-v2/HeroV2';
import QuickAccessV2 from '@/components/home-v2/QuickAccessV2';
import VisitsAndStatsV2 from '@/components/home-v2/VisitsAndStatsV2';
import DepartmentsV2 from '@/components/home-v2/DepartmentsV2';
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
            <VersionBanner />
            <HeroV2 departments={departments} />
            <QuickAccessV2 departments={departments} />
            <VisitsAndStatsV2 visits={specialistVisits} />
            <DepartmentsV2 departments={departments} />
            <DoctorsV2 doctors={doctors} />
            <NewsV2 news={news} />
            <ContactPreviewV2 />
        </SiteLayout>
    );
}
