import {Container, Filters, ProductsGroupList, TopBar} from "@/components/shared";
import {Title} from "@/components/shared/title";
import {ProductCard} from "@/components/shared/product-card";

export default function Home() {
    return <>
        <Container className="mt-10">
            <Title text={"Всі піци"} size={'lg'} className={"font-extrabold"}/>
        </Container>

        <TopBar/>

        <Container className="mt-10 pb-14">
            <div className="flex gap-[60px]">
                {/*Filters*/}
                <div className="flex gap-[250px]">
                    <Filters/>
                </div>

                {/*Product List*/}
                <div className={'flex-1'}>
                    <div className={'flex flex-col gap-16'}>
                        <ProductsGroupList title="Піци" items={[
                            {
                                id: '1',
                                name: 'Маргарита',
                                price: 390,
                                imageUrl: 'https://img.postershop.me/cdn-cgi/image/width=390,format=webp/https://img.postershop.me/10126/f1ca2338-da31-40c9-ad5a-86416dc81944_image.jpeg',
                                items: [{price:160},{price:220}]
                            },
                        ]} categoryId={1}/>
                        <ProductsGroupList title="Піци" items={[
                            {
                                id: '1',
                                name: 'Маргарита',
                                price: 390,
                                imageUrl: 'https://img.postershop.me/cdn-cgi/image/width=390,format=webp/https://img.postershop.me/10126/f1ca2338-da31-40c9-ad5a-86416dc81944_image.jpeg',
                                items: [{price:160},{price:220}]
                            },
                        ]} categoryId={2}/>
                        <ProductsGroupList title="Піци" items={[
                            {
                                id: '1',
                                name: 'Маргарита',
                                price: 390,
                                imageUrl: 'https://img.postershop.me/cdn-cgi/image/width=390,format=webp/https://img.postershop.me/10126/f1ca2338-da31-40c9-ad5a-86416dc81944_image.jpeg',
                                items: [{price:160},{price:220}]
                            },
                        ]} categoryId={3}/>
                    </div>
                </div>
            </div>
        </Container>
    </>;
}


