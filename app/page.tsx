import {
    Container,
    Filters,
    SortPopup,
    Title,
    TopBar,
} from "@/components/shared";
import { Categories } from "@/components/shared";
import { ProductCard } from "@/components/shared";
import { Button } from "@/components/ui";
import { Filter } from "lucide-react";

export default function Home() {
    return (
        <>
            <Container className="mt-10">
                <Title
                    text={"Все пиццы"}
                    size="lg"
                    className="font-extrabold"
                />
            </Container>
            <TopBar />

            <Container className="mt-10 pb-14">
                {/* {Фильтрация} */}
                <div className="flex gap-[60px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    {/* {Список товаров} */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductCard
                                id={0}
                                name={"Сырный цыпленок"}
                                price={543}
                                imageUrl={
                                    "https://media.dodostatic.net/image/r:584x584/11EE7D614CBE0530B7234B6D7A6E5F8E.avif"
                                }
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
