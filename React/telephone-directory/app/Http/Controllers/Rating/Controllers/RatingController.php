<?php

namespace App\Http\Controllers\Rating\Controllers;

use App\Http\Controllers\IP\Services\IPService;
use App\Http\Controllers\Rating\Requests\GetRatingRequest;
use App\Http\Controllers\Rating\Services\RatingService;
use App\Models\Ip;
use Symfony\Component\HttpFoundation\Response;

class RatingController
{
    private RatingService $ratingService;
    private IPService $iPService;

    public function __construct(RatingService $ratingService, IPService $iPService)
    {
        $this->ratingService = $ratingService;
        $this->iPService = $iPService;
    }

    /**
     * @throws \Exception
     */
    public function getRating(GetRatingRequest $request){
//ddh($this->ratingService->getRatingByIp($request));
        return $this->ratingService->getRatingByIp($request);


    }
}
