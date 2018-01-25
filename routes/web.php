<?php

use App\Models\Item;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hi', function () {
    return ['pagecount'=>11];
});

Route::get('/items/{page}', function($page) {
    \Illuminate\Pagination\Paginator::currentPageResolver(function () use ($page) {
        return $page;
    });

    return Item::paginate(10);
});