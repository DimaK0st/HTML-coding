<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Request;
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

//    $user = new \App\Models\User();
//
//    $user->name= 'Admin';
//    $user->email= 'admin@admin.admin1';
//    $user->password=Hash::make('admin');
//    $user->save();
//
//    dd($user);

    $user = User::find(1);

//    $user->newSubscription('main', 'premium')->create('341t234ttter',[
//        'email' => $user->email,
//    ]);
//    $stripeCustomer = $user->createAsStripeCustomer();
//dd($stripeCustomer);
//
//    dd($user);

//    dd($user->paymentMethods());

    return view('welcome');
});

Route::get('/billing-portal', function (Request $request) {
    return User::find(3)->redirectToBillingPortal();
});

Route::get('/update', function (Request $request) {
    return view('update-payment-method', [
        'intent' => Auth::user()->createSetupIntent()
    ]);
});



Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
