'use client';

import { useCartStore } from '@/stores/useCartStore';
import { useState } from 'react';

interface ProdutoContentProps {
    product: any;
}

export function ProdutoContent({ product }: ProdutoContentProps) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCartStore();

    const productData = product?.data;

    return (
        <>

            <div className="max-w-7xl mx-auto px-6 py-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="relative bg-black/40 shadow-green-500/20 shadow-xl rounded-2xl p-8 flex justify-center">
                        <img
                            src={`https://admin.eletrosystemti.com.br/uploads/${productData?.image}`}
                            alt={productData?.name}
                            className="max-h-[450px] z-10 object-contain"
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-56 h-56 z-0 bg-green-500/20 blur-xl rounded-full' />
                    </div>

                    <div className="flex flex-col justify-center space-y-6">

                        <span className="text-sm bg-green-600/20 text-green-400 px-4 py-1 rounded-full w-fit">
                            {productData?.category?.name}
                        </span>

                        <h1 className="text-4xl font-bold tracking-tight">
                            {productData?.name}
                        </h1>

                        <p className="text-zinc-400 text-lg">
                            {productData?.short_description}
                        </p>

                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-green-400">
                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(productData?.price))}
                            </span>

                            {productData?.quantity > 0 ? (
                                <span className="text-sm text-emerald-400">
                                    Em estoque ({productData?.quantity})
                                </span>
                            ) : (
                                <span className="text-sm text-red-400">
                                    Fora de estoque
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-4">
                            <span>Quantidade:</span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center cursor-pointer"
                                >
                                    -
                                </button>
                                <span>{quantity}</span>
                                <button
                                    onClick={() => setQuantity(prev => Math.min(productData?.quantity, prev + 1))}
                                    className="w-8 h-8 bg-zinc-800 border border-zinc-700 rounded-lg flex items-center justify-center cursor-pointer"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() => addToCart(productData, quantity)}
                            className="btn-secondary cursor-pointer"
                            disabled={productData?.quantity === 0}
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-2xl font-bold mb-6 border-b border-zinc-800 pb-4">
                        Descrição do Produto
                    </h2>

                    <div
                        className="prose prose-invert max-w-none text-zinc-300"
                        dangerouslySetInnerHTML={{ __html: productData?.description }}
                    />
                </div>
            </div>
        </>
    )
}