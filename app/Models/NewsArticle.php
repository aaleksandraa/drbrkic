<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class NewsArticle extends Model
{
    protected $guarded = [];

    protected $casts = [
        'published_at' => 'datetime',
        'is_featured' => 'boolean',
        'show_on_home' => 'boolean',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(NewsCategory::class, 'news_category_id');
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function specialistVisits(): HasMany
    {
        return $this->hasMany(SpecialistVisit::class);
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('status', 'published')
            ->whereNotNull('published_at')
            ->where('published_at', '<=', now());
    }

    public function scopeForHome(Builder $query): Builder
    {
        return $query->published()->where('show_on_home', true)->orderByDesc('published_at');
    }
}
