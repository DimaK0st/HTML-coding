'use client';

import React from 'react';
import {Dialog} from "@/components/ui";
import {DialogContent} from "@/components/ui/dialog";
import {Product} from "@prisma/client";
import {cn} from "@/lib/utils";
import {Title} from "@/components/shared/title";
import {useRouter} from "next/navigation";
import {ChooseProductForm} from "@/components/shared";
import {ProductWithRelations} from "@/@types/prisma";
import {ChoosePizzaForm} from "@/components/shared/choose-pizza-form";

interface Props {
    product: ProductWithRelations;
    className?: string,
}


export const ChooseProductModal: React.FC<Props> = ({product, className}) => {
    const router = useRouter();
    const isPizzaForm = Boolean(product.items[0].pizzaType);

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent className={cn("p-0 max-w-[1060px] min-h-[500px] bg-white overflow-hidden", className)}>
                {
                    isPizzaForm ? (
                        <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name}
                                         ingredients={product.ingredients}/>
                    ) : (
                        <ChooseProductForm imageUrl={product.imageUrl} name={product.name}/>
                    )
                }
            </DialogContent>
        </Dialog>
    );
};
