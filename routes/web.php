<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');
Route::get('/technology', function () {
    return Inertia::render('Technology');
})->name('technology');
Route::get('/features', function () {
    return Inertia::render('Features');
})->name('features');
Route::get('/integration', function () {
    return Inertia::render('Integration');
})->name('integration');

Route::get('/login', function () {
    return Inertia::render('Auth');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('Auth');
})->name('register');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::get('/inspeksi', function () {
    return Inertia::render('formInspeksi');
    })->name('inspeksi');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
