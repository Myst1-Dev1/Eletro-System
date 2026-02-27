'use client';

import { ProductResponse } from "@/@types/Product";
import { AuthGuard } from "@/components/AuthGuard";
import { ProductBox } from "@/components/ProductBox";
import { useUserStore } from "@/stores/useUserStore";

interface OffersProps {
    products: ProductResponse[] | any
}

export function Offers({ products }: OffersProps) {
    const { isLogged } = useUserStore();

    const productsWithDiscount = products?.data?.filter((product: any) => product.discount > 0);

    return (
        <>
            {!isLogged ?
                <div className="relative min-h-[400px] bg-[#303030] py-10">
                    <AuthGuard />
                </div>
                :
                productsWithDiscount?.length > 0 && (
                    <section className="relative py-20">
                        <div className="container">

                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    Ofertas especiais{" "}
                                    <span className="bg-gradient-to-r from-[#33945E] to-[#03A64A] bg-clip-text text-transparent">
                                        de última hora!
                                    </span>
                                </h2>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                                {products?.data?.map((product: any) => (
                                    <ProductBox
                                        key={product.id}
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        priceOld={product.oldPrice}
                                        discount={product.discount}
                                        image={product.image}
                                        length={productsWithDiscount.length}
                                    />
                                ))}

                            </div>
                        </div>
                    </section>
                )
            }
        </>
    );
}