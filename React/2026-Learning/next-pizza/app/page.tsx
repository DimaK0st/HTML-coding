import {Container, Filters, ProductsGroupList, TopBar} from "@/components/shared";
import {Title} from "@/components/shared/title";
import {ProductCard} from "@/components/shared/product-card";
import {prisma} from "@/prisma/prisma-client";

export default async function Home() {
    const categories = await prisma.category.findMany({
        include: {
            products: {
                include: {
                    ingredients: true,
                    items: true,
                },
            },
        },
    });

    return (
        <>
            <Container className="mt-10">
                <Title text={"Всі піци"} size={'lg'} className={"font-extrabold"}/>
            </Container>

            <TopBar categories={categories.filter(
                (category) => category.products.length > 0
            )}/>

            <Container className="mt-10 pb-14">
                <div className="flex gap-[60px]">
                    {/*Filters*/}
                    <div className="flex gap-[250px]">
                        <Filters/>
                    </div>

                    {/*Product List*/}
                    <div className={'flex-1'}>
                        <div className={'flex flex-col gap-16'}>
                            {
                                categories?.map(
                                    (category, i) =>
                                        category.products.length > 0 && (
                                            <ProductsGroupList
                                                key={category.id}
                                                title={category.name}
                                                categoryId={category.id}
                                                items={category.products}
                                            />
                                        )
                                )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>);
}


