import {useEffect, useState} from "react";
import {useSet} from "react-use";
import {Ingredient} from "@prisma/client";
import {Api} from "@/services/api-client";

export const useIngredients = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

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

        }

        fetchIngredients();
    }, [])


    return {ingredients, isLoading}
}