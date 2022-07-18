<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $number_id
 * @property string $review
 * @property int $rating
 * @property int $ip
 */
class PhoneReview extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'number_id',
        'review',
        'rating',
        'ip',
        ];

    /**
     * @return HasMany
     */
    public function numbers(): HasMany
    {
        return $this->hasMany(PhoneNumber::class, 'id', 'number_id');
    }


}
