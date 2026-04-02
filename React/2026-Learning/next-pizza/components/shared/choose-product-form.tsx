import React from 'react';
import {cn} from "@/lib/utils";
import {PizzaImage} from "@/components/shared/pizza-image";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui";

interface Props {
    imageUrl?: string;
    name?: string;
    // ingredients?: IProduct['ingredients'];
    // items?: IProduct['items'];
    items?: any[];
    onClickAdd?: VoidFunction;
    className?: string;
}

export const ChooseProductForm: React.FC<Props> = (
    {
        imageUrl,
        name,
        items,
        onClickAdd,
        className
    }) => {
    const textDetails = '30 см, традиционное тесто, 6 кусочков';
    const totalPrice = 160;

    return (
        <div className={cn(className, 'flex flex-1')}>
            <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
                <img
                    src={imageUrl}
                    alt={name ?? ''}
                    className={'relative left-2 transition-all z-10 duration-300 w-[350px] h-[350px]'}
                />
            </div>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name ?? ''} size="md" className="font-extrabold mb-1"/>

                <p className={'text-gray-400'}>{textDetails}</p>

                <Button className={'h-[-55px] px-10 text-base rounded-[18px] w-full mt-10'}>
                    Додати в кошик за {totalPrice}₴
                </Button>
            </div>

        </div>
    );
};
