<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $number_id
 * @property string $review
 * @property int $ratingLine
 * @property int $ip
 */
class Review extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'number_id',
        'review',
        'ratingLine',
        'ip',
        ];

    /**
     * @return HasMany
     */
    public function numbers(): HasMany
    {
        return $this->hasMany(Number::class, 'id', 'number_id');
    }


}
