import { Head } from '@inertiajs/react';
import type { SeoData } from '@/types';

export default function Seo({ seo }: { seo: SeoData }) {
    return (
        <Head title={seo.title}>
            <meta name="description" content={seo.description} />
            <link rel="canonical" href={seo.canonical} />
            <meta property="og:title" content={seo.ogTitle} />
            <meta property="og:description" content={seo.ogDescription} />
            <meta property="og:type" content={seo.ogType} />
            <meta property="og:url" content={seo.canonical} />
            <meta property="og:image" content={seo.ogImage} />
            <meta property="og:locale" content="bs_BA" />
            <meta name="twitter:card" content="summary_large_image" />
            {seo.jsonLd.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </Head>
    );
}
