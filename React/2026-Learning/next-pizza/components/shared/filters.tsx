'use client';

import React, {useEffect} from 'react';
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input, RangeSlider} from "@/components/ui";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";
import {useFilterIngredients} from "@/hooks/useFilterIngredients";
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;
import {useSet} from "react-use";

interface Props {
    className?: string;
}

interface PriceProps {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC<Props> = ({className}) => {
    const {ingredients, isLoading, onAddId, selectedIngredients} = useFilterIngredients()
    const [prises, setPrices] = React.useState<PriceProps>({priceFrom: 0, priceTo: 1000});
    const items = ingredients.map((item) => ({text: item.name, value: item.id.toString()}))
    const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>([]));
    const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>([]));

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices({
            ...prises,
            [name]: value
        });
    }

    useEffect(()=>{
        const filters = {
            ...prises,
            pizzaTypes: Array.from(pizzaTypes),
            sizes: Array.from(sizes),
            ingredients: Array.from(selectedIngredients),
        }
    }, [prises, pizzaTypes, sizes, selectedIngredients])


    return (
        <div className={className}>
            <Title text={'Фільтрація'} size="sm" className="mb-5 font-bold"/>

            {/*Top checkbox*/}



            <CheckboxFiltersGroup
                title="Тип тіста"
                name="pizzaTypes"
                className="mb-5"
                onClickCheckbox={togglePizzaTypes}
                selected={pizzaTypes}
                items={[
                    {text: 'Тонке', value: '1'},
                    {text: 'Традиційне', value: '2'},
                ]}
            />

            <CheckboxFiltersGroup
                title="Розміри"
                name="size"
                className="mb-5"
                onClickCheckbox={toggleSizes}
                selected={sizes}
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
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={prises.priceFrom} onChange={(e) => updatePrice('priceFrom', +e.target.value)}/>
                    <Input type="number" min={50} max={1000} placeholder="30000" defaultValue={prises.priceTo} onChange={(e) => updatePrice('priceTo', +e.target.value)}/>
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[prises.priceFrom, prises.priceTo]}
                onValueChange={([priceFrom, priceTo])=> setPrices({priceFrom, priceTo})}/>
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                title="Формат"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={isLoading}
                onClickCheckbox={onAddId}
                selected={selectedIngredients}
                name="format"
            />
        </div>
    );
};
