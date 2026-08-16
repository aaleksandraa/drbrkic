<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Department extends Model
{
    protected $guarded = [];

    protected $casts = [
        'equipment' => 'array',
        'indications' => 'array',
        'faq' => 'array',
        'gallery' => 'array',
        'is_active' => 'boolean',
        'show_on_home' => 'boolean',
    ];

    public function services(): HasMany
    {
        return $this->hasMany(Service::class)->orderBy('sort_order');
    }

    public function doctors(): HasMany
    {
        return $this->hasMany(Doctor::class)->orderBy('sort_order');
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', true);
    }

    public function scopeForHome(Builder $query): Builder
    {
        return $query->active()->where('show_on_home', true)->orderBy('sort_order');
    }
}
