<?php

namespace Database\Seeders;

use App\Models\PhoneDigital;
use App\Models\PhoneRegion;
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
//            PhoneDigitalSeeder::class,
//            PhoneNumberSeeder::class,
        ]);
    }
}
