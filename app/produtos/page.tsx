import { Filters } from "@/components/Produtos/Filters";
import { Pagination } from "@/components/Produtos/Pagination";
import { Products } from "@/components/Produtos/Products";

export default function Produtos() {

    return (
        <>
            <div>
                <div className="bg-[url(/images/home-banner.webp)] w-full min-h-[50dvh] bg-cover bg-center flex justify-center items-center flex-col gap-4">
                    <h1 className="text-2xl lg:text-4xl font-bold">As Melhores Ofertas <br /> Você Encontra aqui</h1>
                    <p className="text-sm lg:text-lg max-w-md text-center">Promoções exclusivas e cupoms para você aproveitar na sua loja online</p>
                </div>

                <div className="container py-12">
                    <Filters />
                    <Products />
                    <Pagination />
                </div>
            </div>
        </>
    )
}