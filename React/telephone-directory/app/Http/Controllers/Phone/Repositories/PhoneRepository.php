<?php

namespace App\Http\Controllers\Phone\Repositories;

use App\Models\Number;

class PhoneRepository
{


    public function getPhone(string $region, string $digital)
    {
        return $this->query()
            ->            join('regions', 'numbers.region_id', '=', 'regions.id')
            ->where('region', $region)->where('digital', $digital)->get();

    }

    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        return Number::query();
    }
}
