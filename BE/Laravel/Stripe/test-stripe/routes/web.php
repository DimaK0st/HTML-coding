<?php

use App\Http\Controllers\PlanController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TableController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Cashier\Cashier;

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

//    $user = new \App\Models\User();
//
//    $user->name= 'Admin';
//    $user->email= 'admin@admin.admin1';
//    $user->password=Hash::make('admin');
//    $user->save();
//
//    dd($user);

    dd(Cashier::findBillable('cus_NMuHvBFvoO35vQ'));
    $user = User::find(1);
//    dd($user);
    dump($user->subscribed(2));
    dump($user->subscribed('2'));
    dump($user->subscribed('business-plan'));

    $user->newSubscription('Premium')->create($user->invoices(),[
        'email' => $user->email,
    ]);
//    $stripeCustomer = $user->createAsStripeCustomer();
//dd($stripeCustomer);
//
//    dd($user);

//    dd($user->paymentMethods());
//    ;
    return view('welcome');
});

Route::get('/billing-portal', function (Request $request) {
    return Auth::user()->redirectToBillingPortal();
});

Route::get('/update', function (Request $request) {
    return view('update-payment-method', [
        'intent' => Auth::user()->createSetupIntent()
    ]);
});





Route::middleware("auth")->group(function () {
    Route::get('/show2', [PlanController::class, 'show2']);
    Route::get('plans', [PlanController::class, 'index']);
    Route::get('plans/{plan}', [PlanController::class, 'show'])->name("plans.show");
    Route::post('subscription', [PlanController::class, 'subscription'])->name("subscription.create");
});



Route::get('/subscription/create', ['as'=>'home','uses'=>'\App\Http\Controllers\SubscriptionController@index'])->name('subscription.create');
Route::post('order-post', ['as'=>'order-post','uses'=>'\App\Http\Controllers\SubscriptionController@orderPost']);


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



Route::get('/', [ProductController::class, 'index']);
Route::post('/checkout', [ProductController::class, 'checkout'])->name('checkout');
Route::get('/success', [ProductController::class, 'success'])->name('checkout.success');
Route::get('/cancel', [ProductController::class, 'cancel'])->name('checkout.cancel');
Route::post('/webhook', [ProductController::class, 'webhook'])->name('checkout.webhook');


Route::get('/table-test', [TableController::class, 'show']);
