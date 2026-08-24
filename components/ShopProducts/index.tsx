'use client'

import { ShoppingCartIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import { Pagination } from "../Produtos/Pagination";
import { useCartStore } from "@/stores/useCartStore";
import Link from "next/link";

const products = [
    {
        id: 1,
        type: 'periférico',
        image: '/images/produto.webp',
        name: 'Fone bluetooth',
        description: 'Este fone é muito boom',
        price: 135.90,
    },
    {
        id: 2,
        type: 'periférico',
        image: '/images/produto.webp',
        name: 'Fone bluetooth 2',
        description: 'Este fone é muito boom',
        price: 135.90,
    },
    {
        id: 3,
        type: 'periférico',
        image: '/images/produto.webp',
        name: 'Fone bluetooth 3',
        description: 'Este fone é muito boom',
        price: 135.90,
    },
    {
        id: 4,
        type: 'periférico',
        image: '/images/produto.webp',
        name: 'Fone bluetooth',
        description: 'Este fone é muito boom',
        price: 135.90,
    },
    {
        id: 5,
        type: 'periférico',
        image: '/images/produto.webp',
        name: 'Fone bluetooth',
        description: 'Este fone é muito boom',
        price: 135.90,
    },
    {
        id: 6,
        type: 'periférico',
        image: '/images/produto.webp',
        name: 'Fone bluetooth',
        description: 'Este fone é muito boom',
        price: 135.90,
    }
]

export function ShopProducts() {
    const [currentPage, setCurrentPage] = useState(1);

    const { addToCart } = useCartStore();

    const itemsPerPage = 3

    const totalPages = Math.ceil(products?.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = products?.slice(startIndex, endIndex);

    return (
        <>
            <div id="produtos" className="py-24 grid grid-cols-1 gap-10 lg:grid-cols-3 2xl:grid-cols-4">
               {currentItems.map(product => (
                <div key={product.id} className="group relative max-w-sm w-full bg-zinc-900/60 border border-zinc-800/80 hover:border-[#0BD061]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(11,208,97,0.12)] flex flex-col justify-between backdrop-blur-sm overflow-hidden">
    
                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#0BD061]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0BD061]/20 transition-all duration-300" />

                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <span className="px-2.5 py-1 uppercase text-[10px] font-mono font-bold tracking-widest text-[#0BD061] border border-[#0BD061]/30 bg-[#0BD061]/10 rounded-md">
                                {product.type}
                            </span>

                            <Link 
                                href={`/produto/${product.id}`}
                                className="text-xs text-zinc-400 hover:text-white transition-all duration-500 underline-offset-4 hover:underline"
                            >
                                Ver produto
                            </Link>
                        </div>

                        <div className="relative w-full h-52 my-2 flex items-center justify-center">
                        <Image 
                            src={product.image} 
                            className="object-contain max-h-full w-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300" 
                            width={400} 
                            height={400} 
                            alt={product.name} 
                        />
                        </div>

                        <div className="mt-4">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#0BD061] transition-colors leading-snug">
                            {product.name}
                        </h3>
                        <p className="line-clamp-2 text-xs text-zinc-400 mt-1.5 leading-relaxed font-normal">
                            {product.description}
                        </p>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
                        <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">Preço à vista</span>
                        <h4 className="text-xl font-extrabold text-[#0BD061]">
                            {Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(product.price)}
                        </h4>
                        </div>

                        <button onClick={() => addToCart(product)} className="cursor-pointer flex items-center gap-2 bg-[#0BD061] hover:bg-[#09b353] text-black font-bold px-4 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-[0_0_15px_rgba(11,208,97,0.2)] active:scale-95">
                        <ShoppingCartIcon className="w-4 h-4 stroke-[2.5]" />
                        <span>Comprar</span>
                        </button>
                    </div>
                </div>
               ))}
            </div>
            <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
        </>
    )
}