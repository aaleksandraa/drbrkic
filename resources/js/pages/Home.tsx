import SiteLayout from '@/layout/SiteLayout';
import Hero from '@/components/home/Hero';
import PatientIntent from '@/components/home/PatientIntent';
import SpecialistSchedule from '@/components/home/SpecialistSchedule';
import DepartmentIndex from '@/components/home/DepartmentIndex';
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

interface HomeProps {
    departments: HomeDepartment[];
    services: HomeService[];
    doctors: HomeDoctor[];
    news: HomeNewsArticle[];
    specialistVisits: SpecialistVisitItem[];
    seo: SeoData;
}

export default function Home({ departments, services, doctors, news, specialistVisits, seo }: HomeProps) {
    return (
        <SiteLayout seo={seo}>
            <Hero visits={specialistVisits} news={news} />
            <PatientIntent />
            <SpecialistSchedule visits={specialistVisits} />
            <DepartmentIndex departments={departments} />
            <ServiceIndex services={services} />
            <AnniversaryStory />
            <DoctorsEditorial doctors={doctors} />
            <WhyUs />
            <NewsEditorial news={news} />
            <ConversionCta />
            <LocationPreview />
        </SiteLayout>
    );
}
