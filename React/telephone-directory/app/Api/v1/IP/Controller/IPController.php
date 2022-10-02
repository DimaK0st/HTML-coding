<?php

namespace App\Api\v1\IP\Controller;

use App\Domain\IP\Services\IPService;
use Symfony\Component\HttpFoundation\Request;

class IPController
{
    private IPService $iPService;

    public function __construct(IPService $iPService)
    {
        $this->iPService = $iPService;
    }

    public function getOrCreateIp(Request $request){
        $this->iPService->getOrCreateIp(geoip()->getLocation($request->ip()));

}

}
