<?php

namespace App\Api\v1\Phone\Controllers;

use App\Api\Controller;
use App\Domain\Phone\Services\PhoneService;
use App\Models\Rating;

class PhoneController extends Controller
{
    private PhoneService $phoneService;

    public function __construct(PhoneService $phoneService)
    {
        $this->phoneService = $phoneService;

    }

    public function index()
    {

    }

    public function getPhone()
    {
//        $this->phoneService->getPhone();
    }


    public function getCarouselCommentsForMainPage(Rating $request)
    {
        return $this->phoneService->getCarouselCommentsForMainPage();
    }
}
