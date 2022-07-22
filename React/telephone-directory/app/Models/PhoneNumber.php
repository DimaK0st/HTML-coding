<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $region_id
 * @property int $digital_id
 */
class PhoneNumber extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'region_id',
        'digital',
    ];

    /**
     * @return HasMany
     */
    public function regions(): HasMany
    {
        return $this->hasMany(PhoneRegion::class, 'id', 'digital_id');
    }

}
