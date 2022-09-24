<?php

namespace App\Http\Controllers\Phone\Repositories;

use App\Models\Phone;
use Illuminate\Support\Facades\DB;

class PhoneRepository
{


    public function getPhone(string $region, string $digital)
    {
        return $this->query()
            ->join('regions', 'phones.region_id', '=', 'regions.id')
            ->where('region', $region)->where('digital', $digital)->select('phones.id as id', DB::raw('CONCAT(regions.region, \'\',  phones.digital) as phone'), 'regions.description')->first();

    }

    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        return Phone::query();
    }
}
