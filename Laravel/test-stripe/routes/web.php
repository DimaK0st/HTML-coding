<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;
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
//    $user->email= 'admin@admin.admin';
//    $user->password=Hash::make('admin');
//    $user->save();
//
//    dd($user);

    $user = User::find(1);

    $user->newSubscription('main', 'premium')->create();

    dd($user);
    return view('welcome');
});
