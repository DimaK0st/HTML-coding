<?php

namespace App\Api\v1\Phone\Controllers;

use App\Api\Controller;
use App\Domain\Phone\Services\PhoneService;
use App\Models\Rating;

class PhoneController extends Controller
{
    public function __construct(private PhoneService $phoneService)
    {
    }

    /**
     * @return array
     */
    public function getCarouselCommentsForMainPage()
    {
        return $this->phoneService->getCarouselCommentsForMainPage();
    }
}
