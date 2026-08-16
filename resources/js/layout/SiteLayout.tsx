import type { ReactNode } from 'react';
import TopBar from '@/layout/TopBar';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import MobileContactBar from '@/layout/MobileContactBar';
import Seo from '@/components/Seo';
import type { SeoData } from '@/types';

export default function SiteLayout({ seo, children }: { seo: SeoData; children: ReactNode }) {
    return (
        <>
            <Seo seo={seo} />
            <TopBar />
            <Header />
            <main id="sadrzaj">{children}</main>
            <Footer />
            <MobileContactBar />
        </>
    );
}
