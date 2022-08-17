<?php

namespace App\Http\Controllers\Region\Repositories;

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
        $regionObj = $this->query()->where('region', $region)->first();

        return $regionObj->count() ? $regionObj: null;
    }

    public function query()
    {
        return Region::query();
    }

}
