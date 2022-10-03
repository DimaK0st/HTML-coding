<?php

namespace App\Domain\IP\Services;

use App\Domain\IP\Repositories\IPRepository;
use Exception;
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
     * @throws Exception
     */
    public function getOrCreateIp(GeoIP|Location $geoIP)
    {
        return $this->iPRepository->getOrCreateIp($geoIP);
    }
}
