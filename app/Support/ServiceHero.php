<?php

namespace App\Support;

class ServiceHero
{
    /**
     * Custom hero photographs stored in public/images/usluge/{slug}.*
     *
     * @return array<string, mixed>|null
     */
    public static function forSlug(string $slug): ?array
    {
        if (! in_array($slug, ['limfna-drenaza', 'hidzama-cupping-terapija', 'shockwave-terapija'], true)) {
            return null;
        }

        $base = '/images/usluge/'.$slug;

        return [
            'src' => $base.'.jpg',
            'webp' => $base.'.webp',
            'srcSet' => $base.'-768.jpg 768w, '.$base.'-1280.jpg 1280w, '.$base.'-1600.jpg 1600w',
            'webpSrcSet' => $base.'-768.webp 768w, '.$base.'-1280.webp 1280w, '.$base.'-1600.webp 1600w',
            'position' => 'object-right',
        ];
    }

    public static function ogUrl(string $slug): ?string
    {
        $hero = self::forSlug($slug);

        if (! $hero) {
            return null;
        }

        return rtrim((string) config('app.url'), '/').$hero['src'];
    }
}
