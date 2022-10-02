<?php

namespace App\Api\v1\Rating\Controllers;

use App\Api\v1\Rating\Requests\GetLastVisitedPhones;
use App\Api\v1\Rating\Requests\GetRatingRequest;
use App\Api\v1\Rating\Requests\SetReviewAndRatingRequest;
use App\Domain\IP\Services\IPService;
use App\Domain\Rating\Services\RatingService;

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

    public function getLastVisitedNumber(GetLastVisitedPhones $request){
        return $this->ratingService->getLastVisitedNumber($request);
    }

    public function getCommentsByPhoneWithPaginate(GetRatingRequest $request){
        return $this->ratingService->getCommentsByPhoneWithPaginate($request);
    }


}
