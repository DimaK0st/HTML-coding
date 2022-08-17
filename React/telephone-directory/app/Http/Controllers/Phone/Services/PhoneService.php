<?php

namespace App\Http\Controllers\Phone\Services;

use App\Models\PhoneNumber;

class PhoneService
{

    public function createNewPhone()
    {

    }

    public function checkPhone()
    {

    }

    public function getPhone()
    {
        ddh($this->getRegionAndDigitals('+380971281678'));
        return $this->query()->where();
    }

    private function getRegionAndDigitals(string $phone)
    {
//        $pattern = '/\+380\d{9}/';
        $patternOne = '/(\+380|)(\d{9})/';
        $valideOne = preg_match($patternOne, $phone, $matchesOne);
//        $valideTwo = preg_match($patternTwo, $phone, $matchesTwo);

        ddh($matchesOne);

        return $valideOne;
    }

    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        return PhoneNumber::query();
    }

}
