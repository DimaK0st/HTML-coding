<?php

namespace App\Http\Controllers\Rating\Controllers;

use App\Http\Controllers\IP\Services\IPService;
use App\Http\Controllers\Rating\Requests\GetRatingRequest;
use App\Http\Controllers\Rating\Requests\SetReviewAndRatingRequest;
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
    public function getRating(GetRatingRequest $request)
    {
        return $this->ratingService->getReviewByIp($request);
    }

    public function setReviewAndRating(SetReviewAndRatingRequest $request)
    {

        return $this->ratingService->setReviewAndRating($request);
    }

    public function getAllInfoAboutPhone(GetRatingRequest $request)
    {
        return $this->ratingService->getAllInfoAboutPhone($request);
    }
}
