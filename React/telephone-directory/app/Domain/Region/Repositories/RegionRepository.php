<?php

namespace App\Domain\Region\Repositories;

use App\Models\Region;

class RegionRepository
{

    public function createRegion(string $region)
    {
        if (strlen($region) == 2) {
            $regionObj = new Region();
            $regionObj->region = $region;
            $regionObj->description = 'Custom';
            $regionObj->save();
            return $regionObj;
        }
        else{
            return null;
        }
    }

    public function getRegion(string $region)
    {
        return $this->query()->where('region', $region)->first();
    }

    public function query()
    {
        return Region::query();
    }

}
