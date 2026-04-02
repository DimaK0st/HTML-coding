import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, PizzaImage} from "@/components/shared";
import {Title} from "@/components/shared/title";
import {GroupVariants} from "@/components/shared/group-variants";

export default async function ProductPage({params: {id}}: { params: { id: string } }) {
    const product = await prisma.product.findUnique({where: {id: Number(id)}})

    if (!product) return notFound()


    return <Container className="flex flex-col my-10">
        <div className="flex flex-1">
            <PizzaImage imageUrl={product.imageUrl} size={40} className=""/>

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={product.name} size="md" className="font-extrabold mb-1"/>

                {/*<p className="text-gray-400">{textDetaills}</p>*/}
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem
                    blanditiis excepturi exercitationem hic modi neque numquam quidem sequi tempore? Eaque est </p>

                <GroupVariants
                    selectedValue={'2'}
                    items={[{
                        name: 'Маленька',
                        value: '1',
                    }, {
                        name: 'Середня',
                        value: '2',
                    }, {
                        name: 'Велика',
                        value: '3',
                        disabled: true
                    }]}/>
            </div>
        </div>
    </Container>
}