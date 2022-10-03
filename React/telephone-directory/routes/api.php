<?php

use App\Api\v1\Phone\Controllers\PhoneController;
use App\Api\v1\Rating\Controllers\RatingController;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Request;

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

    Route::post('get-all-info-about-phone', [RatingController::class, 'getAllInfoAboutPhone']);
    Route::post('get-comments-phone', [RatingController::class, 'getCommentsByPhoneWithPaginate']);
    Route::post('get-last-phones', [RatingController::class, 'getLastVisitedNumber']);
    Route::post('get-carousel-comments', [PhoneController::class, 'getCarouselCommentsForMainPage']);

    Route::post('add-rating', [RatingController::class, 'setReviewAndRating']);
});

