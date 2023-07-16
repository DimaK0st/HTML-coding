<?php

namespace Database\Seeders;

use App\Models\PhoneDigital;
use App\Models\Region;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            PhoneRegionSeeder::class,
            IpsSeeder::class,
            PhonesSeeder::class,
            RatingsSeeder::class,
        ]);
    }
}
