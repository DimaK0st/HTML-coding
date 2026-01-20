import React from 'react';
import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input, RangeSlider} from "@/components/ui";
import {CheckboxFiltersGroup} from "@/components/shared/checkbox-filters-group";

interface Props {
    className?: string;
}


export const Filters: React.FC<Props> = ({className}) => {
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
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" min={50} max={1000}  placeholder="30000" />
                </div>

                <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
            </div>

            <CheckboxFiltersGroup
                className="mt-5"
                title="Формат"
                limit={6}
                defaultItems={[
                    {
                        text: 'Сирний соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарела',
                        value: '2',
                    },
                    {
                        text: 'Часник',
                        value: '3',
                    },
                    {
                        text: 'Солоні огірочки',
                        value: '4',
                    },
                    {
                        text: 'Червона цибуля',
                        value: '5',
                    },
                    {
                        text: 'Томати',
                        value: '6',
                    },
                ]}
                items={[
                    {
                        text: 'Сирний соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарела',
                        value: '2',
                    },
                    {
                        text: 'Часник',
                        value: '3',
                    },
                    {
                        text: 'Солоні огірочки',
                        value: '4',
                    },
                    {
                        text: 'Червона цибуля',
                        value: '5',
                    },
                    {
                        text: 'Томати',
                        value: '6',
                    },
                    {
                        text: 'Сирний соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарела',
                        value: '2',
                    },
                    {
                        text: 'Часник',
                        value: '3',
                    },
                    {
                        text: 'Солоні огірочки',
                        value: '4',
                    },
                    {
                        text: 'Червона цибуля',
                        value: '5',
                    },
                    {
                        text: 'Томати',
                        value: '6',
                    },
                ]}
            />
        </div>
    );
};
