<?php

namespace App\Support;

use App\Models\Department;
use App\Models\Service;
use Illuminate\Support\Str;

class PriceListDocument
{
    /** Markdown section title → department slug. */
    private const SECTION_DEPARTMENT = [
        'CT' => 'radiologija',
        'Ultrazvuk' => 'radiologija',
        'RTG i mamografija' => 'radiologija',
        'Magnetna rezonanca' => 'radiologija',
        'Specijalistički pregledi' => 'specijalisticki-pregledi',
        'Kardiologija' => 'specijalisticki-pregledi',
        'Ginekologija' => 'specijalisticki-pregledi',
        'Neurološka dijagnostika' => 'specijalisticki-pregledi',
        'Endoskopija' => 'specijalisticki-pregledi',
        'Fizikalna medicina i rehabilitacija' => 'fizijatrija',
        'DEXA' => 'fizijatrija',
        'Ambulantne i sestrinske usluge' => 'porodicna-medicina',
        'Ostale usluge' => 'ostale-usluge',
    ];

    /** Individual rows that belong to a different department than their markdown section. */
    private const ITEM_DEPARTMENT = [
        'Ljekarsko uvjerenje' => 'medicina-rada',
        'Laboratorijske analize' => 'laboratorija',
    ];

    /** Price-list row name → service page slug when the names differ. */
    private const ITEM_SERVICE = [
        'Ljekarsko uvjerenje' => 'medicina-rada',
        'Laboratorijske analize' => 'laboratorijske-analize',
        'Pregled fizijatra' => 'pregled-fizijatra',
        'Laser terapija' => 'laseroterapija',
        'Masaža' => 'medicinska-relax-masaza',
        'Trakcija kičmenog stuba' => 'dekompresiona-terapija-kicme',
        'Fizikalni paket' => 'fizikalna-terapija',
        'Ginekološki ultrazvuk' => 'ultrazvuk',
        'Ginekološki pregled i ultrazvuk' => 'ultrazvuk',
        'Pregled štitne žlijezde sa ultrazvukom' => 'ultrazvuk',
        'UZ srca' => 'ultrazvuk',
        'Nativni snimak abdomena' => 'rtg-i-mamografija',
        'Nativni snimak urotrakta' => 'rtg-i-mamografija',
        'Ciljani snimci' => 'rtg-i-mamografija',
        'Mamografija' => 'rtg-i-mamografija',
        'Ortopan' => 'rtg-i-mamografija',
        'Intravenska urografija' => 'rtg-i-mamografija',
        'Limfna drenaža' => 'limfna-drenaza',
    ];

    /**
     * Leading token of a price-list row → service page slug.
     * Longer prefixes must come first (MRCP before MR).
     *
     * @var array<string, string>
     */
    private const ITEM_PREFIX_SERVICE = [
        'Kolor dopler' => 'ultrazvuk',
        'MRCP' => 'magnetna-rezonanca',
        'DEXA' => 'dexa',
        'CT' => 'ct-dijagnostika',
        'MR' => 'magnetna-rezonanca',
        'RTG' => 'rtg-i-mamografija',
        'UZ' => 'ultrazvuk',
    ];

    /** @var array{byName: array<string, string>, bySlug: array<string, true>, byNameLength: array<string, string>}|null */
    private static ?array $serviceIndex = null;

    /** Service page slug → cjenovnik hash (section or department). */
    private const SERVICE_HASH = [
        'magnetna-rezonanca' => 'magnetna-rezonanca',
        'ct-dijagnostika' => 'ct',
        'rtg-i-mamografija' => 'rtg-i-mamografija',
        'ultrazvuk' => 'ultrazvuk',
        'laboratorijske-analize' => 'laboratorija',
        'medicina-rada' => 'medicina-rada',
        'pregled-fizijatra' => 'specijalisticki-pregledi',
        'dekompresiona-terapija-kicme' => 'fizikalna-medicina-i-rehabilitacija',
        'dexa' => 'dexa',
        'fizikalna-terapija' => 'fizikalna-medicina-i-rehabilitacija',
        'laseroterapija' => 'fizikalna-medicina-i-rehabilitacija',
        'ultrazvucna-terapija' => 'fizikalna-medicina-i-rehabilitacija',
        'horizontalna-terapija' => 'fizikalna-medicina-i-rehabilitacija',
        'shockwave-terapija' => 'fizikalna-medicina-i-rehabilitacija',
        'medicinska-relax-masaza' => 'fizikalna-medicina-i-rehabilitacija',
        'hidzama-cupping-terapija' => 'fizijatrija',
        'limfna-drenaza' => 'fizikalna-medicina-i-rehabilitacija',
        'sistematski-pregledi' => 'porodicna-medicina',
    ];

