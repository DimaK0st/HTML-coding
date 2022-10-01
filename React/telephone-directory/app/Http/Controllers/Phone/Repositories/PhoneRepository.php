<?php

namespace App\Http\Controllers\Phone\Repositories;

use App\Http\Controllers\Rating\Requests\GetLastVisitedPhones;
use App\Models\Phone;
use Illuminate\Support\Facades\DB;

class PhoneRepository
{

    public function getPhone(string $region, string $digital)
    {
        return $this->query()
            ->join('regions', 'phones.region_id', '=', 'regions.id')
            ->where('region', $region)->where('digital', $digital)
            ->select('phones.id as id', $this->concatNumber(), 'regions.description')
            ->first();

    }

    public function getPhoneById(int $id)
    {
        return $this->query()
            ->join('regions', 'phones.region_id', '=', 'regions.id')
            ->where('phones.id', $id)->select('phones.id as id', $this->concatNumber(), 'regions.description')->first();
    }

    public function getCarouselCommentsByType($typeComment, $amount = 15)
    {
        $sort = '';

        switch ($typeComment) {
            case 'positive':
                $sort = [4, 5];
                break;
            case 'negative':
                $sort = [1, 2, 3];
                break;
        }

        return Phone::with('lastComment')
            ->join('regions', 'phones.region_id', '=', 'regions.id')
            ->join('ratings', 'phones.id', '=', 'ratings.phone_id')
            ->select('phones.id as id', $this->concatNumber())
            ->orderBy('created_at', 'desc')
            ->where('review', '!=', '')
            ->where('rating', '!=', '')
            ->whereIn('rating', $sort)
            ->limit($amount)->get()->toArray();
    }

    public function getLastVisitedNumber(GetLastVisitedPhones $request)
    {
        return $this->query()->whereIn('phones.id', $request->getPhones())
            ->join('regions', 'phones.region_id', '=', 'regions.id')
            ->select('phones.id',
                DB::raw('CONCAT(+380,\'\',regions.region, \'\',  phones.digital) as phone'),
                DB::raw('(select review from ratings where phone_id = phones.id and review !=\'\' order by created_at desc limit 1) as review')
            )->withAvg('rating', 'rating')
            ->get()->keyBy('id')->toArray();
    }

    public function concatNumber()
    {
        return DB::raw('CONCAT(regions.region, \'\',  phones.digital) as phone');
    }

    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        return Phone::query();
    }
}
