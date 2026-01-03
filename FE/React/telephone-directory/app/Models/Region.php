<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $region
 * @property string $description
 */
class Region extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'region',
        'description',
    ];

    public function phones()
    {
        return $this->hasMany(Phone::class);
    }

}
