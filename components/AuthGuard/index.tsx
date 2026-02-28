'use client';

import { useUIStore } from "@/stores/useUIStore";
import { LockKeyIcon } from "@phosphor-icons/react";

export function AuthGuard() {
    const { openLoginModal } = useUIStore();

    return (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-2xl transition-all duration-300">
            <div className="bg-[#111]/80 mx-auto h-auto my-20 border border-white/10 shadow-2xl rounded-2xl p-10 max-w-md text-center animate-fadeIn">

                <LockKeyIcon size={48} className="text-amber-500 mb-4 mx-auto" weight="duotone" />

                <h3 className="text-2xl font-bold mb-3">
                    Área exclusiva para clientes
                </h3>

                <p className="text-gray-400 mb-6">
                    Somente clientes com contrato com a EletroSystem tem acesso aos produtos.
                </p>

                <button
                    onClick={openLoginModal}
                    className="cursor-pointer inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#33945E] to-[#03A64A] font-semibold hover:brightness-110 transition"
                >
                    Fazer Login
                </button>
            </div>
        </div>
    );
}