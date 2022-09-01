<?php

namespace App\Http\Controllers\Rating\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GetLastVisitedPhones extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'phones' => 'required|array',
        ];
    }

    /**
     * @return array
     */
    public function getPhones(): array
    {
        return $this->input('phones');
    }
}
