<?php

namespace App\Domain\IP\Services;

use App\Domain\IP\Repositories\IPRepository;
use Exception;
use Torann\GeoIP\GeoIP;
use Torann\GeoIP\Location;

class IPService
{
    public function __construct(private IPRepository $iPRepository)
    {
    }

    /**
     * @throws Exception
     */
    public function getOrCreateIp(GeoIP|Location $geoIP)
    {
        return $this->iPRepository->getOrCreateIp($geoIP);
    }
}
