<?php

namespace App\Providers;

use App\Models\Department;
use App\Models\Service;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        RateLimiter::for('contact', function (Request $request) {
            return Limit::perMinute(5)->by($request->ip());
        });

        $flushNav = fn () => Cache::forget('nav.items');
        Department::saved($flushNav);
        Department::deleted($flushNav);
        Service::saved($flushNav);
        Service::deleted($flushNav);
    }
}
