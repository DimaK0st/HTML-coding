<?php

namespace App\Api\v1\IP\Controller;

use App\Domain\IP\Services\IPService;
use Symfony\Component\HttpFoundation\Request;

class IPController
{
    public function __construct(private IPService $iPService)
    {
    }

    public function getOrCreateIp(Request $request)
    {
        $this->iPService->getOrCreateIp(geoip()->getLocation($request->ip()));
    }
}
