<?php

namespace Database\Seeders;

use App\Models\Ip;
use App\Models\Phone;
use App\Models\Rating;
use App\Models\Region;
use Faker\Factory;
use Faker\Generator;
use Illuminate\Database\Seeder;

class RatingsSeeder extends Seeder
{
    private Generator $faker;
    private array $ratingList = [];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Factory::create();


        for ($i = 1; $i <= 100; $i++) {
            for ($j = 1; $j <= 100; $j++) {
                $this->ratingList[] = ['phone_id' => $j,
                    'review' => (string)$this->faker->realText(),
                    'rating' => $this->faker->numberBetween(1, 5),
                    'ip_id' => $i,
                    'created_at' => $this->faker->date
                ];
            }
        }

        Rating::query()->insert($this->ratingList);
    }
}