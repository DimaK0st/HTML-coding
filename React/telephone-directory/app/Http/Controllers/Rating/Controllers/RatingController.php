<?php

namespace App\Http\Controllers\Rating\Controllers;

use App\Http\Controllers\Rating\Requests\GetRatingRequest;
use App\Http\Controllers\Rating\Services\RatingService;
use Symfony\Component\HttpFoundation\Response;

class RatingController
{
    private RatingService $ratingService;

    public function __construct(RatingService $ratingService)
    {
        $this->ratingService = $ratingService;
    }

    public function getRating(GetRatingRequest $request){
        ddh($this->ratingService->getRating($request->getNumber()));
        return $this->ratingService->getRating($request->getNumber());


    }
}
