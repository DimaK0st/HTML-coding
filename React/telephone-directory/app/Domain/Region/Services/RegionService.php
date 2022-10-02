<?php

namespace App\Domain\Region\Services;

use App\Domain\Region\Repositories\RegionRepository;

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
