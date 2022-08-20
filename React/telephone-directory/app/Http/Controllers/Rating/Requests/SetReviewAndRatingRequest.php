<?php

namespace App\Http\Controllers\Rating\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SetReviewAndRatingRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'id' => 'int|required',
            'review' => 'string|required',
            'rating' => 'int|required',
        ];
    }

    /**
     * @return string
     */
    public function getId(): string
    {
        return $this->input('id');
    }

    /**
     * @return string
     */
    public function getReview(): string
    {
        return $this->input('review');
    }

    /**
     * @return string
     */
    public function getRating(): string
    {
        return $this->input('rating');
    }
}
