import {NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export async function GET(){
    const ingredients = await prisma.ingredient.findMany()
    console.log(ingredients);
    return NextResponse.json(ingredients);
}