<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\SpecialistVisit;
use App\Support\ConsultingSpecialists;
use App\Support\ImagingPreparation;
use App\Support\Seo;
use Inertia\Inertia;
use Inertia\Response;

class DepartmentController extends Controller
{
    public function show(string $slug): Response
    {
        $department = Department::active()
            ->where('slug', $slug)
            ->with([
                'services' => fn ($q) => $q->active()->orderBy('sort_order'),
                'doctors' => fn ($q) => $q->active()->orderBy('sort_order'),
            ])
            ->firstOrFail();

        $others = Department::active()
            ->where('id', '!=', $department->id)
            ->orderBy('sort_order')
            ->limit(3)
            ->get(['name', 'slug', 'short_description', 'image_path']);

        return Inertia::render('DepartmentShow', [
            'department' => [
                'name' => $department->name,
                'slug' => $department->slug,
                'pageTitle' => $department->page_title,
                'shortDescription' => $department->short_description,
                'description' => $department->description,
                'equipment' => $department->equipment ?? [],
                'indications' => $department->indications ?? [],
                'faq' => $department->faq ?? [],
                'preparation' => ImagingPreparation::forDepartment($department->slug),
                'image' => $department->image_path,
                'gallery' => $department->gallery ?? [],
                'services' => $department->services->map->only(['name', 'slug', 'summary', 'label'])->values(),
                'doctors' => $department->doctors->map->only(['name', 'slug', 'title'])->values(),
                'consultants' => ConsultingSpecialists::forDepartment($department->slug),
                'upcomingVisits' => $department->slug === 'specijalisticki-pregledi'
                    ? SpecialistVisit::upcoming()
                        ->where('department_id', $department->id)
                        ->with(['department:id,name,slug', 'news:id,slug,status'])
                        ->limit(6)
                        ->get()
                        ->map(fn ($visit) => $visit->toFrontend())
                        ->values()
                    : [],
            ],
            'otherDepartments' => $others->map(fn ($d) => [
                'name' => $d->name,
                'slug' => $d->slug,
                'shortDescription' => $d->short_description,
                'image' => $d->image_path,
            ]),
            'seo' => Seo::make(
                title: $department->seo_title ?? $department->page_title ?? $department->name,
                description: $department->seo_description ?? $department->short_description ?? '',
                path: '/odjeljenja/'.$department->slug,
                ogTitle: $department->og_title,
                ogDescription: $department->og_description,
                ogImage: Seo::clinicImage($department->image_path),
                jsonLd: [
                    Seo::breadcrumbs([
                        ['name' => 'Početna', 'path' => '/'],
                        ['name' => 'Odjeljenja', 'path' => '/#odjeljenja'],
                        ['name' => $department->name, 'path' => '/odjeljenja/'.$department->slug],
                    ]),
                ],
            ),
        ]);
    }
}
