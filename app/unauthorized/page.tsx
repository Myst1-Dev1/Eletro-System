'use client';

import { LockSimpleIcon, HouseLineIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UnauthorizedPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-[#111] border border-white/10 p-10 rounded-3xl text-center shadow-2xl relative overflow-hidden"
            >
                {/* Efeito de glitch/alerta sutil */}
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.5)]" />

                <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/10 rounded-full mb-6 border border-red-500/20">
                        <LockSimpleIcon size={44} className="text-red-500" />
                    </div>

                    <h1 className="text-3xl font-bold text-white mb-2">Acesso Negado</h1>
                    <p className="text-gray-400 mb-8">
                        Para acessar nossa loja e conferir ofertas exclusivas, por favor, realize o login.
                    </p>

                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-all border border-white/10"
                    >
                        <HouseLineIcon size={20} />
                        Voltar para o Início
                    </Link>
                </div>

                {/* Efeito de luz ambiente vermelha */}
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-red-600 opacity-5 blur-[80px] rounded-full" />
            </motion.div>
        </div>
    );
}
