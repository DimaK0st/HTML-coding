<?php

namespace App\Http\Controllers\Rating\Services;

use App\Http\Controllers\IP\Services\IPService;
use App\Http\Controllers\Phone\Repositories\PhoneRepository;
use App\Http\Controllers\Phone\Services\PhoneService;
use App\Http\Controllers\Rating\Repositories\RatingRepository;
use App\Http\Controllers\Rating\Requests\GetRatingRequest;

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
    public function getRatingByIp(GetRatingRequest $request){
        $phone = $this->phoneService->getPhone($request);
        $geoIP = $this->iPService->getOrCreateIp(geoip()->getLocation($request->ip()));

        return $this->ratingRepository->getRatingByIp($geoIP, $phone);
    }



}
