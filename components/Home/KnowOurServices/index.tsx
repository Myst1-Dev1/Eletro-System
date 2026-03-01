'use client';

import { CpuIcon, WrenchIcon, GlobeIcon, ShieldCheckIcon, DatabaseIcon, WifiHighIcon, CaretRightIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        id: 1,
        serviceName: 'Suporte Técnico',
        description: 'Solução rápida e personalizada para problemas críticos, com atendimento remoto ou presencial imediato.',
        icon: <WrenchIcon size={48} weight="duotone" />,
        highlight: true
    },
    {
        id: 2,
        serviceName: 'Segurança Cibernética',
        description: 'Proteção contra invasões, remoção de malwares e blindagem de dados sensíveis da sua empresa.',
        icon: <ShieldCheckIcon size={48} weight="duotone" />,
        highlight: false
    },
    {
        id: 3,
        serviceName: 'Infraestrutura',
        description: 'Planejamento e controle de inventário tecnológico para otimizar processos e reduzir custos fixos.',
        icon: <CpuIcon size={48} weight="duotone" />,
        highlight: true
    },
    {
        id: 4,
        serviceName: 'Migração de Dados',
        description: 'Transição segura de informações entre servidores locais ou nuvem com integridade garantida.',
        icon: <DatabaseIcon size={48} weight="duotone" />,
        highlight: false
    },
    {
        id: 5,
        serviceName: 'Rede e Servidores',
        description: 'Implementação e administração completa de parques tecnológicos de alto desempenho.',
        icon: <GlobeIcon size={48} weight="duotone" />,
        highlight: true
    },
    {
        id: 6,
        serviceName: 'Wi-Fi e Internet',
        description: 'Conectividade de alta velocidade com gerenciamento de tráfego e segurança de ponta.',
        icon: <WifiHighIcon size={48} weight="duotone" />,
        highlight: false
    },
]

export function KnowOurServices() {
    return (
        <section className="bg-black py-32 overflow-hidden">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center text-center mb-24 relative">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#03A64A]/20 bg-[#03A64A]/5 text-[#03A64A] text-[10px] uppercase tracking-[0.3em] font-black mb-6">
                        <CpuIcon size={16} weight="fill" className="animate-pulse" />
                        <span>Gestão Inteligente</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">
                        Soluções em TI que <br />
                        <span className="text-[#03A64A] italic">impulsionam negócios.</span>
                    </h2>

                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                        Descomplique sua infraestrutura com a <span className="text-white">EletroSystem</span>.
                        Focamos na tecnologia para que você foque no que realmente importa: **seu crescimento.**
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`
                                group relative p-10 rounded-[2.5rem] transition-all duration-500 flex flex-col gap-6
                                ${service.highlight
                                    ? 'bg-gradient-to-br from-[#03A64A] to-[#027333] text-black'
                                    : 'bg-[#0d0d0d] border border-white/5 text-white hover:border-[#03A64A]/50'}
                            `}
                        >
                            <div className={`
                                w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                                ${service.highlight ? 'bg-black/10' : 'bg-[#03A64A]/10 text-[#03A64A]'}
                            `}>
                                {service.icon}
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-2xl font-black tracking-tighter uppercase leading-tight">
                                    {service.serviceName}
                                </h3>
                                <p className={`
                                    text-sm leading-relaxed font-medium
                                    ${service.highlight ? 'text-black/80' : 'text-gray-500 group-hover:text-gray-300'}
                                `}>
                                    {service.description}
                                </p>
                            </div>

                            <Link href="/servicos" className="mt-auto pt-4 flex items-center gap-2 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-105">
                                Saiba Mais <CaretRightIcon weight="bold" />
                            </Link>
                            {!service.highlight && (
                                <div className="absolute inset-0 rounded-[2.5rem] bg-[#03A64A]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none blur-xl" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    )
}