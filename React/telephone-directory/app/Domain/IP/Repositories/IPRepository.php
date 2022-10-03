<?php

namespace App\Domain\IP\Repositories;

use App\Models\Ip;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Torann\GeoIP\GeoIP;
use Torann\GeoIP\Location;

class IPRepository
{

    /**
     * @param GeoIP|Location $geoIP
     * @return Ip|Builder|Model|object
     */
    public function getOrCreateIp(GeoIP|Location $geoIP)
    {

        $ip = $this->query()->where('ip', $geoIP->ip)->first();

        if (!$ip){
            return $this->createIp($geoIP);
        } else{
            return $ip;
        }
    }

    /**
     * @param GeoIP|Location $geoIP
     * @return Ip
     */
    public function createIp(GeoIP|Location $geoIP)
    {
        $ip = new Ip();
        $ip->ip = $geoIP->ip;
        $ip->iso_code = $geoIP->iso_code;
        $ip->country = $geoIP->country;
        $ip->city = $geoIP->city;

        $ip->save();

        return $ip;
    }

    /**
     * @return Builder
     */
    private function query(): Builder
    {
        return Ip::query();
    }
}
