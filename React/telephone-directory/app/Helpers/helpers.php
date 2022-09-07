<?php

/*
 * dd() with headers
 */
if (!function_exists('ddh')) {
    function ddh($var){
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: *');
        header('Access-Control-Allow-Headers: *');
        dd($var);
    }
}

/*
 * dump() with headers
 */
if (!function_exists('dumph')) {
    function dumph($var){
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: *');
        header('Access-Control-Allow-Headers: *');
        dump($var);
    }
}


if (!function_exists('getTimePassed')) {

    function timeValid($time, $type)
    {
        return $type . ($time === 1 ? '' : 's');
    }

    function getTimePassed(int $date)
    {
        $interval = time() - strtotime($date);
        $interval = round($interval / 60 * 60);

        if ($interval < 60) {
            $time = "$interval " . timeValid($interval, 'second') . " ago";
        } else {
            if (($interval = intval($interval / 60)) < 60) {
                $time = "$interval " . timeValid($interval, 'minute') . " ago";
            } else {
                if (($interval = intval($interval / 60)) < 24) {
                    $time = "$interval " . timeValid($interval, 'hour') . " ago";
                } else {
                    if (($interval = intval($interval / 24)) < 14) {
                        $time = $interval . " " . timeValid($interval, 'day') . " ago";
                    } else {
                        if (($weeks = intval($interval / 7)) < 4) {
                            $time = "$weeks ".timeValid($weeks,'week');
                        } else {
                            if (($months = intval($interval / 30.4)) < 12) {
                                $time = "$months " . timeValid($months, 'month') . " ago";
                            } else {
                                if (($years = intval($interval / 365)) < 365) {
                                    $time = $years . " " . timeValid($years, 'year') . " ago";
                                }
                            }
                        }
                    }
                }
            }
        }

        return $time;
    }
}
