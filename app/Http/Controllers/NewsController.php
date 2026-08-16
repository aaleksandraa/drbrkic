<?php

namespace App\Http\Controllers;

use App\Models\NewsArticle;
use App\Models\NewsCategory;
use App\Models\SpecialistVisit;
use App\Support\PriceListDocument;
use App\Support\Seo;
use Inertia\Inertia;
use Inertia\Response;

class NewsController extends Controller
{
    public function index(): Response
    {
        $articles = NewsArticle::published()
            ->orderByDesc('published_at')
            ->with(['category:id,name,slug', 'department:id,name,slug'])
            ->paginate(12)
            ->through(fn (NewsArticle $a) => [
                'title' => $a->title,
                'slug' => $a->slug,
                'excerpt' => $a->excerpt,
                'image' => $a->image_path,
                'category' => $a->category?->only(['name', 'slug']),
                'department' => $a->department?->only(['name', 'slug']),
                'publishedAt' => $a->published_at?->translatedFormat('d.m.Y.'),
            ]);

        $visits = SpecialistVisit::upcoming()
            ->with(['department:id,name,slug', 'news:id,slug,status'])
            ->limit(6)
            ->get()
            ->map(fn ($v) => $v->toFrontend());

        return Inertia::render('NewsIndex', [
            'articles' => $articles,
            'categories' => NewsCategory::active()->get(['name', 'slug']),
            'specialistVisits' => $visits,
            'seo' => Seo::make(
                title: 'Novosti i obavještenja',
                description: 'Pratite najnovije informacije iz ZU SC Dr Brkić — nove usluge, dolaske specijalista, akcije i obavještenja.',
                path: '/novosti',
            ),
        ]);
    }

    public function show(string $slug): Response
    {
        $article = NewsArticle::published()
            ->where('slug', $slug)
            ->with(['category:id,name,slug', 'department:id,name,slug'])
            ->firstOrFail();

        $visit = $article->specialistVisits()
            ->with('department:id,name,slug')
            ->orderByDesc('visit_date')
            ->first();

        $priceSection = $visit ? PriceListDocument::sectionForSpecialty($visit->specialty) : null;

        $related = NewsArticle::published()
            ->where('id', '!=', $article->id)
            ->orderByDesc('published_at')
            ->limit(3)
            ->with('category:id,name')
            ->get()
            ->map(fn ($a) => [
                'title' => $a->title,
                'slug' => $a->slug,
                'excerpt' => $a->excerpt,
                'category' => $a->category?->name,
                'image' => $a->image_path,
                'publishedAt' => $a->published_at?->translatedFormat('d.m.Y.'),
            ]);

        $words = str_word_count(strip_tags($article->body ?? ''));

        return Inertia::render('NewsShow', [
            'article' => [
                'title' => $article->title,
                'slug' => $article->slug,
                'excerpt' => $article->excerpt,
                'body' => $article->body,
                'category' => $article->category?->only(['name', 'slug']),
                'department' => $article->department?->only(['name', 'slug']),
                'publishedAt' => $article->published_at?->translatedFormat('d.m.Y.'),
                'publishedAtIso' => $article->published_at?->toIso8601String(),
                'readingMinutes' => max(1, (int) ceil($words / 200)),
                'image' => $article->image_path,
            ],
            'visit' => $visit ? [
                'doctorName' => $visit->doctor_name ?? $visit->doctor?->name,
                'specialty' => $visit->specialty,
                'dateLabel' => $visit->visit_date->translatedFormat('d. F Y.'),
                'dateIso' => $visit->visit_date->toDateString(),
                'startTime' => $visit->start_time ? substr((string) $visit->start_time, 0, 5) : null,
                'endTime' => $visit->end_time ? substr((string) $visit->end_time, 0, 5) : null,
                'note' => $visit->note,
                'department' => $visit->department?->only(['name', 'slug']),
                'services' => $priceSection['items'] ?? [],
                'priceListHref' => $priceSection ? '/cjenovnik#'.$priceSection['id'] : '/cjenovnik',
                'priceListTitle' => $priceSection['title'] ?? null,
            ] : null,
            'relatedArticles' => $related,
            'seo' => Seo::make(
                title: $article->seo_title ?? $article->title,
                description: $article->seo_description ?? $article->excerpt ?? '',
                path: '/novosti/'.$article->slug,
                ogType: 'article',
                ogImage: Seo::clinicImage($article->image_path),
                jsonLd: [
                    [
                        '@context' => 'https://schema.org',
                        '@type' => 'NewsArticle',
                        'headline' => $article->title,
                        'description' => $article->excerpt,
                        'datePublished' => $article->published_at?->toIso8601String(),
                        'author' => ['@type' => 'Organization', 'name' => 'ZU SC Dr Brkić'],
                        'publisher' => ['@type' => 'Organization', 'name' => 'ZU SC Dr Brkić'],
                        'mainEntityOfPage' => rtrim(config('app.url'), '/').'/novosti/'.$article->slug,
                    ],
                ],
            ),
        ]);
    }
}
