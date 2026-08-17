import { Head, Link } from '@inertiajs/react';
import SiteLayout from '@/layout/SiteLayout';
import HeroV2 from '@/components/home-v2/HeroV2';
import VisitsAndStatsV2 from '@/components/home-v2/VisitsAndStatsV2';
import DepartmentsV2 from '@/components/home-v2/DepartmentsV2';
import PatientIntent from '@/components/home/PatientIntent';
import ServiceIndex from '@/components/home/ServiceIndex';
import AnniversaryStory from '@/components/home/AnniversaryStory';
import DoctorsEditorial from '@/components/home/DoctorsEditorial';
import WhyUs from '@/components/home/WhyUs';
import NewsEditorial from '@/components/home/NewsEditorial';
import ConversionCta from '@/components/home/ConversionCta';
import LocationPreview from '@/components/home/LocationPreview';
import type {
    HomeDepartment,
    HomeDoctor,
    HomeNewsArticle,
    HomeService,
    SeoData,
    SpecialistVisitItem,
} from '@/types';

interface HomeV2Props {
    departments: HomeDepartment[];
    services: HomeService[];
    doctors: HomeDoctor[];
    news: HomeNewsArticle[];
    specialistVisits: SpecialistVisitItem[];
    seo: SeoData;
}

export default function HomeV2({
    departments,
    services,
    doctors,
    news,
    specialistVisits,
    seo,
}: HomeV2Props) {
    return (
        <SiteLayout seo={seo}>
            <Head>
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <HeroV2 />
            <VisitsAndStatsV2 visits={specialistVisits} />
            <DepartmentsV2 departments={departments} />
            <PatientIntent />
            <ServiceIndex services={services} />
            <AnniversaryStory />
            <DoctorsEditorial doctors={doctors} />
            <WhyUs />
            <NewsEditorial news={news} />
            <ConversionCta />
            <LocationPreview />
            <p className="border-t border-ink/8 bg-mineral px-4 py-2.5 text-center text-[0.78rem] text-ink-faint">
                Prijedlog početne (v2) ·{' '}
                <Link href="/" className="font-semibold text-teal-700 hover:text-teal-900">
                    trenutna verzija
                </Link>
            </p>
        </SiteLayout>
    );
}
