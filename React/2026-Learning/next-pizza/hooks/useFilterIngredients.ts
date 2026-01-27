import {Ingredient} from "@prisma/client";
import {useEffect, useState} from "react";
import {Api} from "@/services/api-client";

interface ReturnProps {
    ingredients: Ingredient[]
    isLoading: boolean
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchIngredients() {
            try {
                setIsLoading(true);
                const ingredients = await Api.ingredients.getAll();
                setIngredients(ingredients);
                return ingredients;
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }

            fetchIngredients();
        }
    }, [])

    return {ingredients, isLoading}
}