<?php

namespace App\Http\Controllers\Rating\Repositories;

use App\Http\Controllers\IP\Services\IPService;
use App\Http\Controllers\Rating\Requests\GetRatingRequest;
use App\Http\Controllers\Rating\Requests\SetReviewAndRatingRequest;
use App\Models\Ip;
use App\Models\Phone;
use App\Models\Rating;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Torann\GeoIP\GeoIP;

class RatingRepository
{
    private IPService $iPService;

    public function __construct(IPService $iPService)
    {
        $this->iPService = $iPService;
    }

    public function getRatingByPhoneId(int $phoneId)
    {
        $rating = $this->query()->where('phone_id', $phoneId)->get();

        if (!$rating->count()) {

        }
    }

    public function getReviewByIp(Ip $ip, Phone $phone)
    {
        $rating = $this->query()->where('phone_id', $phone->id)->where('ip_id', $ip->id)->first();

        if (!$rating) {
            return $this->addViewRating($ip, $phone);
        } else {
            return $rating;
        }
    }

    /**
     * @throws \Exception
     */
    public function addViewRating(Ip $ip, Phone $phone)
    {
        $rating = new Rating();
        $rating->phone_id = $phone->id;
        $rating->ip_id = $ip->id;
        $rating->save();

        return $rating;
    }

    public function setRating(SetReviewAndRatingRequest $request)
    {
        $ip = $this->iPService->getOrCreateIp(geoip()->getLocation($request->ip()));
        $rating = Rating::where('phone_id', $request->getId())
            ->where('ip_id', $ip->id)
            ->first();

        if (is_null($rating)) {
            $rating = new Rating();
        }


        $rating->phone_id = $request->getId();
        $rating->ip_id = $ip->id;
        $rating->review = $request->getReview();
        $rating->rating = (int)$request->getRating();

        $rating->save();

        return $rating;
    }

    public function getAllReview(Ip $ip, Phone $phone)
    {
        $rating = $this->query()->where('phone_id', $phone->id)->where('ip_id', '!=', $ip->id)
            ->where('review', '!=', 'null')
            ->where('rating', '!=', 'null')
            ->join('ips', 'ratings.ip_id', '=', 'ips.id')
            ->select('ratings.id', 'review', 'rating', 'ips.city', 'created_at')
            ->get();

        return $rating;
    }

    /**
     * @param Ip $ip
     * @param Phone $phone
     * @param array $sort
     * @param string $order
     * @return LengthAwarePaginator
     */
    public function getReviewPaginate(Ip $ip, Phone $phone, array $sort, string $order): LengthAwarePaginator
    {


        return $this->query()->where('phone_id', $phone->id)
            ->where('review', '!=', 'null')
            ->where('rating', '!=', 'null')
            ->whereIn('rating', $sort)
            ->orderBy('created_at', $order)
            ->join('ips', 'ratings.ip_id', '=', 'ips.id')
            ->select('ratings.id', 'review', 'rating', 'ips.city', 'created_at')
            ->paginate(10);
    }

    /**
     * @param Ip $ip
     * @param Phone $phone
     * @return Collection|array
     */
    public function getAllGroupRating(Ip $ip, Phone $phone): Collection|array
    {
        return $this->query()->where('phone_id', $phone->id)->where('rating', '!=', 'null')
            ->select('rating', DB::raw('count(\'rating\') as rating_count'))
            ->groupBy('rating')
            ->orderBy('rating', 'desc')
            ->get();
    }

    /**
     * @param Phone $phone
     * @return int
     */
    public function getAverageRatingPhone(Phone $phone): int
    {
        $avg = $this->query()->where('phone_id', $phone->id)
            ->avg('rating');

        return $avg ? $avg : 0;
    }

    /**
     * @param Phone $phone
     * @return int
     */
    public function getCountRatingPhone(Phone $phone): int
    {
        $count = $this->query()->where('phone_id', $phone->id)->where('rating', '!=', 'null')
            ->count();

        return $count ? $count : 0;
    }

    public function getCountAllReviewsPhone(Phone $phone)
    {
        $rating = $this->query()->where('phone_id', $phone->id)
            ->where('review', '!=', 'null')
            ->where('rating', '!=', 'null')
            ->count();

        return $rating;
    }

    public function getCountViewsPhone(Phone $phone)
    {
        $rating = $this->query()->where('phone_id', $phone->id)
            ->count();

        return $rating;
    }

    public function getLastVisitedNumber()
    {

    }

    public function query()
    {
        return Rating::query();
    }

}
