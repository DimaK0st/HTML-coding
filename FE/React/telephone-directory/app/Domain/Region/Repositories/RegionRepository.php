<?php

namespace App\Domain\Region\Repositories;

use App\Models\Region;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class RegionRepository
{
    /**
     * @param string $region
     * @return Region|null
     */
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

    /**
     * @param string $region
     * @return Builder|Model|object|null
     */
    public function getRegion(string $region)
    {
        return $this->query()->where('region', $region)->first();
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        return Region::query();
    }
}
