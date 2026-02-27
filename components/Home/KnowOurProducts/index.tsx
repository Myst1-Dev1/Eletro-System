'use client';

import { AuthGuard } from "@/components/AuthGuard";
import { ProductBox } from "@/components/ProductBox";
import { useUserStore } from "@/stores/useUserStore";

interface KnowOurProductsProps {
    products: any;
}

const mockProduct = [
    {
        id: 1,
        name: "Produto 1",
        price: 100,
        image: "/images/produto.webp"
    },
    {
        id: 2,
        name: "Produto 2",
        price: 200,
        image: "/images/produto.webp"
    }
]

export function KnowOurProducts({ products }: KnowOurProductsProps) {
    const { isLogged } = useUserStore();

    const productsList = isLogged ? products.data : mockProduct;

    return (
        <section className="container py-20">
            {isLogged === false ? '' :
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Conheça nossos{" "}
                        <span className="bg-gradient-to-r from-[#33945E] to-[#03A64A] bg-clip-text text-transparent">
                            Produtos
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Equipamentos de alta performance para quem exige qualidade e tecnologia de ponta.
                    </p>
                </div>
            }

            <div className="relative py-7 lg:py-10 ">
                <div
                    className={`grid grid-cols-1 -mt-10 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-8 transition-all duration-300 ${!isLogged ? "blur-sm pointer-events-none select-none" : ""
                        }`}
                >
                    {productsList?.length === 0 ? <p className="text-center text-gray-400 mt-4 max-w-xl mx-auto">Sem produtos cadastrados</p> : productsList?.map((product: any) => (
                        <ProductBox
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            priceOld={product.oldPrice}
                            discount={product.discount}
                            image={product.image}
                            length={productsList.length}
                        />
                    ))}
                </div>

                {!isLogged && (
                    <AuthGuard />
                )}
            </div>
        </section>
    );
}