<?php

namespace App\Http\Controllers\Rating\Services;

use App\Http\Controllers\Rating\Repositories\RatingRepository;

class RatingService
{
    private RatingRepository $phoneRatingRepositories;

    public function __construct(RatingRepository $phoneRatingRepositories)
    {
        $this->phoneRatingRepositories = $phoneRatingRepositories;
    }

    public function getPhoneRating(){

    }



}
