'use client';

import { X } from "@phosphor-icons/react";
import Image from "next/image";

interface CartProps {
    isCartOpen: boolean;
    setIsCartOpen: (isCartOpen: boolean) => void;
}

export function Cart({ isCartOpen, setIsCartOpen }: CartProps) {
    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsCartOpen(false)}
            />
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#0f0f0f] z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${isCartOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <h2 className="text-xl font-semibold">Seu Carrinho</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="cursor-pointer p-2 rounded-lg hover:bg-white/10 transition"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">

                    <div className="flex gap-4">
                        <Image src="/images/produto.webp" alt="Logo" width={200} height={200} className="w-20 h-20 bg-white/10 rounded-lg" />

                        <div className="flex flex-col justify-between flex-1">
                            <div>
                                <p className="font-medium">Notebook Dell Inspiron</p>
                                <p className="text-sm text-gray-400">Qtd: 1</p>
                            </div>

                            <p className="font-semibold text-[#03A64A]">
                                R$ 3.499,00
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Image src="/images/produto.webp" alt="Logo" width={200} height={200} className="w-20 h-20 bg-white/10 rounded-lg" />

                        <div className="flex flex-col justify-between flex-1">
                            <div>
                                <p className="font-medium">Notebook Dell Inspiron</p>
                                <p className="text-sm text-gray-400">Qtd: 1</p>
                            </div>

                            <p className="font-semibold text-[#03A64A]">
                                R$ 3.499,00
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Image src="/images/produto.webp" alt="Logo" width={200} height={200} className="w-20 h-20 bg-white/10 rounded-lg" />

                        <div className="flex flex-col justify-between flex-1">
                            <div>
                                <p className="font-medium">Notebook Dell Inspiron</p>
                                <p className="text-sm text-gray-400">Qtd: 1</p>
                            </div>

                            <p className="font-semibold text-[#03A64A]">
                                R$ 3.499,00
                            </p>
                        </div>
                    </div>

                </div>
                <div className="border-t border-white/10 p-6 space-y-4">

                    <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-[#03A64A]">R$ 3.499,00</span>
                    </div>

                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#33945E] to-[#03A64A] font-semibold hover:brightness-110 transition">
                        Finalizar Pedido
                    </button>
                </div>
            </div>
        </>
    );
}