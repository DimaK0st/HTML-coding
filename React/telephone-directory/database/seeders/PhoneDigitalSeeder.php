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
        for ($i = 0; $i < 9999999; $i++) {
            $this->command->getOutput()->progressAdvance();
            $result[]=['digital' =>$i];
            if ($i%1000===0) {
//                dump($i % 10000);
//                dump($i);
                PhoneDigital::query()->insert($result);
                $result = array();
                dump($result);
            }
//            if ($i < 1000000) {
//                $result[]= ['digital' => str_repeat('0', 7 - strlen(strval($i))) . $i];
//                if ($i!==0 and $i%10000===0 and $i === 999999){
//                    PhoneDigital::query()->insert($result);
//                    $result=array();
//                }
//                continue;
//            }
//
//            $result[]= ['digital' => strval($i)];
//            if ($i%10000===0){
//                dump($i%10000);
//                dump($i);
//                PhoneDigital::query()->insert($result);
//                $result=array();
//            }
        }

        $this->command->getOutput()->progressFinish();

    }
}
