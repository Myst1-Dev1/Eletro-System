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
                    className="group flex flex-col bg-[#111] border border-white/10 rounded-xl p-5 
  hover:border-[#03A64A] transition-all duration-500 hover:-translate-y-2 h-full"
                >
                    <Link href={`/produto/${id}`} className="flex flex-col flex-1">

                        {priceOld && (
                            <>
                                <span className="absolute top-3 left-3 bg-[#03A64A] text-xs font-semibold px-3 py-1 rounded-full">
                                    OFERTA
                                </span>
                                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                                    -{discount}%
                                </span>
                            </>
                        )}

                        <div className="relative w-full h-40 flex items-center justify-center mb-4">
                            <Image
                                src={`https://admin.eletrosystemti.com.br/uploads/${image}`}
                                alt={name}
                                fill
                                className="object-contain transition-all duration-500 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="text-center font-semibold text-white text-base min-h-[48px] line-clamp-2">
                            {name}
                        </h3>

                        <div className="mt-2 min-h-[70px] flex flex-col items-center justify-center">
                            {priceOld && (
                                <span className="text-gray-400 text-sm line-through">
                                    {Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(Number(priceOld))}
                                </span>
                            )}

                            <h4 className="font-bold text-2xl text-[#03A64A]">
                                {Intl.NumberFormat('pt-br', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(Number(price))}
                            </h4>

                            {priceOld && (
                                <span className="text-xs text-green-400">
                                    Economize{" "}
                                    {Intl.NumberFormat('pt-br', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(Number(priceOld - price))}
                                </span>
                            )}
                        </div>
                    </Link>

                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            addToCart({ id, name, price, image });
                        }}
                        className="cursor-pointer mt-4 w-full py-3 bg-gradient-to-r from-[#33945E] to-[#03A64A] 
    rounded-lg font-semibold hover:opacity-90 transition"
                    >
                        Adicionar ao carrinho
                    </button>
                </div>
            )}
        </>
    )
}