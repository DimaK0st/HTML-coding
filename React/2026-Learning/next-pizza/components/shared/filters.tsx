'use client';

import React from 'react';
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input, RangeSlider} from "@/components/ui";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";
import {useFilterIngredients} from "@/hooks/useFilterIngredients";

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC<Props> = ({className}) => {
    const {ingredients, isLoading, onAddId, selectedIds} = useFilterIngredients()
    const [prise, setPrice] = React.useState<PriceProps>({priceFrom: 0, priceTo: 1000});
    const items = ingredients.map((item) => ({text: item.name, value: item.id.toString()}))

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrice({
            ...prise,
            [name]: value
        });
    }


    return (
        <div className={className}>
            <Title text={'Фільтрація'} size="sm" className="mb-5 font-bold"/>

            {/*Top checkbox*/}
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можна збирати" value="1"/>
                <FilterCheckbox text="Новинки" value="2"/>
            </div>

            {/*Price range*/}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена від - до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={prise.priceFrom} onChange={(e) => updatePrice('priceFrom', +e.target.value)}/>
                    <Input type="number" min={50} max={1000} placeholder="30000" defaultValue={prise.priceTo} onChange={(e) => updatePrice('priceTo', +e.target.value)}/>
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[prise.priceFrom, prise.priceTo]}
                onValueChange={([priceFrom, priceTo])=> setPrice({priceFrom, priceTo})}/>
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                title="Формат"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={isLoading}
                onClickCheckbox={onAddId}
                selectedIds={selectedIds}
                name="format"
            />
        </div>
    );
};
