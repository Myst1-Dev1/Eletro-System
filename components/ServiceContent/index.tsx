'use client';

import { useState } from "react";
import {
    DesktopIcon,
    CaretRightIcon,
    StarIcon,
    ShieldCheckIcon,
    WrenchIcon,
    LightningIcon
} from "@phosphor-icons/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const servicosDados = [
    {
        id: 1,
        titulo: "Montagem de PC Gamer",
        icon: <DesktopIcon size={24} />,
        descricao: "Engenharia de hardware focada em extrair cada frame. Montagem profissional com cable management avançado e otimização de fluxo de ar.",
        detalhes: ["Otimização de Airflow", "Instalação de Water Cooler", "Configuração de RGB", "Teste de Stress"],
        imagem: "/images/montagem.webp",
        tag: "Alta Performance"
    },
    {
        id: 2,
        titulo: "Limpeza Preventiva",
        icon: <WrenchIcon size={24} />,
        descricao: "Seu setup novo, de novo. Remoção química de resíduos, troca de pasta térmica premium e lubrificação técnica de fans.",
        detalhes: ["Pasta Térmica Grizzly", "Limpeza Química", "Banho Ultrassônico", "Redução de Ruído"],
        imagem: "/images/limpeza.webp",
        tag: "Longevidade"
    },
];

export default function ServiceContent() {
    const [servicoAtivo, setServicoAtivo] = useState(servicosDados[0]);

    return (
        <div className="py-24 bg-black min-h-screen overflow-hidden">
            <div className="container mx-auto px-6">

                {/* Header da Página */}
                <div className="mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03A64A]/10 border border-[#03A64A]/20 text-[#03A64A] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                        <LightningIcon size={14} weight="fill" />
                        <span>Workstation de Elite</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[0.9]">
                        Expertise que <br />
                        <span className="text-[#03A64A] italic">eleva o nível.</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    <div className="lg:col-span-5 space-y-8">

                        <div className="flex flex-col gap-3">
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-2">Selecione o Serviço</p>
                            {servicosDados.map((servico) => (
                                <button
                                    key={servico.id}
                                    onClick={() => setServicoAtivo(servico)}
                                    className={`
                                        group relative flex items-center justify-between p-6 rounded-[2rem] border transition-all duration-500
                                        ${servicoAtivo.id === servico.id
                                            ? 'bg-[#03A64A] border-[#03A64A] text-black shadow-[0_20px_40px_rgba(3,166,74,0.2)]'
                                            : 'bg-[#0d0d0d] border-white/5 text-gray-400 hover:border-white/20'}
                                    `}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl ${servicoAtivo.id === servico.id ? 'bg-black text-[#03A64A]' : 'bg-white/5 text-gray-500 group-hover:text-white transition-colors'}`}>
                                            {servico.icon}
                                        </div>
                                        <span className="text-xl font-black tracking-tight">{servico.titulo}</span>
                                    </div>
                                    <CaretRightIcon size={20} weight="bold" className={`${servicoAtivo.id === servico.id ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                                </button>
                            ))}
                        </div>

                        <div className="pt-8 grid gap-4 border-t border-white/5">
                            {[
                                { t: "Diagnóstico Avançado", d: "Precisão via software e hardware." },
                                { t: "Garantia de Performance", d: "Seu PC volta melhor que novo." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start group">
                                    <div className="mt-1 p-1 rounded-full bg-[#03A64A]/20 text-[#03A64A] group-hover:bg-[#03A64A] group-hover:text-black transition-all">
                                        <ShieldCheckIcon size={18} weight="fill" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{item.t}</h4>
                                        <p className="text-xs text-gray-500">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 sticky top-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={servicoAtivo.id}
                                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                                className="relative bg-[#0d0d0d] border border-white/10 rounded-[3rem] overflow-hidden p-8 md:p-12 shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#03A64A]/5 blur-[100px] pointer-events-none" />

                                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-8">
                                        <div>
                                            <span className="px-3 py-1 rounded-md bg-[#03A64A]/10 text-[#03A64A] text-[10px] font-black uppercase tracking-widest">
                                                {servicoAtivo.tag}
                                            </span>
                                            <h3 className="text-3xl md:text-4xl font-black text-white mt-4 tracking-tighter leading-none">
                                                {servicoAtivo.titulo}
                                            </h3>
                                        </div>

                                        <p className="text-gray-400 leading-relaxed font-medium">
                                            {servicoAtivo.descricao}
                                        </p>

                                        <div className="grid gap-3">
                                            {servicoAtivo.detalhes.map((detalhe, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-[11px] font-bold text-gray-300 uppercase tracking-widest bg-white/5 p-3 rounded-xl border border-white/5">
                                                    <StarIcon size={14} weight="fill" className="text-[#03A64A]" />
                                                    {detalhe}
                                                </div>
                                            ))}
                                        </div>

                                        <button className="cursor-pointer w-full flex items-center justify-center gap-3 py-5 bg-[#03A64A] text-black font-black rounded-2xl hover:scale-[1.02] transition-all shadow-[0_15px_30px_rgba(3,166,74,0.2)]">
                                            SOLICITAR ORÇAMENTO <CaretRightIcon size={20} weight="bold" />
                                        </button>
                                    </div>

                                    <div className="relative h-[300px] md:h-auto rounded-[2rem] overflow-hidden border border-white/10 group">
                                        <Image
                                            src={servicoAtivo.imagem}
                                            alt={servicoAtivo.titulo}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-60" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </div>
    );
}