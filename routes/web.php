<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\DoctorController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/o-nama', [PageController::class, 'about'])->name('about');
Route::get('/cjenovnik', [PageController::class, 'priceList'])->name('price-list');

Route::get('/kontakt', [ContactController::class, 'show'])->name('contact');
Route::post('/kontakt', [ContactController::class, 'store'])
    ->middleware('throttle:contact')
    ->name('contact.store');

Route::get('/doktori', [DoctorController::class, 'index'])->name('doctors.index');
Route::get('/doktori/{slug}', [DoctorController::class, 'show'])->name('doctors.show');

Route::get('/odjeljenja/{slug}', [DepartmentController::class, 'show'])->name('departments.show');
Route::get('/usluge/{slug}', [\App\Http\Controllers\ServiceController::class, 'show'])->name('services.show');

Route::get('/novosti', [NewsController::class, 'index'])->name('news.index');
Route::get('/novosti/{slug}', [NewsController::class, 'show'])->name('news.show');

Route::get('/sitemap.xml', SitemapController::class)->name('sitemap');

Route::fallback(fn () => \Inertia\Inertia::render('NotFound', [
    'seo' => \App\Support\Seo::make(
        title: 'Stranica nije pronađena',
        description: 'Tražena stranica ne postoji.',
        path: '/404',
    ),
])->toResponse(request())->setStatusCode(404));
