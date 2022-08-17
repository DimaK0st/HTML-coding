<?php

namespace App\Http\Controllers\Region\Services;

use App\Http\Controllers\Rating\Repositories\RatingRepository;
use App\Http\Controllers\Region\Repositories\RegionRepository;

class RegionService
{
    private RegionRepository $regionRepository;

    public function __construct(RegionRepository $regionRepository)
    {
        $this->regionRepository = $regionRepository;
    }

    public function getPhoneRating(){

    }

    public function getOrCreateRegion(string $region)
    {
        if ($regionObj = $this->regionRepository->getRegion($region)){
            return $regionObj;
        } else{
            return $this->regionRepository->createRegion($region);
        }

    }


}
