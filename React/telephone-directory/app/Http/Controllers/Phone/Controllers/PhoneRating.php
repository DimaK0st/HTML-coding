<?php

namespace App\Http\Controllers\Phone\Controllers;

use App\Http\Controllers\Phone\Requests\GetPhoneRatingRequest;
use Symfony\Component\HttpFoundation\Response;

class PhoneRating
{

    public function getPhoneRating(GetPhoneRatingRequest $request){
        ddh('hui');
        return response()->json(['number' => $request->getNumber()], 200);


    }
}
