<?php

namespace App\Http\Controllers\Rating\Services;

use App\Http\Controllers\IP\Services\IPService;
use App\Http\Controllers\Phone\Repositories\PhoneRepository;
use App\Http\Controllers\Phone\Services\PhoneService;
use App\Http\Controllers\Rating\Repositories\RatingRepository;
use App\Http\Controllers\Rating\Requests\GetLastVisitedPhones;
use App\Http\Controllers\Rating\Requests\GetRatingRequest;
use App\Http\Controllers\Rating\Requests\SetReviewAndRatingRequest;
use App\Models\Ip;
use App\Models\Phone;
use App\Models\User;

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
        list($iP, $phone) = $this->getPhoneAndIp($request->ip(),$request->getNumber());

        return [
            'idPhone' => $phone->id,
            'userReview' => $this->getReviewByIp($iP, $phone),
            'rating' => [
                'group' => $this->getAllGroupRating($iP, $phone),
                'average' => $this->getAverageRatingPhone($phone),
                'count' => $this->getCountRatingPhone($phone),
            ],
            'countViews' => $this->getCountViewsPhone($phone),
        ];
    }

    public function getLastVisitedNumber(GetLastVisitedPhones $request)
    {
        return  Phone::whereIn('id',$request->getPhones())->with('rating')->get()->keyBy('id')->toArray();
    }


    public function getCommentsByPhoneWithPaginate(GetRatingRequest $request)
    {
        list($iP, $phone) = $this->getPhoneAndIp($request->ip(),$request->getNumber());
        $sort = [];

        switch ($request->getSort()) {

            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
                $sort[] = $request->getSort();
                break;

            case 'positive':
                $sort = [4, 5];
                break;

            case 'negative':
                $sort = [1, 2, 3];
                break;
            default:
                $sort = [1, 2, 3, 4, 5];
                break;

        }
        $reviewPaginate = $this->getReviewPaginate($iP, $phone, $sort, $request->getOrder());

        return ['review' => [
            'comments' => $reviewPaginate->items(),
            'total' => $reviewPaginate->total(),
            'nextPage' => $reviewPaginate->nextPageUrl()
        ]];
    }

    /**
     * @throws \Exception
     */
    public function getReviewByIp(Ip $ip, Phone $phone)
    {
        return $this->ratingRepository->getReviewByIp($ip, $phone);
    }

    public function getAllReview(Ip $ip, Phone $phone)
    {
        return $this->ratingRepository->getAllReview($ip, $phone);
    }

    public function getReviewPaginate(Ip $ip, Phone $phone, array $sort, string $order)
    {
        return $this->ratingRepository->getReviewPaginate($ip, $phone, $sort, $order);
    }

    public function getAllGroupRating(Ip $ip, Phone $phone)
    {
        $allGroupRating = $this->ratingRepository->getAllGroupRating($ip, $phone);

        return $allGroupRating;

    }

    public function getAverageRatingPhone(Phone $phone)
    {
        return $this->ratingRepository->getAverageRatingPhone($phone);
    }

    public function getCountRatingPhone(Phone $phone)
    {
        return $this->ratingRepository->getCountRatingPhone($phone);
    }

    public function getCountAllReviewsPhone(Phone $phone)
    {
        return $this->ratingRepository->getCountAllReviewsPhone($phone);
    }

    public function getCountViewsPhone(Phone $phone)
    {
        return $this->ratingRepository->getCountViewsPhone($phone);
    }

    /**
     * @throws \Exception
     */
    public function getPhoneAndIp(string $ip, string $phone)
    {
        return [
            $this->iPService->getOrCreateIp(geoip()->getLocation($ip)),
            $this->phoneService->getPhone($phone),
        ];

    }

}
