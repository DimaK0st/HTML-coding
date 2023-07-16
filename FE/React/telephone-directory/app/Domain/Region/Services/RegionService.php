<?php

namespace App\Domain\Region\Services;

use App\Domain\Region\Repositories\RegionRepository;
use App\Models\Region;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class RegionService
{
    public function __construct(private RegionRepository $regionRepository)
    {
    }

    /**
     * @param string $region
     * @return Region|Builder|Model|object|null
     */
    public function getOrCreateRegion(string $region)
    {
        if ($regionObj = $this->regionRepository->getRegion($region)){
            return $regionObj;
        } else{
            return $this->regionRepository->createRegion($region);
        }
    }
}
