<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('page_title')->nullable();
            $table->string('short_description')->nullable();
            $table->text('description')->nullable();
            $table->json('equipment')->nullable();
            $table->json('indications')->nullable();
            $table->json('faq')->nullable();
            $table->string('image_path')->nullable();
            $table->json('gallery')->nullable();
            $table->string('icon')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->boolean('show_on_home')->default(false);
            $table->string('seo_title')->nullable();
            $table->string('seo_description', 500)->nullable();
            $table->string('og_title')->nullable();
            $table->string('og_description', 500)->nullable();
            $table->string('canonical_url')->nullable();
            $table->timestamps();
        });

        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->foreignId('department_id')->nullable()->constrained()->nullOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('label')->nullable();
            $table->string('subtitle')->nullable();
            $table->text('summary')->nullable();
            $table->text('description')->nullable();
            $table->json('benefits')->nullable();
            $table->json('preparation')->nullable();
            $table->json('process')->nullable();
            $table->string('duration')->nullable();
            $table->string('price')->nullable();
            $table->string('image_path')->nullable();
            $table->json('faq')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->boolean('show_on_home')->default(false);
            $table->string('seo_title')->nullable();
            $table->string('seo_description', 500)->nullable();
            $table->string('og_title')->nullable();
            $table->string('og_description', 500)->nullable();
            $table->timestamps();
        });

        Schema::create('doctors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('department_id')->nullable()->constrained()->nullOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('title')->nullable();
            $table->string('specialty')->nullable();
            $table->string('experience')->nullable();
            $table->text('short_bio')->nullable();
            $table->text('bio')->nullable();
            $table->text('education')->nullable();
            $table->text('specializations')->nullable();
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->string('photo_path')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->boolean('show_on_home')->default(false);
            $table->string('seo_title')->nullable();
            $table->string('seo_description', 500)->nullable();
            $table->string('og_title')->nullable();
            $table->string('og_description', 500)->nullable();
            $table->timestamps();
        });

        Schema::create('doctor_service', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')->constrained()->cascadeOnDelete();
            $table->foreignId('service_id')->constrained()->cascadeOnDelete();
            $table->unique(['doctor_id', 'service_id']);
        });

        Schema::create('news_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('news_articles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('news_category_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('department_id')->nullable()->constrained()->nullOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('excerpt')->nullable();
            $table->text('body')->nullable();
            $table->string('image_path')->nullable();
            $table->string('status')->default('draft');
            $table->timestamp('published_at')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->boolean('show_on_home')->default(false);
            $table->string('seo_title')->nullable();
            $table->string('seo_description', 500)->nullable();
            $table->string('og_title')->nullable();
            $table->string('og_description', 500)->nullable();
            $table->timestamps();
        });

        Schema::create('specialist_visits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('doctor_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('department_id')->nullable()->constrained()->nullOnDelete();
            $table->string('doctor_name')->nullable();
            $table->string('specialty')->nullable();
            $table->date('visit_date');
            $table->time('start_time')->nullable();
            $table->time('end_time')->nullable();
            $table->string('note')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->boolean('show_on_home')->default(true);
            $table->timestamps();
            $table->unique(['doctor_name', 'visit_date', 'start_time']);
        });

        Schema::create('contact_messages', function (Blueprint $table) {
            $table->id();
            $table->string('name', 120);
            $table->string('phone', 40);
            $table->string('email')->nullable();
            $table->text('message');
            $table->string('status')->default('unread');
            $table->string('ip', 64)->nullable();
            $table->string('user_agent', 512)->nullable();
            $table->timestamps();
        });

        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->text('value')->nullable();
            $table->string('type')->default('text');
            $table->timestamps();
        });

        Schema::create('redirects', function (Blueprint $table) {
            $table->id();
            $table->string('from_path')->unique();
            $table->string('to_path');
            $table->unsignedSmallInteger('status_code')->default(301);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('redirects');
        Schema::dropIfExists('site_settings');
        Schema::dropIfExists('contact_messages');
        Schema::dropIfExists('specialist_visits');
        Schema::dropIfExists('news_articles');
        Schema::dropIfExists('news_categories');
        Schema::dropIfExists('doctor_service');
        Schema::dropIfExists('doctors');
        Schema::dropIfExists('services');
        Schema::dropIfExists('departments');
    }
};
