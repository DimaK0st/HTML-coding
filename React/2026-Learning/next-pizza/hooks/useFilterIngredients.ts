import {Ingredient} from "@prisma/client";
import {useEffect, useState} from "react";
import {Api} from "@/services/api-client";
import {useSet} from "react-use";

interface ReturnProps {
    ingredients: Ingredient[]
    isLoading: boolean
    selectedIngredients: Set<string>
    onAddId: (id: string) => void
}

export const useFilterIngredients = (values: string[] = []): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedIngredients, {toggle}] = useSet(new Set<string>(values));

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

    return {ingredients, isLoading, selectedIngredients: selectedIngredients, onAddId: toggle}
}