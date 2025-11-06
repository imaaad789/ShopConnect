<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/products', function () {
    return response()->json([
        ['id' => 1, 'name' => 'T-shirt Homme', 'price' => 120, 'category' => 'Homme'],
        ['id' => 2, 'name' => 'Robe Femme', 'price' => 220, 'category' => 'Femme'],
        ['id' => 3, 'name' => 'Chaussures Enfant', 'price' => 180, 'category' => 'Enfant']
    ]);
});
