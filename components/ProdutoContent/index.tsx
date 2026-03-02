'use client';

import { useCartStore } from '@/stores/useCartStore';
import { useState } from 'react';
import {
    ShoppingCartIcon,
    MinusIcon,
    PlusIcon,
    ShieldCheckIcon,
    TruckIcon,
    ArrowsCounterClockwiseIcon
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Image from 'next/image';

interface ProdutoContentProps {
    product: any;
}

export function ProdutoContent({ product }: ProdutoContentProps) {
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCartStore();

    const productData = product?.data;

    const formattedPrice = Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(Number(productData?.price));

    return (
        <section className="min-h-screen bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* COLUNA DA IMAGEM (6 COLUNAS) */}
                    <div className="lg:col-span-7 relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="sticky top-24 bg-[#0d0d0d] border border-white/5 rounded-[3rem] p-12 flex justify-center items-center overflow-hidden"
                        >
                            {/* Glow de fundo dinâmico */}
                            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#03A64A]/10 blur-[120px] rounded-full group-hover:bg-[#03A64A]/20 transition-colors duration-700' />

                            <Image
                                src={`https://admin.eletrosystemti.com.br/uploads/${productData?.image}`}
                                width={400}
                                height={400}
                                alt={productData?.name}
                                className="max-h-[500px] w-auto z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Tag de Zoom/Preview */}
                            {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                Visualização em Alta Resolução
                            </div> */}
                        </motion.div>
                    </div>

                    {/* COLUNA DE COMPRA (5 COLUNAS) */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-8">

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-[#03A64A] text-black px-3 py-1 rounded-md">
                                    {productData?.category?.name}
                                </span>
                                {productData?.quantity > 0 && (
                                    <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#03A64A] uppercase tracking-widest">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#03A64A] animate-pulse" />
                                        Pronta Entrega
                                    </span>
                                )}
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.1]">
                                {productData?.name}
                            </h1>

                            <p className="text-zinc-500 text-lg leading-relaxed font-medium">
                                {productData?.short_description}
                            </p>
                        </div>

                        {/* PREÇO E ESTOQUE */}
                        <div className="p-8 bg-[#0d0d0d] border border-white/5 rounded-[2rem] space-y-6">
                            <div className="flex flex-col">
                                <span className="text-zinc-500 text-xs uppercase font-bold tracking-widest mb-1">Preço Especial</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-black text-[#03A64A] tracking-tighter">
                                        {formattedPrice}
                                    </span>
                                    <span className="text-zinc-600 line-through text-sm font-bold">
                                        {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(productData?.price) * 1.15)}
                                    </span>
                                </div>
                            </div>

                            {/* SELETOR DE QUANTIDADE */}
                            <div className="flex items-center justify-between py-4 border-y border-white/5">
                                <span className="font-bold text-sm uppercase tracking-widest text-zinc-400">Quantidade</span>
                                <div className="flex items-center bg-black border border-white/10 rounded-xl p-1">
                                    <button
                                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                        className="w-10 h-10 flex items-center justify-center hover:bg-white/5 transition-colors rounded-lg text-zinc-400"
                                    >
                                        <MinusIcon weight="bold" />
                                    </button>
                                    <span className="w-12 text-center font-black text-lg">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(prev => Math.min(productData?.quantity, prev + 1))}
                                        className="w-10 h-10 flex items-center justify-center hover:bg-white/5 transition-colors rounded-lg text-[#03A64A]"
                                    >
                                        <PlusIcon weight="bold" />
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => addToCart(productData, quantity)}
                                disabled={productData?.quantity === 0}
                                className="cursor-pointer w-full bg-[#03A64A] hover:bg-[#028a3d] disabled:bg-zinc-800 disabled:text-zinc-500 text-black h-16 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform active:scale-95"
                            >
                                <ShoppingCartIcon size={24} weight="bold" />
                                Adicionar ao Carrinho
                            </button>
                        </div>

                        {/* BENEFÍCIOS RÁPIDOS */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { icon: <ShieldCheckIcon size={20} />, label: "Garantia Eletro" },
                                { icon: <TruckIcon size={20} />, label: "Envio Seguro" },
                                { icon: <ArrowsCounterClockwiseIcon size={20} />, label: "Troca Fácil" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                                    <div className="text-[#03A64A]">{item.icon}</div>
                                    <span className="text-[10px] font-bold uppercase text-zinc-500 tracking-tighter">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ABA DE DESCRIÇÃO */}
                <div className="mt-32">
                    <div className="inline-block border-b-2 border-[#03A64A] pb-2 mb-12">
                        <h2 className="text-2xl font-black uppercase tracking-widest">
                            Especificações Técnicas
                        </h2>
                    </div>

                    <div
                        className="prose prose-invert max-w-none text-zinc-400 leading-relaxed 
                        prose-h3:text-white prose-h3:font-black prose-strong:text-white prose-p:mb-6"
                        dangerouslySetInnerHTML={{ __html: productData?.description }}
                    />
                </div>
            </div>
        </section>
    );
}