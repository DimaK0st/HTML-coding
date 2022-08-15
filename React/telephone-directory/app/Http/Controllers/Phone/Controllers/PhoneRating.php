<?php

namespace App\Http\Controllers\Phone\Controllers;

use App\Http\Controllers\Phone\Requests\GetPhoneRatingRequest;

class PhoneRating
{
    public function getPhoneRating(GetPhoneRatingRequest $request){
        dd('hui');
        return $request->getNumber();


    }
}
