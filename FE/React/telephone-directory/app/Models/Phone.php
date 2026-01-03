<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


/**
 * @property int $id
 * @property int $region_id
 * @property int $digital
 * @property string $phone
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phone query()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phone with()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phone all()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phone find()
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phone whereIn()
 * @property Collection|Rating[] $rating
 */
class Phone extends Model
{
    use HasFactory, SoftDeletes;

    public $table = 'phones';
    public $timestamps = false;

    protected $fillable = [
        'region_id',
        'digital',
        'phone',
    ];


    /**
     * @return BelongsTo
     */
    public function region(): BelongsTo
    {
        return $this->belongsTo(Region::class);
    }

    public function ratings(): HasMany
    {
        return $this->hasMany(Rating::class, 'phone_id', 'id');
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
