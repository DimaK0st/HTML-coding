<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string digital
 */
class PhoneDigital extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'digital',
    ];

}
