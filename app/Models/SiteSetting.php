<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Schema;

class SiteSetting extends Model
{
    protected $guarded = [];

    /**
     * All settings as a cached key => value map.
     *
     * @return array<string, string|null>
     */
    public static function map(): array
    {
        return Cache::remember('site_settings.map', 300, function () {
            if (! Schema::hasTable('site_settings')) {
                return [];
            }

            return static::query()->pluck('value', 'key')->all();
        });
    }

    public static function val(string $key, ?string $default = null): ?string
    {
        return static::map()[$key] ?? $default;
    }

    protected static function booted(): void
    {
        $flush = fn () => Cache::forget('site_settings.map');
        static::saved($flush);
        static::deleted($flush);
    }
}
