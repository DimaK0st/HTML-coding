<?php

namespace App\Http\Controllers\Phone\Services;

use App\Http\Controllers\Phone\Repositories\PhoneRepository;
use App\Http\Controllers\Region\Repositories\RegionRepository;
use App\Http\Controllers\Region\Services\RegionService;
use App\Models\Phone;

class PhoneService
{

    private PhoneRepository $phoneRepository;
    private RegionService $regionService;

    public function __construct(PhoneRepository $phoneRepository, RegionService $regionService)
    {
        $this->phoneRepository = $phoneRepository;
        $this->regionService = $regionService;
    }

    public function getPhone(string $phone)
    {
        if (!$validatePhone = $this->getRegionAndDigitals($phone)) {
            return null;
        }

        $phone = $this->phoneRepository->getPhone($validatePhone['region'], $validatePhone['digital']);

        if (!$phone) {
            return $this->createNewPhone($validatePhone['region'], $validatePhone['digital']);
        } else {
            return $phone;
        }

    }

    public function createNewPhone(string $region, string $digital)
    {

        if ($regionObj = $this->regionService->getOrCreateRegion($region)) {
            $phone = new Phone();
            $phone->region_id = $regionObj->id;
            $phone->digital = $digital;
            $phone->save();
            return $phone;
        } else {
            return null;
        }
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
