'use client';

import { useState } from "react";
import {
    CheckCircleIcon,
    DesktopIcon,
    MonitorIcon,
    GearIcon,
    CaretRightIcon,
    StarIcon
} from "@phosphor-icons/react";
import Image from "next/image";

const servicosDados = [
    {
        id: 1,
        titulo: "Montagem de PC Gamer",
        descricao: "Engenharia de hardware focada em extrair cada frame. Montagem profissional com cable management avançado e otimização de fluxo de ar.",
        detalhes: ["Otimização de Airflow", "Instalação de Water Cooler", "Configuração de RGB", "Teste de Stress"],
        imagem: "/images/montagem.webp"
    },
    {
        id: 2,
        titulo: "Limpeza Preventiva",
        descricao: "Seu setup novo, de novo. Remoção química de resíduos, troca de pasta térmica premium e lubrificação técnica de fans.",
        detalhes: ["Pasta Térmica Grizzly", "Limpeza Química", "Banho Ultrassônico", "Redução de Ruído"],
        imagem: "/images/limpeza.webp"
    },
];

export default function Servicos() {
    const [servicoAtivo, setServicoAtivo] = useState<any>(servicosDados[0]);

    return (
        <div className="py-24 bg-black min-h-screen">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="space-y-10">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03A64A]/10 border border-[#03A64A]/20 text-[#03A64A] text-xs font-bold uppercase tracking-widest">
                            <GearIcon size={16} className="animate-spin-slow" />
                            <span>Expertise Técnica</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter text-white">
                            Soluções que elevam seu <br />
                            <span className="text-[#03A64A] bg-clip-text text-transparent bg-gradient-to-r from-[#03A64A] to-[#4ade80]">
                                Setup ao nível Pro.
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                            Não fazemos apenas reparos, entregamos performance. Nossos processos seguem padrões internacionais de manutenção eletrônica.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {[
                            { t: "Diagnóstico Avançado", d: "Identificação precisa via software e hardware." },
                            { t: "Peças Homologadas", d: "Apenas componentes de alta condutividade e durabilidade." },
                            { t: "Garantia de Performance", d: "Seu PC volta mais rápido do que quando era novo." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-[#0a0a0a] group hover:border-[#03A64A]/30 transition-all">
                                <div className="p-2 bg-[#03A64A]/10 rounded-lg group-hover:bg-[#03A64A] group-hover:text-black transition-colors">
                                    <CheckCircleIcon size={24} weight="bold" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white transition-colors">{item.t}</h4>
                                    <p className="text-sm text-gray-500">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative flex flex-col gap-6">

                    <div className="flex flex-wrap gap-3 justify-end mb-4">
                        {servicosDados.map((servico) => (
                            <button
                                key={servico.id}
                                onClick={() => setServicoAtivo(servico)}
                                className={`
                                    cursor-pointer flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all duration-300 font-bold text-sm
                                    ${servicoAtivo?.id === servico.id
                                        ? 'bg-[#03A64A] border-[#03A64A] text-black shadow-[0_0_20px_rgba(3,166,74,0.4)]'
                                        : 'bg-[#0d0d0d] border-white/10 text-gray-500 hover:border-white/30 hover:text-white'}
                                `}
                            >
                                <MonitorIcon size={20} weight={servicoAtivo?.id === servico.id ? "fill" : "bold"} />
                                {servico.titulo}
                            </button>
                        ))}
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-[#03A64A]/20 rounded-[2.5rem] blur-2xl transition duration-500 group-hover:opacity-100 opacity-50" />

                        <div className="relative bg-[#0d0d0d] border border-white/10 rounded-[2.5rem] overflow-hidden p-8 shadow-2xl">

                            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                <div className="flex-1 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-[#03A64A]/10 rounded-xl flex items-center justify-center text-[#03A64A]">
                                            <DesktopIcon size={28} weight="duotone" />
                                        </div>
                                        <h3 className="text-2xl font-black text-white">{servicoAtivo.titulo}</h3>
                                    </div>

                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {servicoAtivo.descricao}
                                    </p>

                                    <div className="grid grid-cols-2 gap-y-3">
                                        {servicoAtivo.detalhes.map((detalhe: any, idx: number) => (
                                            <div key={idx} className="flex items-center gap-2 text-[11px] font-bold text-gray-300 uppercase tracking-wider">
                                                <StarIcon size={14} weight="fill" className="text-[#03A64A]" /> {detalhe}
                                            </div>
                                        ))}
                                    </div>

                                    <button className="cursor-pointer transition-all duration-500 w-full flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 hover:bg-[#03A64A] hover:text-black transition-all rounded-2xl font-black group">
                                        Solicitar Orçamento <CaretRightIcon size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                                <div className="w-full md:w-56 h-72 relative rounded-md overflow-hidden border border-white/10">
                                    <Image
                                        src={servicoAtivo.imagem}
                                        alt={servicoAtivo.titulo}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mini Depoimento Contextual */}
                    {/* <div className="ml-auto flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <div className="text-right">
                            <p className="text-[10px] text-[#03A64A] font-black uppercase tracking-widest italic leading-none">Último serviço concluído</p>
                            <p className="text-sm font-bold text-white">"Ficou melhor que novo!"</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-800 border-2 border-[#03A64A] flex items-center justify-center font-bold text-[10px]">JD</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}