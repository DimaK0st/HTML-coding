<?php

namespace App\Http\Controllers\Rating\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GetRatingRequest extends FormRequest
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
