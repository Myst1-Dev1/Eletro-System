'use client';

import { ProductResponse } from "@/@types/Product";
import { AuthGuard } from "@/components/AuthGuard";
import { useUserStore } from "@/stores/useUserStore";
import Image from "next/image";

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
                                    <div
                                        key={product.id}
                                        className="group relative bg-[#111] border border-white/10 rounded-xl p-5 hover:border-[#03A64A] transition-all duration-500 hover:-translate-y-2"
                                    >
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#0BD061] blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
                                        </div>

                                        <span className="bg-[#03A64A] text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                                            OFERTA IMPERDÍVEL
                                        </span>

                                        <Image
                                            className="relative z-10 mx-auto my-6 transition-all duration-500 group-hover:scale-110"
                                            src={`https://admin.eletrosystemti.com.br/uploads/${product.image}`}
                                            alt={product.name}
                                            width={180}
                                            height={180}
                                        />

                                        <h3 className="relative z-10 text-center font-semibold text-lg mb-2">
                                            {product.name}
                                        </h3>

                                        <span className="bg-red-500 absolute top-2 right-2 text-white text-sm font-bold px-3 py-1 rounded-md mb-3">
                                            -{product.discount}%
                                        </span>

                                        <div className="flex flex-col items-center gap-1 mb-6">
                                            <span className="text-gray-400 text-sm line-through">
                                                {Intl.NumberFormat('pt-br', {
                                                    style: 'currency', currency: 'BRL'
                                                }).format(Number(product.oldPrice))}
                                            </span>

                                            <span className="text-3xl font-bold text-[#03A64A]">
                                                {Intl.NumberFormat('pt-br', {
                                                    style: 'currency', currency: 'BRL'
                                                }).format(Number(product.price))}
                                            </span>
                                            <span className="text-xs text-green-400 font-medium">
                                                Economize {
                                                    Intl.NumberFormat('pt-br', {
                                                        style: 'currency', currency: 'BRL'
                                                    }).format(Number(product.oldPrice - product.price))
                                                }
                                            </span>
                                        </div>

                                        <button
                                            className="cursor-pointer relative z-10 w-full py-3 bg-gradient-to-r from-[#33945E] to-[#03A64A] rounded-lg font-semibold transition-all duration-300 hover:brightness-110">
                                            Adicionar ao carrinho
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </section>
                )
            }
        </>
    );
}