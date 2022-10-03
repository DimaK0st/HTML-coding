<?php

namespace App\Api\v1\Rating\Controllers;

use App\Api\v1\Rating\Requests\GetLastVisitedPhones;
use App\Api\v1\Rating\Requests\GetRatingRequest;
use App\Api\v1\Rating\Requests\SetReviewAndRatingRequest;
use App\Domain\IP\Services\IPService;
use App\Domain\Rating\Services\RatingService;
use App\Models\Rating;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class RatingController
{
    private RatingService $ratingService;

    public function __construct(RatingService $ratingService)
    {
        $this->ratingService = $ratingService;
    }

    /**
     * @param SetReviewAndRatingRequest $request
     * @return Rating|Builder|Model|object|null
     * @throws Exception
     */
    public function setReviewAndRating(SetReviewAndRatingRequest $request)
    {
        return $this->ratingService->setReviewAndRating($request);
    }

    /**
     * @param GetRatingRequest $request
     * @return array
     * @throws Exception
     */
    public function getAllInfoAboutPhone(GetRatingRequest $request)
    {
        return $this->ratingService->getAllInfoAboutPhone($request);
    }

    /**
     * @param GetLastVisitedPhones $request
     * @return array
     */
    public function getLastVisitedNumber(GetLastVisitedPhones $request){
        return $this->ratingService->getLastVisitedNumber($request);
    }

    /**
     * @param GetRatingRequest $request
     * @return array[]
     * @throws Exception
     */
    public function getCommentsByPhoneWithPaginate(GetRatingRequest $request){
        return $this->ratingService->getCommentsByPhoneWithPaginate($request);
    }
}
