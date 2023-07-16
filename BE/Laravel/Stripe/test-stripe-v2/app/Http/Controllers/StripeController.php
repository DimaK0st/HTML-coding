<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Stripe\Price;
use Stripe\Product;
use Stripe\Stripe;
use Stripe\Plan;
use Stripe\Subscription;

class StripeController extends Controller
{
    public function index()
    {
        // Установка ключа API Stripe
        Stripe::setApiKey(env('STRIPE_SECRET'));

        // Установка заголовка Stripe-Account
        $stripe_account_header = ['Stripe-Account' => Auth::user()->stripe_id];

        dd(Product::all());

        // Получение списка тарифных планов
        $plans = Plan::all([], $stripe_account_header);

        // Получение списка подписок
        $subscriptions = Subscription::all([], $stripe_account_header);

        return view('stripe.index', compact('plans', 'subscriptions'));
    }
}
