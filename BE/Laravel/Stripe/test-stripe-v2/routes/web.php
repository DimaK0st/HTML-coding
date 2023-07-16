<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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

Route::get('/billing-portal', function (Request $request) {
    return Auth::user()->redirectToBillingPortal();
});

Route::get('/create-custom', function (Request $request) {
//    dd(env('STRIPE_KEY'));
    $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));

    $id = $stripe->accounts->create(
        [
            'country' => 'US',
            'type' => 'custom',
            'capabilities' => [
                'card_payments' => ['requested' => true],
                'transfers' => ['requested' => true],
            ],
        ]
    );
    dump($id);
    dump($id->id);
    dump($stripe);
    dump($stripe->customers);

    return $stripe->accounts->retrieve($id->id, []);
});

Auth::routes();

use App\Http\Controllers\StripeController;

Route::get('stripe', [StripeController::class, 'index'])->name('stripe.index');


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
