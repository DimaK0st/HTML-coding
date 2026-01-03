<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property int $id
 * @property string $ip
 * @property string $iso_code
 * @property string $country
 * @property string $city
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Ip query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Ip find()
 */

class Ip extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'id',
        'ip',
        'iso_code',
        'country',
        'city',
    ];

    /**
     * @return HasMany
     */
    public function ratings(): HasMany
    {
        return $this->hasMany(Rating::class);
    }
}
