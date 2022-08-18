<?php

namespace App\Http\Controllers\Rating\Services;

use App\Http\Controllers\Phone\Repositories\PhoneRepository;
use App\Http\Controllers\Phone\Services\PhoneService;
use App\Http\Controllers\Rating\Repositories\RatingRepository;

class RatingService
{
    private RatingRepository $ratingRepository;
    private PhoneService $phoneService;

    public function __construct(RatingRepository $ratingRepository, PhoneService $phoneService)
    {
        $this->ratingRepository = $ratingRepository;
        $this->phoneService = $phoneService;
    }

    public function getRating(string $phoneStr){
        $phone = $this->phoneService->getPhone($phoneStr);

        $rating = $this->ratingRepository->getRatingByPhoneId($phone->id);
        ddh($rating);
    }



}
