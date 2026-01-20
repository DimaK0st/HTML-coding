import {Container, Filters, TopBar} from "@/components/shared";
import {Title} from "@/components/shared/title";

export default function Home() {
    return <>
        {/*<Container className="mt-10">*/}
        {/*    <Title text={"Всі піци"} size={'lg'} className={"font-extrabold"}/>*/}
        {/*</Container>*/}

        {/*<TopBar/>*/}

        <Container className="mt-10 pb-14">
            {/*Filters*/}
            <div className="flex gap-[60px]">
                <Filters/>
            </div>

            {/*Product List*/}
            <div className={'flex-1'}>
                <div className={'flex flex-col gap-16'}>Product List</div>
            </div>

        </Container>
    </>;
}
