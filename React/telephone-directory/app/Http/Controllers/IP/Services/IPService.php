<?php

namespace App\Http\Controllers\IP\Services;

use App\Http\Controllers\IP\Repositories\IPRepository;
use Symfony\Component\HttpFoundation\Request;
use Torann\GeoIP\GeoIP;
use Torann\GeoIP\Location;

class IPService
{

    private IPRepository $iPRepository;

    public function __construct(IPRepository $iPRepository)
    {
        $this->iPRepository = $iPRepository;
    }

    /**
     * @throws \Exception
     */
    public function getOrCreateIp(GeoIP|Location $geoIP)
    {
        return $this->iPRepository->getOrCreateIp($geoIP);
    }
}
