<?php

namespace App\Http\Controllers\Phone\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GetPhoneRatingRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'number' => 'required|max:10',
        ];
    }
    /**
     * @return string
     */
    public function getNumber(): string
    {
        return $this->input('number');
    }
}
