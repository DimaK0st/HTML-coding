<?php

namespace Database\Seeders;

use App\Models\Ip;
use App\Models\Region;
use Faker\Factory;
use Faker\Generator;
use Illuminate\Database\Seeder;

class IpsSeeder extends Seeder
{
    private Generator $faker;
    private array $regionList = [];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Factory::create();

        for ($i = 0; $i < 100; $i++) {
            $this->regionList[] = ['ip' => $this->faker->ipv4,
                'iso_code' => $this->faker->countryCode,
                'country' => $this->faker->country,
                'city' => $this->faker->city,
            ];
        }

        Ip::query()->insert($this->regionList);
    }
}
