<?php

namespace App\Nova\Metrics;

use App\Models\Phone;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Metrics\Partition;

class PhonesPerRegion extends Partition
{
    public $name = 'Top 5 Regions';

    /**
     * Calculate the value of the metric.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return mixed
     */
    public function calculate(NovaRequest $request)
    {
//        dd(Phone::query()
//            ->join('regions', 'phones.region_id', '=', 'regions.id')
//            ->groupBy('region_id')
//            ->orderByRaw('COUNT(*) DESC')
//            ->take(5)
//            ->selectRaw('CONCAT(0, regions.region) AS region')->get()->toArray());
        return $this->count(
            $request,
            Phone::query()
                ->join('regions', 'phones.region_id', '=', 'regions.id')
                ->groupBy('region_id')
                ->orderByRaw('COUNT(*) DESC')
                ->take(5)
            ->selectRaw('CONCAT(0, regions.region) AS region'),
            'region',
        )->label(function ($value) {
            return '0'.$value;
        });
    }

    /**
     * Determine the amount of time the results of the metric should be cached.
     *
     * @return \DateTimeInterface|\DateInterval|float|int|null
     */
    public function cacheFor()
    {
        // return now()->addMinutes(5);
    }

    /**
     * Get the URI key for the metric.
     *
     * @return string
     */
    public function uriKey()
    {
        return 'phone-per-regions';
    }
}
