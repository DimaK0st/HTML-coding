'use client';

import React from 'react';
import {FilterCheckbox, FilterCheckboxProps} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui";

type Item = FilterCheckboxProps;

interface Props {
    title: string;
    items: Item[];
    defaultItems: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange?: (value: string[]) => void;
    defaultValue?: string[];
    className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = (
    {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = 'Пошук...',
        onChange,
        defaultValue,
        className
    }) => {
    const [showAll, setShowAll] = React.useState(false);
    const [selected, setSelected] = React.useState<Set<string>>(new Set(defaultValue || []));
    const [searchValue, setSearchValue] = React.useState('');
    const list = showAll
        ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
        : defaultItems.slice(0, limit);

    const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className={className}>
            <p className="font-bold mb-3">{title}</p>

            {showAll &&
                <div className="mb-5">
                    <Input onChange={onChangeSearchValue} placeholder={searchInputPlaceholder}
                           className="bg-gray-50 border-none"/>
                </div>
            }

            <div className={'flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'}>
                {list.map((item, index) => (
                    <FilterCheckbox
                        // onCheckedChange={() => onCheckedChange(item.value)}
                        checked={selected.has(item.value)}
                        key={String(item.value) + index}
                        value={item.value}
                        text={item.text}
                        endAdornment={item.endAdornment}
                    />
                ))}

                {items.length > limit &&
                    <div className={showAll ? 'border-t border-t-neutral-100 pt-4 mt-4' : ''}>
                        <button
                            className="text-primary mt-3"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? 'Згорнути' : 'Показати всі'}
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};
