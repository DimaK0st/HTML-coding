import {Title} from "@/components/shared/title";
import React, {useEffect} from "react";
import {Filters} from "@/hooks/use-filters";
import {useRouter} from "next/navigation";
import qs from "qs";

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter();

    useEffect(() => {
        const params = {
            ...filters.prises,
            pizzaTypes: Array.from(filters.pizzaTypes),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients),
        }

        const queryString = qs.stringify(params, {arrayFormat: 'comma'});
        router.push(`?${queryString}`, {scroll: false})
    }, [filters, router])
}