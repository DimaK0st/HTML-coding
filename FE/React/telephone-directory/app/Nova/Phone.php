<?php

namespace App\Nova;

use App\Nova\Filters\PhoneRegion;
use App\Nova\Metrics\AveragePhoneRating;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\HasMany;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Http\Requests\NovaRequest;

class Phone extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Phone>
     */
    public static $model = \App\Models\Phone::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'phone';

    public function subtitle()
    {
        return $this->phone;
    }

    public static $globalSearchResults = 1;

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'region_id', 'digital', 'phone',
    ];

    public static $tableStyle = 'tight';

    public static $showColumnBorders = true;

//    public static $clickAction = 'select';

    /**
     * Get the fields displayed by the resource.
     *
     * @param  NovaRequest  $request
     * @return array
     */
    public function fields(NovaRequest $request)
    {
        return [
            ID::make()->sortable(),
//            Text::make('Phone') // It is region+phone_number
//                ->sortable()
//                ->rules('required', 'max:255'),
            BelongsTo::make('Region') // 'region_id' is the foreign key in the database
                ->sortable()
                ->showOnPreview(),
            Number::make('Phone Number', 'digital') // 'digital' is the column name in the database
                ->sortable()
                ->textAlign('left')
                ->rules('required', 'numeric', 'unique:phones,phone_number'),
            Text::make('Phone')
                ->sortable()
                ->rules('required', 'max:255')
                ->readonly()
                ->exceptOnForms(),

            HasMany::make('Ratings')
                ->sortable()
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param  NovaRequest  $request
     * @return array
     */
    public function cards(NovaRequest $request)
    {
        return [
            (new AveragePhoneRating())->onlyOnDetail(),
            ];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  NovaRequest  $request
     * @return array
     */
    public function filters(NovaRequest $request)
    {
        return [
                new PhoneRegion(),
            ];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param  NovaRequest  $request
     * @return array
     */
    public function lenses(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  NovaRequest  $request
     * @return array
     */
    public function actions(NovaRequest $request)
    {
        return [];
    }
}
