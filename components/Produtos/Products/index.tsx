'use client';

import { useCartStore } from "@/stores/useCartStore";
import Image from "next/image";
import Link from "next/link";

interface ProductsProps {
    products: any;
}

export function Products({ products }: ProductsProps) {
    const { addToCart } = useCartStore();

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                {products?.map((product: any) => (
                    <div
                        key={product.id}
                        className="group relative h-72 flex flex-col justify-center items-center bg-[#111] border border-white/10 rounded-xl p-5 hover:border-[#03A64A] transition-all duration-500 hover:-translate-y-2"
                    >
                        <Link href={`/produto/${product.id}`} className="block">
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#0BD061] blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
                            </div>

                            <Image
                                className="relative z-10 mx-auto mb-4 transition-all duration-500 group-hover:scale-110"
                                src={`https://admin.eletrosystemti.com.br/uploads/${product.image}`}
                                alt={product.name}
                                width={180}
                                height={180}
                            />

                            <h3 className="relative z-10 text-center font-semibold text-lg mb-2 text-white">
                                {product.name}
                            </h3>

                            <h4 className="relative z-10 text-center font-bold text-2xl text-[#03A64A]">
                                R$ {product.price}
                            </h4>
                        </Link>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                addToCart(product);
                            }}
                            className="cursor-pointer relative z-30 mt-5 w-full py-3 bg-gradient-to-r from-[#33945E] to-[#03A64A] rounded-lg font-semibold hover:opacity-100 transition-opacity"
                        >
                            Adicionar ao carrinho
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}