<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Doctor;
use App\Models\NewsArticle;
use App\Models\Service;
use App\Models\SiteSetting;
use App\Support\Seo;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $departments = Department::forHome()
            ->with(['services' => fn ($q) => $q->active()->orderBy('sort_order')])
            ->get()
            ->map(fn (Department $d) => [
                'name' => $d->name,
                'slug' => $d->slug,
                'shortDescription' => $d->short_description,
                'image' => $d->image_path,
                'services' => $d->services->map(fn (Service $s) => [
                    'name' => $s->name,
                    'slug' => $s->slug,
                ])->values(),
            ]);

        $services = Service::forHome()
            ->with('department:id,name,slug')
            ->get()
            ->map(fn (Service $s) => [
                'name' => $s->name,
                'slug' => $s->slug,
                'label' => $s->label,
                'summary' => $s->summary,
                'duration' => $s->duration,
                'department' => $s->department?->only(['name', 'slug']),
            ]);

        $doctors = Doctor::forHome()
            ->with(['department:id,name,slug', 'services' => fn ($q) => $q->active()->orderBy('sort_order')->limit(3)])
            ->get()
            ->map(fn (Doctor $d) => [
                'name' => $d->name,
                'slug' => $d->slug,
                'title' => $d->title,
                'specialty' => $d->specialty,
                'experience' => $d->experience,
                'photo' => $d->photo_path,
                'department' => $d->department?->only(['name', 'slug']),
                'services' => $d->services->map->only(['name', 'slug'])->values(),
            ]);

        $news = NewsArticle::forHome()
            ->with('category:id,name')
            ->limit(3)
            ->get()
            ->map(fn (NewsArticle $a) => [
                'title' => $a->title,
                'slug' => $a->slug,
                'excerpt' => $a->excerpt,
                'image' => $a->image_path,
                'category' => $a->category?->name,
                'isFeatured' => $a->is_featured,
                'publishedAt' => $a->published_at?->translatedFormat('d.m.Y.'),
                'publishedAtIso' => $a->published_at?->toDateString(),
            ]);

        $visits = $this->upcomingVisits();

        return Inertia::render('Home', [
            'departments' => $departments,
            'services' => $services,
            'doctors' => $doctors,
            'news' => $news,
            'specialistVisits' => $visits,
            'seo' => Seo::make(
                title: 'Specijalistički pregledi, ultrazvuk i dijagnostika u Doboju | ZU SC Dr Brkić',
                description: SiteSetting::val('meta_description', 'Radiologija i ultrazvuk, laboratorijske analize, porodična medicina, medicina rada i fizijatrija, stručna zdravstvena zaštita na jednom mjestu.'),
                path: '/',
                jsonLd: [Seo::clinic()],
            ),
        ]);
    }

    /** @return array<int, array<string, mixed>> */
    private function upcomingVisits(): array
    {
        return \App\Models\SpecialistVisit::upcoming()
            ->where('show_on_home', 1)
            ->with(['department:id,name,slug', 'news:id,slug,status'])
            ->limit(6)
            ->get()
            ->map(fn ($v) => $v->toFrontend())
            ->all();
    }
}
