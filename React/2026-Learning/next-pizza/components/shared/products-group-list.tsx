'use client';

import React, {useEffect} from 'react';
import {Title} from "@/components/shared/title";
import {ProductCard} from "@/components/shared/product-card";
import {useIntersection} from "react-use";

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = (
    {
        title,
        items,
        categoryId,
        listClassName,
        className
    }) => {
    const intersectionRef = React.useRef(null);
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    });

    useEffect(() => {
            if (intersection?.isIntersecting) {
                console.log('Load more products for category:', title);
            }
        }, [categoryId, intersection?.isIntersecting, title]
    )

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size="sm" className="mb-6 font-bold"/>

            <div className="grid grid-cols-3 gap-[50px]">
                {items.map((item, i) => (
                    <ProductCard
                        id={'1'}
                        key={i}
                        name={'Сирна'}
                        price={160}
                        imageUrl="https://img.postershop.me/cdn-cgi/image/width=390,format=webp/https://img.postershop.me/10126/f1ca2338-da31-40c9-ad5a-86416dc81944_image.jpeg"/>
                ))}
            </div>
        </div>
    );
};
