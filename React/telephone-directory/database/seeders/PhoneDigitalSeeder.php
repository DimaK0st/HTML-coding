<?php

namespace Database\Seeders;

use App\Models\PhoneDigital;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PhoneDigitalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $this->command->getOutput()->progressStart(9999999);

        $result = [];
        for ($i = 0; $i < 10000000; $i++) {
            $this->command->getOutput()->progressAdvance();

            if ($i < 1000001) {
                $result[] = ['digital' => str_repeat('0', 7 - strlen(strval($i))) . $i];
                if ($i !== 0 and $i % 1000 === 0) {
                    PhoneDigital::query()->insert($result);
                    $result = array();
                }
                continue;
            }

            $result[] = ['digital' => $i];
            if ($i % 1000 === 0 or $i===9999999) {
                    PhoneDigital::query()->insert($result);
                    $result = array();
                }


//            if ($i < 1000001) {
//                $result[] = ['digital' => str_repeat('0', 7 - strlen(strval($i))) . $i];
//                if (($i !== 0 and $i % 1000 === 0) or $i === 999999) {
//                    PhoneDigital::query()->insert($result);
//                    $result = array();
//                }
//            } else {
//                $result[] = ['digital' => strval($i)];
//                if ($i % 1000 === 0 or $i===9999999) {
//                    if ($i>9700000){
//                        dump($i);
//                    }
//                    PhoneDigital::query()->insert($result);
//                    $result = array();
//                }
//            }
        }
        $this->command->getOutput()->progressFinish();

    }
}
