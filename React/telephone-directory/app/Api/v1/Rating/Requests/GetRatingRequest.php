<?php

namespace App\Api\v1\Rating\Requests;

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
            'sort' => 'nullable|string|max:10',
            'order' => 'nullable|int|max:10',
        ];
    }

    /**
     * @return string
     */
    public function getNumber(): string
    {
        return $this->input('number');
    }

    /**
     * @return string|null
     */
    public function getSort(): string|null
    {
        return $this->input('sort');
    }

    /**
     * @return string
     */
    public function getOrder(): string
    {
        return $this->input('order') ? 'desc' : 'asc';
    }
}
