'use client';

import { ShieldCheckIcon, LightningIcon, HeadsetIcon, CpuIcon, SparkleIcon } from "@phosphor-icons/react";

const features = [
    {
        icon: <LightningIcon size={32} weight="duotone" />,
        title: "Agilidade",
        description: "Entendemos que você não pode ficar desconectado. Reparos expressos realizados no menor tempo possível."
    },
    {
        icon: <ShieldCheckIcon size={32} weight="duotone" />,
        title: "Garantia",
        description: "Sua tranquilidade é nossa prioridade. Oferecemos garantia de qualidade e durabilidade."
    },
    {
        icon: <HeadsetIcon size={32} weight="duotone" />,
        title: "Suporte VIP",
        description: "Atendimento especializado para clientes com contrato ativo."
    },
    {
        icon: <CpuIcon size={32} weight="duotone" />,
        title: "Peças originais",
        description: "Qualidade sem compromisso. Utilizamos apenas componentes certificados e de procedencia garantida."
    }
];

export function Features() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#03A64A]/50 to-transparent" />

            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-[#03A64A] font-bold text-sm uppercase tracking-tighter mb-4">
                            <SparkleIcon size={20} weight="fill" />
                            <span>Diferenciais</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Por que escolher a <br />
                            <span className="text-[#03A64A]">EletroSystem?</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-xs text-lg border-l border-[#03A64A] pl-6 py-2">
                        Excelência técnica e compromisso com a sua produtividade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-[2rem] bg-[#0a0a0a] border border-white/5 hover:border-[#03A64A]/30 transition-all duration-500 overflow-hidden"
                        >
                            {/* Efeito de Spotlight no Hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#03A64A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-[#03A64A] group-hover:bg-[#03A64A] group-hover:text-black transition-all duration-500 shadow-xl">
                                    {feature.icon}
                                </div>

                                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#03A64A] transition-colors">
                                    {feature.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Detalhe Decorativo Inferior */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#03A64A] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}