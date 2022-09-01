<?php

use App\Http\Controllers\Phone\Controllers\PhoneController;
use App\Http\Controllers\Rating\Controllers\RatingController;
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

Route::group(['prefix'=>'v1', 'middleware'=>['cors']], function () {
    Route::post('/view', [PhoneController::class, 'index']);
    Route::post('number-rating', [RatingController::class, 'getPhoneRating']);



    Route::post('test', [RatingController::class, 'getRating']);
    Route::post('test-set', [RatingController::class, 'setReviewAndRating']);
    Route::post('get-all-info-about-phone', [RatingController::class, 'getAllInfoAboutPhone']);
    Route::post('get-comments-phone', [RatingController::class, 'getCommentsByPhoneWithPaginate']);
    Route::post('get-last-phones', [RatingController::class, 'getLastVisitedNumber']);


});

