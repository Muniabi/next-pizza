import {
    Container,
    Filters,
    SortPopup,
    Title,
    TopBar,
} from "@/components/shared";
import { Categories } from "@/components/shared";
import { Button } from "@/components/ui/button";
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
                    <div className="">
                        TovaryTovaryTovaryTovaryTovaryTovaryTovaryTovaryTovaryTovaryTovaryTovaryTovaryTovary
                    </div>
                </div>
            </Container>
        </>
    );
}
