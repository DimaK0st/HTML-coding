import {prisma} from "@/prisma/prisma-client";
import {ChooseProductModal} from "@/components/shared";

export default async function ProductModalPage({params: {id}}: { params: { id: string } }) {
    const product = await prisma.product.findFirst(
        {
            where: {id: Number(id)},
            include: {
                ingredients: true,
                items: true,
            }
        }
    )

    if (!product) return (
        <div>Product not found</div>
    )


    return <ChooseProductModal product={product}/>
}