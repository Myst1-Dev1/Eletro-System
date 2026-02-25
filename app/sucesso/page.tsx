'use client';

import { CheckCircleIcon, ShoppingBagIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function SucessoPage() {

    useEffect(() => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#33945E', '#03A64A', '#ffffff']
        });
    }, []);

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-md w-full bg-[#111] border border-white/10 p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                {/* Efeito de luz no fundo */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#03A64A] opacity-10 blur-[80px] rounded-full" />

                <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
                        <CheckCircleIcon size={44} className="text-[#03A64A] animate-bounce" />
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-2">Pedido Realizado!</h1>
                    <p className="text-gray-400 mb-8">
                        Seu pedido foi processado com sucesso. Você receberá os detalhes no seu e-mail em instantes.
                    </p>

                    <div className="space-y-4">
                        <Link
                            href="/pedidos"
                            className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#33945E] to-[#03A64A] text-white font-bold rounded-xl hover:brightness-110 transition-all shadow-[0_0_20px_rgba(3,166,74,0.2)]"
                        >
                            <ShoppingBagIcon size={18} />
                            Meus Pedidos
                        </Link>

                        <Link
                            href="/produtos"
                            className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 text-gray-300 font-semibold rounded-xl hover:bg-white/10 transition-all border border-white/10"
                        >
                            Continuar Comprando
                            <ArrowRightIcon size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}