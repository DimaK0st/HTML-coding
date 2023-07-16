<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;


/**
 * @property int $id
 * @property int $region_id
 * @property int $digital
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phone query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phone with()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phone all()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phone find()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phone whereIn()
 * @property Collection|Rating[] $rating
 */
class Phone extends Model
{
    use HasFactory;

    public $table = 'phones';
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

    public function rating(): BelongsTo
    {
        return $this->belongsTo(Rating::class, 'id', 'phone_id');
    }

//    public function getLastReview(){
//        if (!array_key_exists('ratings', $this->relations)) {
//            $this->load([
//                'ratings' => function (BelongsTo $builder) {
//                    $builder;
//                },
//            ]);
//        }
//
//        $related = $this->getRelation('ratings');
//        dd($related);
//    }


    public function lastComment()
    {
        return $this->hasOne('App\Models\Rating','phone_id', 'id')->orderBy('created_at','desc')
            ->latest();
    }

}
