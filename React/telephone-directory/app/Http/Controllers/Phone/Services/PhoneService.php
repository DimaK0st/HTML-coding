<?php

namespace App\Http\Controllers\Phone\Services;

use App\Http\Controllers\Phone\Repositories\PhoneRepository;
use App\Models\Number;

class PhoneService
{

    private PhoneRepository $phoneRepository;

    public function __construct(PhoneRepository $phoneRepository)
    {
        $this->phoneRepository = $phoneRepository;
    }

    public function getPhone()
    {
        $validatePhone='';

        if (!$validatePhone = $this->getRegionAndDigitals('971281678')){
            return null;
        }
        if (!$this->phoneRepository->getIdByPhone($validatePhone['region'], $validatePhone['digital'])){
            $this->createNewPhone($validatePhone['region'], $validatePhone['digital']);
        }

        return $this->query()->where();
    }

    public function createNewPhone(string $region, string $digital)
    {

    }

    public function checkRegion(){

    }


    private function getRegionAndDigitals(string $phone)
    {
        if (strlen($phone) > 13 || strlen($phone) < 9) {
            return null;
        }

        $pattern = '/(\+380|)(\d{9}$)/';

        preg_match($pattern, $phone, $matchesOne);
        $fullPhone = array_pop($matchesOne);

        if (strlen($fullPhone) === 9) {
            return [
                'region' => substr($fullPhone, 0, 2),
                'digital' => substr($fullPhone, 2),
            ];
        } else {
            return null;
        }
    }


}
