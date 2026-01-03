<?php

namespace App\Domain\Rating\Repositories;

use App\Api\v1\Rating\Requests\SetReviewAndRatingRequest;
use App\Domain\Phone\Services\PhoneService;
use App\Models\Ip;
use App\Models\Phone;
use App\Models\Rating;
use Carbon\Carbon;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class RatingRepository
{
    public function __construct(private PhoneService $phoneService)
    {
    }

    public function getReviewByIp(Ip $ip, Phone $phone)
    {
        $rating = $this->query()->where('phone_id', $phone->id)->where('ip_id', $ip->id)->first();

        if (!$rating) {
            return $this->addViewRating($ip, $phone);
        } else {
            $rating->updated_at = now();
            $rating->save();
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

    /**
     * @param SetReviewAndRatingRequest $request
     * @param Ip $ip
     * @param Phone $phone
     * @return Rating|Builder|Model|object|null
     */
    public function setRating(SetReviewAndRatingRequest $request, Ip $ip, Phone $phone)
    {
        $this->phoneService->getPhone($request->getPhone());

        $rating = Rating::where('phone_id', $this->phoneService->getPhone($request->getPhone())->id)
            ->where('ip_id', $ip->id)
            ->first();

        if (is_null($rating)) {
            $rating = new Rating();
        }

        $rating->phone_id = $phone->id;
        $rating->ip_id = $ip->id;
        $rating->review = $request->getReview();
        $rating->rating = (int)$request->getRating();
        $rating->created_at = Carbon::now();

        $rating->save();

        return $rating;
    }

    /**
     * @param Ip $ip
     * @param Phone $phone
     * @param array $sort
     * @param string $order
     * @return LengthAwarePaginator
     */
    public function getReviewPaginate(Phone $phone, array $sort, string $order): LengthAwarePaginator
    {
        return $this->query()->where('phone_id', $phone->id)
            ->whereNotNull(['review','rating'])
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
     * @return float
     */
    public function getAverageRatingPhone(Phone $phone): float
    {
        $avg = $this->query()->where('phone_id', $phone->id)
            ->avg('rating');

        return $avg ?: 0;
    }

    /**
     * @param Phone $phone
     * @return int
     */
    public function getCountRatingPhone(Phone $phone): int
    {
        $count = $this->query()->where('phone_id', $phone->id)->where('rating', '!=', 'null')
            ->count();

        return $count ?: 0;
    }

    /**
     * @param Phone $phone
     * @return int
     */
    public function getCountViewsPhone(Phone $phone): int
    {
        return $this->query()->where('phone_id', $phone->id)
            ->count();
    }

    /**
     * @param int $id
     * @param string $start
     * @param string $finish
     * @return array
     */
    public function getChartDataPhone(int $id, string $start, string $finish)
    {
        return Rating::whereBetween('created_at', [
            $finish, $start
        ])->where('phone_id', $id)
            ->selectRaw('date(created_at) as date, COUNT(*) as count')
            ->groupBy('date')
            ->orderBy('date', 'DESC')->get()->keyBy('date')->toArray();
    }

    /**
     * @return Builder
     */
    public function query(): Builder
    {
        return Rating::query();
    }
}
