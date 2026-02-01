'use client';

import React from 'react';
import {Title} from "@/components/shared/title";
import {Input, RangeSlider} from "@/components/ui";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";
import {useRouter, useSearchParams} from "next/navigation";
import {useFilters, useIngredients, useQueryFilters} from "@/hooks";

interface Props {
    className?: string;
}


export const Filters: React.FC<Props> = ({className}) => {
    const router = useRouter();
    const {ingredients, isLoading} = useIngredients()
    const filters = useFilters()

    useQueryFilters(filters)

    const items = ingredients.map((item) => ({text: item.name, value: item.id.toString()}))

    const updatePrices = (prices: number[]) => {
        filters.setPrices('priceFrom', prices[0])
        filters.setPrices('priceTo', prices[1])
    }


    return (
        <div className={className}>
            <Title text={'Фільтрація'} size="sm" className="mb-5 font-bold"/>

            {/*Top checkbox*/}


            <CheckboxFiltersGroup
                title="Тип тіста"
                name="pizzaTypes"
                className="mb-5"
                onClickCheckbox={filters.setPizzaTypes}
                selected={filters.pizzaTypes}
                items={[
                    {text: 'Тонке', value: '1'},
                    {text: 'Традиційне', value: '2'},
                ]}
            />

            <CheckboxFiltersGroup
                title="Розміри"
                name="size"
                className="mb-5"
                onClickCheckbox={filters.setSizes}
                selected={filters.sizes}
                items={[
                    {text: '20 см', value: '20'},
                    {text: '30 см', value: '30'},
                    {text: '40 см', value: '40'},
                ]}
            />

            {/*Price range*/}
            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена від - до:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={filters.prises.priceFrom}
                           onChange={(e) => filters.setPrices('priceFrom', +e.target.value)}/>
                    <Input type="number" min={50} max={1000} placeholder="30000" defaultValue={filters.prises.priceTo}
                           onChange={(e) => filters.setPrices('priceTo', +e.target.value)}/>
                </div>

                <RangeSlider min={0} max={1000} step={10}
                             value={[filters.prises.priceFrom || 0, filters.prises.priceTo || 1000]}
                             onValueChange={updatePrices}/>
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                title="Формат"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={isLoading}
                onClickCheckbox={filters.setSelectedIngredients}
                selected={filters.selectedIngredients}
                name="format"
            />
        </div>
    );
};
