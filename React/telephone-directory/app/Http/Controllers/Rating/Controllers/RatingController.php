<?php

namespace App\Http\Controllers\Rating\Controllers;

use App\Http\Controllers\Phone\Requests\GetRatingRequest;
use Symfony\Component\HttpFoundation\Response;

class RatingController
{

    public function getPhoneRating(GetRatingRequest $request){
        ddh('hui');
        return response()->json(['number' => $request->getNumber()], 200);


    }
}
