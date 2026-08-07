/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ProductBox } from "@/components/ProductBox";

interface KnowOurProductsProps {
    products: any;
}

export function KnowOurProducts({ products }: KnowOurProductsProps) {

    return (
        <section className="bg-black py-20">
            {/* {isLogged === false ? '' : */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Conheça nossos{" "}
                        <span className="bg-linear-to-r from-[#33945E] to-[#03A64A] bg-clip-text text-transparent">
                            Produtos
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Equipamentos de alta performance para quem exige qualidade e tecnologia de ponta.
                    </p>
                </div>
            {/* } */}

            <div className="container relative py-7 lg:py-10 ">
                <div
                    className={`grid grid-cols-1 -mt-10 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-8 transition-all duration-300`}
                >
                    {products?.length === 0 ? <p className="text-center text-gray-400 mt-4 max-w-xl mx-auto">Sem produtos cadastrados</p> : products?.map((product: any) => (
                        <ProductBox
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            priceOld={product.oldPrice}
                            discount={product.discount}
                            image={product.image}
                            length={products.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}