    /**
     * @return array{groups: list<array<string, mixed>>, updatedAt: string|null}
     */
    public static function payload(): array
    {
        $path = public_path('dokumenti/cjenovnik.md');
        $markdown = is_file($path) ? (string) file_get_contents($path) : '';
        $updatedAt = is_file($path) ? date('d.m.Y.', filemtime($path)) : null;

        return [
            'groups' => self::groups($markdown),
            'updatedAt' => $updatedAt,
        ];
    }

    /** Specialty label from a visit → cjenovnik section title. */
    private const SPECIALTY_SECTION = [
        'Ginekolog' => 'Ginekologija',
        'Kardiolog' => 'Kardiologija',
    ];

    /**
     * Official price-list rows for a visiting specialist's field.
     *
     * @return array{id: string, title: string, items: list<array{name: string, price: string, href: string|null}>}|null
     */
    public static function sectionForSpecialty(?string $specialty): ?array
    {
        $title = self::SPECIALTY_SECTION[$specialty ?? ''] ?? null;
        if (! $title) {
            return null;
        }

        $path = public_path('dokumenti/cjenovnik.md');
        $markdown = is_file($path) ? (string) file_get_contents($path) : '';

        foreach (self::parseSections($markdown) as $section) {
            if ($section['title'] === $title) {
                return [
                    'id' => $section['id'],
                    'title' => $section['title'],
                    'items' => $section['items'],
                ];
            }
        }

        return null;
    }

    public static function hashFor(?string $serviceSlug, ?string $departmentSlug): string
    {
        if ($serviceSlug && isset(self::SERVICE_HASH[$serviceSlug])) {
            return self::SERVICE_HASH[$serviceSlug];
        }

        return $departmentSlug ?: '';
    }

    /**
     * @return list<array{id: string, title: string, departmentSlug: string|null, sections: list<array{id: string, title: string, items: list<array{name: string, price: string, href: string|null}>}>}>
     */
    public static function groups(string $markdown): array
    {
        $sections = self::parseSections($markdown);
        $departments = Department::query()
            ->active()
            ->orderBy('sort_order')
            ->get(['name', 'slug']);

        $byDept = [];
        foreach ($sections as $section) {
            $slug = $section['departmentSlug'] ?? 'ostale-usluge';
            $byDept[$slug][] = $section;
        }

        $groups = [];
        foreach ($departments as $department) {
            if (empty($byDept[$department->slug])) {
                continue;
            }
            $groups[] = [
                'id' => $department->slug,
                'title' => $department->name,
                'departmentSlug' => $department->slug,
                'sections' => $byDept[$department->slug],
            ];
            unset($byDept[$department->slug]);
        }

        foreach ($byDept as $slug => $leftover) {
            $groups[] = [
                'id' => $slug,
                'title' => $leftover[0]['title'] ?? 'Ostale usluge',
                'departmentSlug' => null,
                'sections' => $leftover,
            ];
        }

        return $groups;
    }

