<?php

namespace Database\Seeders;

use App\Models\Ip;
use App\Models\Phone;
use App\Models\Region;
use Faker\Factory;
use Faker\Generator;
use Illuminate\Database\Seeder;

class PhonesSeeder extends Seeder
{
    private Generator $faker;
    private array $phoneList = [];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->faker = Factory::create();

        $this->phoneList[] = [
            'region_id' => "48",
            'digital' => "1281678",
        ];

        for ($i = 0; $i < 100; $i++) {
            $this->phoneList[] = ['region_id' => (string)$this->faker->numberBetween(1, 50),
                'digital' => (string)$this->faker->numberBetween(1000000, 9999999),
            ];
        }

        Phone::query()->insert($this->phoneList);
    }
}
