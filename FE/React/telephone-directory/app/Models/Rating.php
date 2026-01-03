<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $phone_id
 * @property string $review
 * @property int $rating
 * @property int $ip_id
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Rating find()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Rating whereBetween()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Rating whereIn()
 * @method static \Illuminate\Database\Eloquent\Builder rating()
 *
 *
 */
class Rating extends Model
{
    public $table = 'ratings';
    public $timestamps = true;

    protected $fillable = [
        'phone_id',
        'review',
        'rating',
        'ip_id',
        'created_at'
        ];

    /**
     * @return BelongsTo
     */
    public function phone(): BelongsTo
    {
        return $this->belongsTo(Phone::class);
    }

    public function ip(): BelongsTo
    {
        return $this->belongsTo(Ip::class);
    }

    public function scopeRating($query)
    {
        return $query->where('rating', '>', 0);
    }
}
