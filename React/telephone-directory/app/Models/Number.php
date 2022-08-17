<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $region_id
 * @property int $digital
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Number query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Number find()
 */
class Number extends Model
{
    use HasFactory;

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
        return $this->hasMany(Region::class, 'id', 'region_id');
    }

}