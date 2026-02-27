'use client';

import Link from "next/link";
import { useCartStore } from "@/stores/useCartStore";
import Image from "next/image";
import { useUserStore } from "@/stores/useUserStore";
import { ProductSkeleton } from "../Skeleton/ProductSkeleton";

interface ProductBoxProps {
    id: number;
    name: string;
    price: number;
    priceOld: number;
    discount: number;
    image: string;
    length: number;
}

export function ProductBox({ id, name, price, priceOld, discount, image, length }: ProductBoxProps) {
    const { addToCart } = useCartStore();
    const { isLoading } = useUserStore();

    return (
        <>
            {isLoading ? (
                <ProductSkeleton length={length} />
            ) : (
                <div
                    key={id}
                    className="group h-72 flex flex-col justify-center items-center relative bg-[#111] border border-white/10 rounded-xl p-5 hover:border-[#03A64A] transition-all duration-500 hover:-translate-y-2"
                >
                    <Link href={`/produto/${id}`} className="block">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#0BD061] blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        {priceOld &&
                            (
                                <>
                                    <span className="bg-[#03A64A] text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                                        OFERTA IMPERDÍVEL
                                    </span>
                                    <span className="bg-red-500 absolute top-2 right-2 text-white text-sm font-bold px-3 py-1 rounded-md mb-3">
                                        -{discount}%
                                    </span>
                                </>
                            )}
                        <Image
                            className="relative z-10 mx-auto mb-4 transition-all duration-500 group-hover:scale-110"
                            src={`https://admin.eletrosystemti.com.br/uploads/${image}`}
                            alt={name}
                            width={180}
                            height={180}
                        />

                        <h3 className="relative z-10 text-center font-semibold text-lg mb-2 text-white">
                            {name}
                        </h3>

                        {priceOld && <span className="text-gray-400 text-sm line-through">
                            {Intl.NumberFormat('pt-br', {
                                style: 'currency', currency: 'BRL'
                            }).format(Number(priceOld))}
                        </span>}
                        <h4 className="relative z-10 text-center font-bold text-2xl text-[#03A64A]">
                            R$ {price}
                        </h4>
                        {priceOld &&
                            <span className="text-xs text-green-400 font-medium">
                                Economize {
                                    Intl.NumberFormat('pt-br', {
                                        style: 'currency', currency: 'BRL'
                                    }).format(Number(priceOld - price))
                                }
                            </span>
                        }
                    </Link>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart({ id, name, price, image });
                        }}
                        className="cursor-pointer relative z-30 mt-5 w-full py-3 bg-gradient-to-r from-[#33945E] to-[#03A64A] rounded-lg font-semibold hover:opacity-100 transition-opacity"
                    >
                        Adicionar ao carrinho
                    </button>
                </div>
            )}
        </>
    )
}