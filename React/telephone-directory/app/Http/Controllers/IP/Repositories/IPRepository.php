<?php

namespace App\Http\Controllers\IP\Repositories;

use App\Models\Ip;
use Torann\GeoIP\GeoIP;
use Torann\GeoIP\Location;

class IPRepository
{

    public function getOrCreateIp(GeoIP|Location $geoIP)
    {

        $ip = $this->query()->where('ip', $geoIP->ip)->first();

        if (!$ip){
            return $this->createIp($geoIP);
        } else{
            return $ip;
        }
    }

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


    private function query(): \Illuminate\Database\Eloquent\Builder
    {
        return Ip::query();
    }
}
