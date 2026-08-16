<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Support\ImagingPreparation;
use App\Support\LymphDrainage;
use App\Support\PriceListDocument;
use App\Support\Seo;
use App\Support\ServiceHero;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    public function show(string $slug): Response
    {
        $service = Service::active()
            ->where('slug', $slug)
            ->with('department:id,name,slug,image_path,gallery')
            ->firstOrFail();

        $related = Service::active()
            ->where('id', '!=', $service->id)
            ->where('department_id', $service->department_id)
            ->orderBy('sort_order')
            ->limit(3)
            ->get(['name', 'slug', 'summary', 'image_path']);

        if ($related->count() < 3) {
            $related = $related->concat(
                Service::active()
                    ->where('id', '!=', $service->id)
                    ->whereNotIn('id', $related->pluck('id'))
                    ->orderBy('sort_order')
                    ->limit(3 - $related->count())
                    ->get(['name', 'slug', 'summary', 'image_path'])
            );
        }

        $lymphDrainage = LymphDrainage::forService($service->slug);
        $hero = ServiceHero::forSlug($service->slug);
        $ogImage = ServiceHero::ogUrl($service->slug)
            ?? Seo::clinicImage($service->image_path ?: $service->department?->image_path);

        return Inertia::render('ServiceShow', [
            'service' => [
                'name' => $service->name,
                'slug' => $service->slug,
                'label' => $service->label,
                'subtitle' => $service->subtitle,
                'summary' => $service->summary,
                'description' => $service->description,
                'benefits' => $service->benefits ?? [],
                'preparation' => ImagingPreparation::forService($service->slug) ?? $service->preparation ?? [],
                'process' => $service->process ?? [],
                'duration' => $service->duration,
                'price' => $service->price,
                'faq' => $service->faq ?? [],
                'image' => $service->image_path ?: $service->department?->image_path,
                'gallery' => $service->department?->gallery ?? [],
                'department' => $service->department?->only(['name', 'slug']),
                'priceListHash' => PriceListDocument::hashFor($service->slug, $service->department?->slug),
                'hero' => $hero,
                'lymphDrainage' => $lymphDrainage,
            ],
            'relatedServices' => $related->map(fn ($s) => [
                'name' => $s->name,
                'slug' => $s->slug,
                'summary' => $s->summary,
                'image' => $s->image_path,
            ])->values(),
            'seo' => Seo::make(
                title: $service->seo_title ?? $service->name,
                description: $service->seo_description ?? $service->summary ?? '',
                path: '/usluge/'.$service->slug,
                ogTitle: $service->og_title,
                ogDescription: $service->og_description,
                ogImage: $ogImage,
                jsonLd: [
                    [
                        '@context' => 'https://schema.org',
                        '@type' => 'MedicalProcedure',
                        'name' => $service->name,
                        'description' => $service->summary,
                        'url' => rtrim(config('app.url'), '/').'/usluge/'.$service->slug,
                    ],
                    Seo::breadcrumbs([
                        ['name' => 'Početna', 'path' => '/'],
                        ['name' => 'Usluge', 'path' => '/#usluge'],
                        ['name' => $service->name, 'path' => '/usluge/'.$service->slug],
                    ]),
                ],
            ),
        ]);
    }
}
