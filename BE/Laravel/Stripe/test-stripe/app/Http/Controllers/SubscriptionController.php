<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;
use App\Models\User;
use Stripe;
use Session;
use Exception;

class SubscriptionController extends Controller
{
    public function index()
    {
        return view('subscription.create');
    }

    public function orderPost(Request $request)
    {
        $user = auth()->user();
        $input = $request->all();
        $token = $request->stripeToken;
        $paymentMethod = $request->paymentMethod;
        try {

            Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

            if (is_null($user->stripe_id)) {
                $stripeCustomer = $user->createAsStripeCustomer();
            }

            \Stripe\Customer::createSource(
                $user->stripe_id,
                ['source' => $token]
            );

            $user->newSubscription('test', $input['plane'])
                ->create($paymentMethod, [
                    'email' => $user->email,
                ]);

            return back()->with('success', 'Subscription is completed.');
        } catch (Exception $e) {
            return back()->with('success', $e->getMessage());
        }

    }

    public function create(Request $request, Plan $plan)
    {
        $plan = Plan::findOrFail($request->get('plan'));
        $user = $request->user();
        $paymentMethod = $request->paymentMethod;

        $user->createOrGetStripeCustomer();
        $user->updateDefaultPaymentMethod($paymentMethod);
        $user
            ->newSubscription('main', $plan->stripe_plan)
            ->trialDays(7)
            ->create($paymentMethod, [
                'email' => $user->email,
            ]);

        return redirect()->route('home')->with('status', 'Your plan subscribed successfully');
    }
}
