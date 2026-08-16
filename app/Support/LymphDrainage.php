<?php

namespace App\Support;

use App\Models\SiteSetting;
use App\Models\SpecialistVisit;
use Carbon\Carbon;

class LymphDrainage
{
    public const SERVICE_SLUG = 'limfna-drenaza';

    public const PRACTITIONER_NAME = 'Gordana Kolb';

    /**
     * @return array<string, mixed>|null
     */
    public static function forService(string $slug): ?array
    {
        if ($slug !== self::SERVICE_SLUG) {
            return null;
        }

        $whatsapp = SiteSetting::val('lymph_drainage_whatsapp', '+41 78 620 11 90') ?? '+41 78 620 11 90';
        $visits = SpecialistVisit::upcoming()
            ->where('doctor_name', self::PRACTITIONER_NAME)
            ->orderBy('visit_date')
            ->get();

        return [
            'heading' => 'Limfna drenaža u Doboju',
            'indicationsHeading' => 'Kada se limfna drenaža primjenjuje?',
            'indicationsIntro' => 'Može biti dio terapijskog pristupa, prema stanju i preporuci ljekara.',
            'indications' => [
                ['title' => 'Limfedem', 'text' => 'Podrška kod limfnog otoka, uz stručnu procjenu.'],
                ['title' => 'Lipoedem', 'text' => 'Tretman kao dio šireg pristupa kod lipoedema.'],
                ['title' => 'Otok ruku i nogu', 'text' => 'Kod osjećaja težine, napetosti i otoka ekstremiteta.'],
                ['title' => 'Prije i nakon operacije', 'text' => 'Kod određenih zahvata, prema dogovoru s ljekarom.'],
                ['title' => 'Nakon onkološkog liječenja', 'text' => 'Isključivo prema preporuci ordinirajućeg ljekara.'],
                ['title' => 'Osjećaj težine u ekstremitetima', 'text' => 'Kada ruke ili noge djeluju natečeno i napeto.'],
            ],
            'practitioner' => [
                'name' => self::PRACTITIONER_NAME,
                'kicker' => 'Iskustvo iz Švajcarske – sada i u Doboju',
                'role' => 'Lymph Swiss · tretmani limfne drenaže',
                'photo' => '/images/tim/gordana-kolb.webp',
                'photoFallback' => '/images/tim/gordana-kolb.jpg',
                'bio' => 'Tretmane limfne drenaže u ZU Dr Brkić obavlja Gordana Kolb iz Švajcarske, u okviru periodičnih dolazaka i unaprijed zakazanih termina. Pregled i tretman se organizuju u prostorijama ustanove u Doboju.',
            ],
            'venue' => 'ZU Dr Brkić, Doboj',
            'whatsapp' => $whatsapp,
            'sessions' => self::formatSessions($visits->pluck('visit_date')->filter()->all()),
            'sessionItems' => $visits->map(fn (SpecialistVisit $visit) => $visit->toFrontend())->values()->all(),
        ];
    }

    /**
     * @param  list<Carbon|string>  $dates
     */
    public static function formatSessions(array $dates): ?string
    {
        $normalized = collect($dates)
            ->map(fn ($date) => Carbon::parse($date)->startOfDay())
            ->unique(fn (Carbon $date) => $date->toDateString())
            ->sort()
            ->values();

        if ($normalized->isEmpty()) {
            return null;
        }

        $months = [
            1 => 'januar', 2 => 'februar', 3 => 'mart', 4 => 'april',
            5 => 'maj', 6 => 'juni', 7 => 'juli', 8 => 'august',
            9 => 'septembar', 10 => 'oktobar', 11 => 'novembar', 12 => 'decembar',
        ];

        $first = $normalized->first();
        $sameMonth = $normalized->every(fn (Carbon $date) => $date->isSameMonth($first));

        if ($sameMonth && $normalized->count() > 1) {
            $days = $normalized->map(fn (Carbon $date) => $date->format('j').'.')->all();
            $last = array_pop($days);

            return implode(', ', $days).' i '.$last.' '.$months[$first->month].' '.$first->year.'.';
        }

        return $normalized
            ->map(fn (Carbon $date) => $date->format('j').'. '.$months[$date->month].' '.$date->year.'.')
            ->implode(' · ');
    }
}
