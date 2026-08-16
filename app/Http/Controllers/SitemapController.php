<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Doctor;
use App\Models\NewsArticle;
use App\Models\Service;
use Illuminate\Http\Response;

class SitemapController extends Controller
{
    public function __invoke(): Response
    {
        $url = rtrim(config('app.url'), '/');

        $entries = [
            ['loc' => $url.'/', 'priority' => '1.0', 'changefreq' => 'weekly'],
            ['loc' => $url.'/o-nama', 'priority' => '0.7', 'changefreq' => 'monthly'],
            ['loc' => $url.'/kontakt', 'priority' => '0.8', 'changefreq' => 'monthly'],
            ['loc' => $url.'/cjenovnik', 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['loc' => $url.'/doktori', 'priority' => '0.8', 'changefreq' => 'weekly'],
            ['loc' => $url.'/novosti', 'priority' => '0.8', 'changefreq' => 'daily'],
        ];

        foreach (Department::active()->get() as $d) {
            $entries[] = ['loc' => $url.'/odjeljenja/'.$d->slug, 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => $d->updated_at?->toDateString()];
        }

        foreach (Service::active()->get() as $s) {
            $entries[] = ['loc' => $url.'/usluge/'.$s->slug, 'priority' => '0.9', 'changefreq' => 'weekly', 'lastmod' => $s->updated_at?->toDateString()];
        }

        foreach (Doctor::active()->get() as $d) {
            $entries[] = ['loc' => $url.'/doktori/'.$d->slug, 'priority' => '0.7', 'changefreq' => 'monthly', 'lastmod' => $d->updated_at?->toDateString()];
        }

        foreach (NewsArticle::published()->get() as $a) {
            $entries[] = ['loc' => $url.'/novosti/'.$a->slug, 'priority' => '0.6', 'changefreq' => 'monthly', 'lastmod' => $a->published_at?->toDateString()];
        }

        $xml = '<?xml version="1.0" encoding="UTF-8"?>'."\n";
        $xml .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'."\n";

        foreach ($entries as $entry) {
            $xml .= "  <url>\n";
            $xml .= '    <loc>'.e($entry['loc'])."</loc>\n";
            if (! empty($entry['lastmod'])) {
                $xml .= '    <lastmod>'.$entry['lastmod']."</lastmod>\n";
            }
            $xml .= '    <changefreq>'.$entry['changefreq']."</changefreq>\n";
            $xml .= '    <priority>'.$entry['priority']."</priority>\n";
            $xml .= "  </url>\n";
        }

        $xml .= '</urlset>';

        return response($xml, 200, ['Content-Type' => 'application/xml; charset=UTF-8']);
    }
}
