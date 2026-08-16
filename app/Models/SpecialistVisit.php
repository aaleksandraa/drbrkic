<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SpecialistVisit extends Model
{
    protected $guarded = [];

    protected $casts = [
        'visit_date' => 'date',
        'is_active' => 'boolean',
        'show_on_home' => 'boolean',
    ];

    public function doctor(): BelongsTo
    {
        return $this->belongsTo(Doctor::class);
    }

    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    public function news(): BelongsTo
    {
        return $this->belongsTo(NewsArticle::class, 'news_article_id');
    }

    /** @return array<string, mixed> */
    public function toFrontend(): array
    {
        $this->loadMissing(['department:id,name,slug', 'news:id,slug,status']);

        $slug = $this->news?->status === 'published' ? $this->news->slug : null;

        return [
            'doctorName' => $this->doctor_name ?? $this->doctor?->name,
            'specialty' => $this->specialty,
            'date' => $this->visit_date->toDateString(),
            'day' => $this->visit_date->format('d'),
            'month' => mb_strtoupper($this->visit_date->translatedFormat('M')),
            'startTime' => $this->start_time ? substr((string) $this->start_time, 0, 5) : null,
            'endTime' => $this->end_time ? substr((string) $this->end_time, 0, 5) : null,
            'note' => $this->note,
            'department' => $this->department?->only(['name', 'slug']),
            'href' => $slug ? '/novosti/'.$slug : null,
        ];
    }

    public function scopeUpcoming(Builder $query): Builder
    {
        return $query->where('is_active', true)
            ->whereDate('visit_date', '>=', now()->toDateString())
            ->orderBy('visit_date')
            ->orderBy('start_time');
    }
}
