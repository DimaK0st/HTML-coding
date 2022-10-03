<?php

namespace App\Domain\Rating\Services;

use App\Api\v1\Rating\Requests\GetLastVisitedPhones;
use App\Api\v1\Rating\Requests\GetRatingRequest;
use App\Api\v1\Rating\Requests\SetReviewAndRatingRequest;
use App\Domain\IP\Services\IPService;
use App\Domain\Phone\Repositories\PhoneRepository;
use App\Domain\Phone\Services\PhoneService;
use App\Domain\Rating\Repositories\RatingRepository;
use App\Models\Ip;
use App\Models\Phone;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Exception;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

class RatingService
{
    private RatingRepository $ratingRepository;
    private PhoneService $phoneService;
    private PhoneRepository $phoneRepository;
    private IPService $iPService;

    public function __construct(RatingRepository $ratingRepository, PhoneService $phoneService, PhoneRepository $phoneRepository, IPService $iPService)
    {
        $this->ratingRepository = $ratingRepository;
        $this->phoneService = $phoneService;
        $this->phoneRepository = $phoneRepository;
        $this->iPService = $iPService;
    }

    /**
     * @throws Exception
     */
    public function setReviewAndRating(SetReviewAndRatingRequest $request)
    {
        list($iP, $phone) = $this->getPhoneAndIp($request->ip(), $request->getPhone());

        return $this->ratingRepository->setRating($request, $iP, $phone);
    }

    /**
     * @param GetRatingRequest $request
     * @return array
     * @throws Exception
     */
    public function getAllInfoAboutPhone(GetRatingRequest $request)
    {
        list($iP, $phone) = $this->getPhoneAndIp($request->ip(), $request->getNumber());

        return [
            'currentPhone' => $phone->toArray(),
            'userReview' => $this->getReviewByIp($iP, $phone),
            'rating' => [
                'group' => $this->getAllGroupRating($iP, $phone),
                'average' => $this->getAverageRatingPhone($phone),
                'count' => $this->getCountRatingPhone($phone),
            ],
            'view'=>[
                'count' => $this->getCountViewsPhone($phone),
                'chart' => $this->getChartDataPhone($phone),
            ],
        ];
    }

    /**
     * @param GetLastVisitedPhones $request
     * @return array
     */
    public function getLastVisitedNumber(GetLastVisitedPhones $request)
    {
        return $this->phoneRepository->getLastVisitedNumber($request);
    }

    /**
     * @param GetRatingRequest $request
     * @return array[]
     * @throws Exception
     */
    public function getCommentsByPhoneWithPaginate(GetRatingRequest $request)
    {
        list($iP, $phone) = $this->getPhoneAndIp($request->ip(), $request->getNumber());
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
            'lastPage' => $reviewPaginate->lastPage(),
            'currentPage' => $reviewPaginate->currentPage(),
            'nextPage' => $reviewPaginate->nextPageUrl()
        ]];
    }

    /**
     * @throws Exception
     */
    public function getReviewByIp(Ip $ip, Phone $phone)
    {
        return $this->ratingRepository->getReviewByIp($ip, $phone);
    }

    public function getAllReview(Ip $ip, Phone $phone)
    {
        return $this->ratingRepository->getAllReview($ip, $phone);
    }

    /**
     * @param Ip $ip
     * @param Phone $phone
     * @param array $sort
     * @param string $order
     * @return LengthAwarePaginator
     */
    public function getReviewPaginate(Ip $ip, Phone $phone, array $sort, string $order)
    {
        return $this->ratingRepository->getReviewPaginate($ip, $phone, $sort, $order);
    }

    /**
     * @param Ip $ip
     * @param Phone $phone
     * @return array|Collection
     */
    public function getAllGroupRating(Ip $ip, Phone $phone)
    {
        return $this->ratingRepository->getAllGroupRating($ip, $phone);
    }

    /**
     * @param Phone $phone
     * @return float
     */
    public function getAverageRatingPhone(Phone $phone)
    {
        return $this->ratingRepository->getAverageRatingPhone($phone);
    }

    /**
     * @param Phone $phone
     * @return int
     */
    public function getCountRatingPhone(Phone $phone)
    {
        return $this->ratingRepository->getCountRatingPhone($phone);
    }

    /**
     * @param Phone $phone
     * @return int
     */
    public function getCountViewsPhone(Phone $phone)
    {
        return $this->ratingRepository->getCountViewsPhone($phone);
    }

    /**
     * @param Phone $phone
     * @return array
     */
    public function getChartDataPhone(Phone $phone)
    {
        $result = [];

        $start = Carbon::now()->toDateString();
        $finish = Carbon::now()->subDays(30)->toDateString();

        $chartData = $this->ratingRepository->getChartDataPhone($phone->id, $start, $finish);

        $period = CarbonPeriod::create($finish, $start)->toArray();

        foreach ($period as $item) {
            $timeKey = $item->format('Y-m-d');
            if (array_key_exists($timeKey, $chartData)) {
                $result[$timeKey] = $chartData[$timeKey]['count'];
            } else {
                $result[$timeKey] = 0;
            }
        }

        return $result;
    }

    /**
     * @throws Exception
     */
    public function getPhoneAndIp(string $ip, string $phone)
    {
        return [
            $this->iPService->getOrCreateIp(geoip()->getLocation($ip)),
            $this->phoneService->getPhone($phone),
        ];
    }
}
