<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $plans = [
            [
                'name' => 'Premium',
                'slug' => 'premium',
                'stripe_plan' => 'price_1MbRJyFqOuXRHkow2xGgFS4R',
                'price' => 20,
                'description' => 'Premium'
            ],
            [
                'name' => 'Business Plan',
                'slug' => 'business-plan',
                'stripe_plan' => 'price_1MbRKuFqOuXRHkowT5KBtv0g',
                'price' => 66.66,
                'description' => 'Business Plan'
            ]
        ];

        foreach ($plans as $plan) {
            Plan::create($plan);
        }
    }
}
