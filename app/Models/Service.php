<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Service extends Model
{
    protected $guarded = [];

    protected $casts = [
        'benefits' => 'array',
        'preparation' => 'array',
        'process' => 'array',
        'faq' => 'array',
        'is_active' => 'boolean',
        'show_on_home' => 'boolean',
    ];

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function doctors(): BelongsToMany
    {
        return $this->belongsToMany(Doctor::class);
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('is_active', 1);
    }

    public function scopeForHome(Builder $query): Builder
    {
        return $query->active()->where('show_on_home', 1)->orderBy('sort_order');
    }
}
