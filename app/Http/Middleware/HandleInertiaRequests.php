<?php

namespace App\Http\Middleware;

use App\Models\Department;
use App\Models\Service;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Schema;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'flash' => fn () => [
                'success' => $request->session()->get('success'),
            ],
            'settings' => fn () => [
                'siteName' => SiteSetting::val('site_name', 'ZU SC Dr Brkić'),
                'phonePrimary' => SiteSetting::val('phone_primary', '053 961 777'),
                'phoneSecondary' => SiteSetting::val('phone_secondary', '053 223 751'),
                'email' => SiteSetting::val('email', 'info@drbrkic.ba'),
                'address' => SiteSetting::val('address', 'Bukovica Mala bb'),
                'city' => SiteSetting::val('city', '74000 Doboj'),
                'hoursWeekdays' => SiteSetting::val('hours_weekdays', 'Pon – Pet: 07:00 – 20:00'),
                'hoursSaturday' => SiteSetting::val('hours_saturday', 'Sub: 08:00 – 14:00'),
                'facebook' => SiteSetting::val('facebook', 'https://www.facebook.com/p/Zdravstvena-ustanova-DR-BRKI%C4%86-Doboj-100086745097635/'),
                'instagram' => SiteSetting::val('instagram', 'https://www.instagram.com/drbrkic/'),
                'linkedin' => SiteSetting::val('linkedin', 'https://www.linkedin.com/company/dr-brkic'),
            ],
            'nav' => fn () => Cache::remember('nav.items', 300, function () {
                if (! Schema::hasTable('departments')) {
                    return ['departments' => [], 'services' => []];
                }

                return [
                    'departments' => Department::active()->orderBy('sort_order')
                        ->get(['name', 'slug'])->toArray(),
                    'services' => Service::active()->orderBy('sort_order')
                        ->get(['name', 'slug'])->toArray(),
                ];
            }),
        ]);
    }
}
