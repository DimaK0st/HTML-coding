<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $phone_id
 * @property string $review
 * @property int $rating
 * @property int $ip_id
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Rating find()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Rating where()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Rating whereBetween()
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
        ];

    /**
     * @return HasMany
     */
    public function phones(): HasMany
    {
        return $this->hasMany(Phone::class, 'id', 'phone_id');
    }


    public function ips(): HasMany
    {
        return $this->hasMany(Ip::class, 'id', 'ip_id');
    }
}
