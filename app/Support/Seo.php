<?php

namespace App\Support;

use App\Models\SiteSetting;

class Seo
{
    /**
     * Compose the SEO prop passed to Inertia pages.
     *
     * @param  array<int, array<string, mixed>>  $jsonLd
     * @return array<string, mixed>
     */
    public static function make(
        string $title,
        string $description,
        string $path = '/',
        ?string $ogTitle = null,
        ?string $ogDescription = null,
        string $ogType = 'website',
        ?string $ogImage = null,
        array $jsonLd = [],
    ): array {
        $suffix = SiteSetting::val('seo_suffix', ' | ZU SC Dr Brkić Doboj');
        $url = rtrim(config('app.url'), '/');

        return [
            'title' => str_contains($title, 'Dr Brkić') ? $title : $title.$suffix,
            'description' => $description,
            'canonical' => $url.($path === '/' ? '/' : '/'.ltrim($path, '/')),
            'ogTitle' => $ogTitle ?? $title,
            'ogDescription' => $ogDescription ?? $description,
            'ogType' => $ogType,
            'ogImage' => $ogImage ?? self::clinicImage(),
            'jsonLd' => $jsonLd,
        ];
    }

    /** Absolute URL of a named architectural crop, or a site-relative image path. */
    public static function clinicImage(?string $crop = 'fasada'): string
    {
        $url = rtrim(config('app.url'), '/');

        if (is_string($crop) && str_starts_with($crop, '/')) {
            return $url.$crop;
        }

        $files = [
            'fasada' => '/images/dr-brkic-doboj.png',
            'ulaz' => '/images/klinika/ulaz-1200.jpg',
            'mreza' => '/images/klinika/mreza-1200.jpg',
            'krilo' => '/images/klinika/krilo-1200.jpg',
            'nebo' => '/images/klinika/nebo-1200.jpg',
            'detalj' => '/images/klinika/detalj-1200.jpg',
            'natpis' => '/images/klinika/natpis-1200.jpg',
        ];

        return $url.($files[$crop] ?? $files['fasada']);
    }

    /**
     * Base MedicalClinic organization schema built from real site settings.
     *
     * @return array<string, mixed>
     */
    public static function clinic(): array
    {
        $url = rtrim(config('app.url'), '/');

        return [
            '@context' => 'https://schema.org',
            '@type' => 'MedicalClinic',
            'name' => SiteSetting::val('site_name', 'ZU SC Dr Brkić'),
            'url' => $url.'/',
            'logo' => $url.'/images/logo-dr-brkic.png',
            'image' => $url.'/images/dr-brkic-doboj.png',
            'telephone' => SiteSetting::val('phone_primary', '053 961 777'),
            'email' => SiteSetting::val('email', 'info@drbrkic.ba'),
            'address' => [
                '@type' => 'PostalAddress',
                'streetAddress' => SiteSetting::val('address', 'Bukovica Mala bb'),
                'addressLocality' => 'Doboj',
                'postalCode' => '74000',
                'addressCountry' => 'BA',
            ],
            'openingHoursSpecification' => [
                [
                    '@type' => 'OpeningHoursSpecification',
                    'dayOfWeek' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    'opens' => '07:00',
                    'closes' => '20:00',
                ],
                [
                    '@type' => 'OpeningHoursSpecification',
                    'dayOfWeek' => ['Saturday'],
                    'opens' => '08:00',
                    'closes' => '14:00',
                ],
            ],
            'sameAs' => array_values(array_filter([
                SiteSetting::val('facebook', 'https://www.facebook.com/p/Zdravstvena-ustanova-DR-BRKI%C4%86-Doboj-100086745097635/'),
                SiteSetting::val('instagram', 'https://www.instagram.com/drbrkic/'),
                SiteSetting::val('linkedin', 'https://www.linkedin.com/company/dr-brkic'),
            ])),
            'foundingDate' => '2006',
            'medicalSpecialty' => [
                'Radiography',
                'PrimaryCare',
                'OccupationalTherapy',
                'PhysicalTherapy',
                'LaboratoryScience',
            ],
        ];
    }

    /**
     * Breadcrumb JSON-LD.
     *
     * @param  array<int, array{name: string, path: string}>  $items
     * @return array<string, mixed>
     */
    public static function breadcrumbs(array $items): array
    {
        $url = rtrim(config('app.url'), '/');

        return [
            '@context' => 'https://schema.org',
            '@type' => 'BreadcrumbList',
            'itemListElement' => collect($items)->values()->map(fn ($item, $i) => [
                '@type' => 'ListItem',
                'position' => $i + 1,
                'name' => $item['name'],
                'item' => $url.($item['path'] === '/' ? '/' : '/'.ltrim($item['path'], '/')),
            ])->all(),
        ];
    }
}
