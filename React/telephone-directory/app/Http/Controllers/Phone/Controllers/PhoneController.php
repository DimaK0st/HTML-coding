<?php

namespace App\Http\Controllers\Phone\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Phone\Services\PhoneService;

class PhoneController extends Controller
{
    private PhoneService $phoneService;

    public function __construct(PhoneService $phoneService)
    {
        $this->phoneService = $phoneService;

    }

    public function index(){

    }

    public function getPhone(){
        $this->phoneService->getPhone();
    }
}
