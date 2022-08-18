<?php

namespace App\Http\Controllers\Rating\Repositories;

use App\Models\Rating;

class RatingRepository
{

    public function getRatingByPhoneId(int $phoneId)
    {
        $rating = $this->query()->where('phone_id', $phoneId)->get();

        if (!$rating->count()){

        }
    }

    public function addViewRating(int $phoneId)
    {
        $rating = new Rating();


    }

    public function query()
    {
        return Rating::query();
    }

}
