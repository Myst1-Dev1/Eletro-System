'use client';

import { ShieldCheckIcon, TruckIcon, HeadsetIcon, CreditCardIcon } from "@phosphor-icons/react";

const features = [
    {
        icon: <TruckIcon size={32} className="text-[#03A64A]" />,
        title: "Entrega Rápida",
        description: "Logística otimizada para seus equipamentos chegarem em tempo recorde."
    },
    {
        icon: <ShieldCheckIcon size={32} className="text-[#03A64A]" />,
        title: "Garantia Estendida",
        description: "Segurança total com suporte direto da nossa assistência técnica."
    },
    {
        icon: <HeadsetIcon size={32} className="text-[#03A64A]" />,
        title: "Suporte VIP",
        description: "Atendimento especializado para clientes com contrato ativo."
    },
    {
        icon: <CreditCardIcon size={32} className="text-[#03A64A]" />,
        title: "Pagamento Facilitado",
        description: "Condições exclusivas de faturamento para sua empresa."
    }
];

export function Features() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Porque nos escolher a{" "}
                        <span className="bg-gradient-to-r from-[#33945E] to-[#03A64A] bg-clip-text text-transparent">
                            Eletro System ?
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Confira nossos diferenciais.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-[#03A64A]/50 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 rounded-xl bg-green-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}