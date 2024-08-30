import {
    Container,
    Filters,
    SortPopup,
    Title,
    TopBar,
} from "@/components/shared";
import { Categories } from "@/components/shared";
import { ProductCard } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared";
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
                <div className="flex gap-[80px]">
                    <div className="w-[250px]">
                        <Filters />
                    </div>
                    {/* {Список товаров} */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title="Пиццы"
                                items={[
                                    {
                                        id: 1,
                                        name: "Чоризо фреш",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                    {
                                        id: 2,
                                        name: "Чоризо фреш",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                    {
                                        id: 3,
                                        name: "Чоризо фреш",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                    {
                                        id: 4,
                                        name: "Чоризо фреш",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                    {
                                        id: 5,
                                        name: "Чоризо фреш",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                    {
                                        id: 6,
                                        name: "Чоризо фреш",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                    {
                                        id: 7,
                                        name: "Чоризо фреш",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                    {
                                        id: 8,
                                        name: "Чоризо фреш",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                ]}
                                categoryId={1}
                            />
                            <ProductsGroupList
                                title="Комбо"
                                items={[
                                    {
                                        id: 1,
                                        name: "Омлет с беконом",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EE7970326512C89366583FF997CA9E.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                    {
                                        id: 2,
                                        name: "Комбо Завтрак на двоих",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EF112C05B1B9C193648449783C1A82.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                    {
                                        id: 3,
                                        name: "Кофе Латте",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EE7D61B0C26A3F85D97A78FEEE00AD.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                    {
                                        id: 4,
                                        name: "Сырники со сгущенным молоком",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:584x584/11EE7D61877A2EE09AA2178718EFB59C.avif",
                                        price: 4450,
                                        items: [{ price: 4450 }],
                                    },
                                ]}
                                categoryId={2}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
