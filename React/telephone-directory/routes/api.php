<?php

use App\Http\Controllers\Phone\Controllers\PhoneController;
use Symfony\Component\HttpFoundation\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix'=>'v1'], function () {
    Route::post('/view', [PhoneController::class, 'index']);
//        function (Request $request) {
//        dump($request->getClientIp());
//        $review = new PhoneReview();
//        dd($review);
//
//        return view('welcome');    });
});