    /**
     * @return list<array{id: string, title: string, departmentSlug: string, items: list<array{name: string, price: string, href: string|null}>}>
     */
    private static function parseSections(string $markdown): array
    {
        $sections = [];
        $current = null;

        foreach (preg_split("/\R/", $markdown) as $line) {
            if (preg_match('/^##\s+(.+)/u', $line, $match)) {
                if ($current !== null) {
                    $sections[] = $current;
                }
                $title = trim($match[1]);
                $current = [
                    'id' => Str::slug($title),
                    'title' => $title,
                    'departmentSlug' => self::SECTION_DEPARTMENT[$title] ?? 'ostale-usluge',
                    'items' => [],
                ];
                continue;
            }

            if ($current === null || ! preg_match('/^\|\s*(.+?)\s*\|\s*(.+?)\s*\|?\s*$/u', $line, $match)) {
                continue;
            }

            $name = trim($match[1]);
            $price = trim($match[2]);
            $nameCompact = str_replace(' ', '', $name);

            if ($name === 'Usluga' || $price === 'Cijena' || preg_match('/^:?-+:?$/', $nameCompact)) {
                continue;
            }

            $current['items'][] = [
                'name' => $name,
                'price' => $price,
                'href' => self::serviceHrefFor($name),
            ];
        }

        if ($current !== null) {
            $sections[] = $current;
        }

        return self::reassignItems($sections);
    }

    /**
     * @param  list<array{id: string, title: string, departmentSlug: string, items: list<array{name: string, price: string, href: string|null}>}>  $sections
     * @return list<array{id: string, title: string, departmentSlug: string, items: list<array{name: string, price: string, href: string|null}>}>
     */
    private static function reassignItems(array $sections): array
    {
        $moved = [];
        $kept = [];

        foreach ($sections as $section) {
            $remaining = [];
            foreach ($section['items'] as $item) {
                $target = self::ITEM_DEPARTMENT[$item['name']] ?? null;
                if ($target) {
                    $moved[$target][] = $item;
                } else {
                    $remaining[] = $item;
                }
            }
            if ($remaining !== []) {
                $section['items'] = $remaining;
                $kept[] = $section;
            }
        }

        foreach ($moved as $departmentSlug => $items) {
            $kept[] = [
                'id' => $departmentSlug,
                'title' => $items[0]['name'],
                'departmentSlug' => $departmentSlug,
                'items' => $items,
            ];
        }

        return $kept;
    }

    private static function serviceHrefFor(string $name): ?string
    {
        $index = self::serviceIndex();
        if ($index['bySlug'] === []) {
            return null;
        }

        if (isset(self::ITEM_SERVICE[$name])) {
            return self::hrefIfActive(self::ITEM_SERVICE[$name], $index);
        }

        $normalized = self::normalizeName($name);
        if (isset($index['byName'][$normalized])) {
            return '/usluge/'.$index['byName'][$normalized];
        }

        foreach (self::ITEM_PREFIX_SERVICE as $prefix => $slug) {
            if (preg_match('/^'.preg_quote($prefix, '/').'(?:\b|\s|$)/iu', $name)) {
                return self::hrefIfActive($slug, $index);
            }
        }

        foreach ($index['byNameLength'] as $serviceNorm => $slug) {
            if ($serviceNorm !== '' && preg_match('/\b'.preg_quote($serviceNorm, '/').'\b/u', $normalized)) {
                return '/usluge/'.$slug;
            }
        }

        return null;
    }

    /**
     * @param  array{byName: array<string, string>, bySlug: array<string, true>, byNameLength: array<string, string>}  $index
     */
    private static function hrefIfActive(string $slug, array $index): ?string
    {
        return isset($index['bySlug'][$slug]) ? '/usluge/'.$slug : null;
    }

    /**
     * @return array{byName: array<string, string>, bySlug: array<string, true>, byNameLength: array<string, string>}
     */
    private static function serviceIndex(): array
    {
        if (self::$serviceIndex !== null) {
            return self::$serviceIndex;
        }

        $byName = [];
        $bySlug = [];

        foreach (Service::query()->active()->get(['name', 'slug']) as $service) {
            $bySlug[$service->slug] = true;
            $byName[self::normalizeName($service->name)] = $service->slug;
        }

        $byNameLength = $byName;
        uksort($byNameLength, fn (string $a, string $b) => strlen($b) <=> strlen($a));

        return self::$serviceIndex = [
            'byName' => $byName,
            'bySlug' => $bySlug,
            'byNameLength' => $byNameLength,
        ];
    }

    private static function normalizeName(string $value): string
    {
        $value = str_replace(['đ', 'Đ'], 'd', $value);

        return Str::lower(Str::ascii($value));
    }
}
