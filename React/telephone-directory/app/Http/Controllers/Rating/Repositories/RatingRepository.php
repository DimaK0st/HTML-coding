<?php

namespace App\Http\Controllers\Rating\Repositories;

use App\Http\Controllers\Rating\Requests\GetRatingRequest;
use App\Http\Controllers\Rating\Requests\SetReviewAndRatingRequest;
use App\Models\Ip;
use App\Models\Phone;
use App\Models\Rating;
use Illuminate\Http\Request;
use Torann\GeoIP\GeoIP;

class RatingRepository
{

    public function getRatingByPhoneId(int $phoneId)
    {
        $rating = $this->query()->where('phone_id', $phoneId)->get();

        if (!$rating->count()) {

        }
    }

    public function getRatingByIp(Ip $ip, Phone $phone)
    {
        $rating = $this->query()->where('phone_id', $phone->id)->where('ip_id', $ip->id)->get();

        if (!$rating->count()) {
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
        $rating = Rating::find($request->getId());
        $rating->review = $request->getReview();
        $rating->rating = $request->getRating();
        $rating->save();

        return $rating;
    }

    public function getAllReviewAndRating(Ip $ip, Phone $phone)
    {
        $rating = $this->query()->where('phone_id', $phone->id)->where('ip_id','!=', $ip->id)
            ->join('ips', 'ratings.ip_id','=','ips.id')
            ->select('ratings.id', 'review', 'rating', 'ips.city', 'created_at')
            ->get();

        return $rating;
    }

    public function getAverageRatingPhone(Phone $phone)
    {
        $rating = $this->query()->where('phone_id', $phone->id)
            ->avg('rating');

        return $rating;
    }

    public function getCountViewsPhone(Phone $phone)
    {
        $rating = $this->query()->where('phone_id', $phone->id)
            ->count();

        return $rating;
    }

    public function query()
    {
        return Rating::query();
    }

}
