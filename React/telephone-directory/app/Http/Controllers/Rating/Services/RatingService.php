<?php

namespace App\Http\Controllers\Rating\Services;

use App\Http\Controllers\IP\Services\IPService;
use App\Http\Controllers\Phone\Repositories\PhoneRepository;
use App\Http\Controllers\Phone\Services\PhoneService;
use App\Http\Controllers\Rating\Repositories\RatingRepository;
use App\Http\Controllers\Rating\Requests\GetRatingRequest;
use App\Http\Controllers\Rating\Requests\SetReviewAndRatingRequest;
use App\Models\Ip;
use App\Models\Phone;

class RatingService
{
    private RatingRepository $ratingRepository;
    private PhoneService $phoneService;
    private IPService $iPService;

    public function __construct(RatingRepository $ratingRepository, PhoneService $phoneService, IPService $iPService)
    {
        $this->ratingRepository = $ratingRepository;
        $this->phoneService = $phoneService;
        $this->iPService = $iPService;
    }


    /**
     * @throws \Exception
     */
    public function setReviewAndRating(SetReviewAndRatingRequest $request)
    {

        return $this->ratingRepository->setRating($request);
    }

    public function getAllInfoAboutPhone(GetRatingRequest $request)
    {
        list($iP, $phone) = $this->getPhoneAndIp($request);

        return [
            'userRating' => $this->getRatingByIp($iP, $phone),
            'allRating' => $this->getAllReviewAndRating($iP, $phone),
            'averageRating' => $this->getAverageRatingPhone($phone),
            'countViews' => $this->getCountViewsPhone($phone),
        ];
    }

    /**
     * @throws \Exception
     */
    public function getRatingByIp(Ip $ip, Phone $phone)
    {
        return $this->ratingRepository->getRatingByIp($ip, $phone);
    }

    public function getAllReviewAndRating(Ip $ip, Phone $phone)
    {
        return $this->ratingRepository->getAllReviewAndRating($ip, $phone);
    }

    public function getAverageRatingPhone(Phone $phone)
    {
        return $this->ratingRepository->getAverageRatingPhone($phone);
    }

    public function getCountViewsPhone(Phone $phone)
    {
        return $this->ratingRepository->getCountViewsPhone($phone);
    }

    /**
     * @throws \Exception
     */
    public function getPhoneAndIp(GetRatingRequest $request)
    {
        return [
            $this->iPService->getOrCreateIp(geoip()->getLocation($request->ip())),
            $this->phoneService->getPhone($request),
            ];

    }

}
