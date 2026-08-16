<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Doctor;
use App\Support\Seo;
use Inertia\Inertia;
use Inertia\Response;

class DoctorController extends Controller
{
    public function index(): Response
    {
        $doctors = Doctor::active()
            ->orderBy('sort_order')
            ->with(['department:id,name,slug', 'services' => fn ($q) => $q->active()->limit(3)])
            ->get()
            ->map(fn (Doctor $d) => [
                'name' => $d->name,
                'slug' => $d->slug,
                'title' => $d->title,
                'specialty' => $d->specialty,
                'experience' => $d->experience,
                'shortBio' => $d->short_bio,
                'photo' => $d->photo_path,
                'department' => $d->department?->only(['name', 'slug']),
                'services' => $d->services->map->only(['name', 'slug'])->values(),
            ]);

        $departments = Department::active()
            ->whereHas('doctors', fn ($q) => $q->where('is_active', 1))
            ->orderBy('sort_order')
            ->get(['name', 'slug']);

        return Inertia::render('DoctorIndex', [
            'doctors' => $doctors,
            'departments' => $departments,
            'seo' => Seo::make(
                title: 'Doktori i specijalisti ZU SC Dr Brkić Doboj',
                description: 'Pregledajte medicinski tim ZU SC Dr Brkić po odjeljenjima, specijalnostima i uslugama.',
                path: '/doktori',
                jsonLd: [
                    [
                        '@context' => 'https://schema.org',
                        '@type' => 'ItemList',
                        'itemListElement' => $doctors->values()->map(fn ($d, $i) => [
                            '@type' => 'ListItem',
                            'position' => $i + 1,
                            'url' => rtrim(config('app.url'), '/').'/doktori/'.$d['slug'],
                        ])->all(),
                    ],
                ],
            ),
        ]);
    }

    public function show(string $slug): Response
    {
        $doctor = Doctor::active()
            ->where('slug', $slug)
            ->with(['department:id,name,slug,image_path', 'services' => fn ($q) => $q->active()->orderBy('sort_order')])
            ->firstOrFail();

        $others = Doctor::active()
            ->where('id', '!=', $doctor->id)
            ->orderBy('sort_order')
            ->limit(3)
            ->get(['name', 'slug', 'title', 'photo_path']);

        return Inertia::render('DoctorShow', [
            'doctor' => [
                'name' => $doctor->name,
                'slug' => $doctor->slug,
                'title' => $doctor->title,
                'specialty' => $doctor->specialty,
                'experience' => $doctor->experience,
                'bio' => $doctor->bio,
                'education' => $doctor->education,
                'specializations' => $doctor->specializations,
                'photo' => $doctor->photo_path,
                'department' => $doctor->department?->only(['name', 'slug']),
                'services' => $doctor->services->map->only(['name', 'slug'])->values(),
            ],
            'otherDoctors' => $others->map(fn ($d) => [
                'name' => $d->name,
                'slug' => $d->slug,
                'title' => $d->title,
                'photo' => $d->photo_path,
            ]),
            'seo' => Seo::make(
                title: $doctor->seo_title ?? $doctor->name,
                description: $doctor->seo_description ?? $doctor->short_bio ?? '',
                path: '/doktori/'.$doctor->slug,
                ogImage: $doctor->photo_path
                    ? rtrim((string) config('app.url'), '/').$doctor->photo_path
                    : Seo::clinicImage($doctor->department?->image_path),
                jsonLd: [
                    [
                        '@context' => 'https://schema.org',
                        '@type' => 'Physician',
                        'name' => $doctor->name,
                        'medicalSpecialty' => $doctor->specialty,
                        'url' => rtrim(config('app.url'), '/').'/doktori/'.$doctor->slug,
                        'worksFor' => [
                            '@type' => 'MedicalClinic',
                            'name' => 'ZU SC Dr Brkić',
                        ],
                    ],
                    Seo::breadcrumbs([
                        ['name' => 'Početna', 'path' => '/'],
                        ['name' => 'Doktori', 'path' => '/doktori'],
                        ['name' => $doctor->name, 'path' => '/doktori/'.$doctor->slug],
                    ]),
                ],
            ),
        ]);
    }
}
