<?php

namespace Database\Seeders;

use App\Models\PhoneNumber;
use App\Models\PhoneRegion;
use Illuminate\Database\Seeder;

class PhoneNumberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $countRegion = PhoneRegion::all()->count()+1;
        $result = [];

        for ($i = 1; $i < $countRegion; $i++) {
            $this->command->getOutput()->info('Seeding ' . $i . '/' . $countRegion);
            $this->command->getOutput()->progressStart(9999999);
            for ($j = 1; $j < 10000001; $j++) {
                $this->command->getOutput()->progressAdvance();

                $result[] = ['id'=>null,'region_id' => $i, 'digital_id' => $j];
                if ($j % 1000 === 0) {
                    PhoneNumber::query()->insert($result);
                    $result = array();
                }

            }
            $this->command->getOutput()->progressFinish();
        }
    }


}
