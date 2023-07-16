<?php

namespace App\Domain\Phone\Repositories;

use App\Api\v1\Rating\Requests\GetLastVisitedPhones;
use App\Models\Phone;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Expression;
use Illuminate\Support\Facades\DB;

class PhoneRepository
{
    /**
     * @param string $region
     * @param string $digital
     * @return Builder|Model|object|null
     */
    public function getPhone(string $region, string $digital)
    {
        return $this->query()
            ->join('regions', 'phones.region_id', '=', 'regions.id')
            ->where('region', $region)->where('digital', $digital)
            ->select('phones.id as id', $this->concatNumber(), 'regions.description')
            ->first();
    }

    /**
     * @param int $id
     * @return Builder|Model|object|null
     */
    public function getPhoneById(int $id)
    {
        return $this->query()
            ->join('regions', 'phones.region_id', '=', 'regions.id')
            ->where('phones.id', $id)
            ->select('phones.id as id', $this->concatNumber(), 'regions.description')
            ->first();
    }

    /**
     * @param string $typeComment
     * @param int $amount
     * @return array
     */
    public function getCarouselCommentsByType(string $typeComment, int $amount = 15)
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

        return Phone::select('phones.id as id', $this->concatNumber(), 'ratings.*')
            ->join('regions', 'phones.region_id', '=', 'regions.id')
            ->join('ratings', 'phones.id', '=', 'ratings.phone_id')
            ->orderBy('created_at', 'desc')
            ->whereNotNull('review')
            ->where('rating', '>', 0)
            ->whereIn('rating', $sort)
            ->limit($amount)->get()->toArray();
    }

    /**
     * @param GetLastVisitedPhones $request
     * @return array
     */
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

    /**
     * @return Expression
     */
    public function concatNumber()
    {
        return DB::raw('CONCAT(regions.region, \'\',  phones.digital) as phone');
    }

    /**
     * @return Builder
     */
    private function query(): Builder
    {
        return Phone::query();
    }
}
