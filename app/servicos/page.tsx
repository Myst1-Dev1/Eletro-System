'use client';

import { useState } from "react";
import {
    CheckCircleIcon,
    DesktopIcon,
    MonitorIcon,
    XIcon
} from "@phosphor-icons/react";
import Image from "next/image";

const servicosDados = [
    {
        id: 1,
        titulo: "Montagem de PC Gamer",
        descricao: "Montagem profissional com cable management avançado, instalação de drivers e testes de benchmark para garantir o máximo desempenho.",
        detalhes: ["Otimização de Airflow", "Instalação de Water Cooler", "Configuração de RGB", "Teste de Stress"],
        imagem: "/images/montagem.webp"
    },
    {
        id: 2,
        titulo: "Limpeza Preventiva",
        descricao: "Remoção completa de poeira, troca de pasta térmica de alta condutividade e lubrificação de fans para evitar superaquecimento.",
        detalhes: ["Pasta Térmica Grizzly", "Limpeza Química", "Banho Ultrassônico", "Redução de Ruído"],
        imagem: "/images/limpeza.webp"
    },
];

export default function Servicos() {
    const [servicoAtivo, setServicoAtivo] = useState<[] | any>(servicosDados[0]);

    return (
        <div className="py-16 px-6">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight uppercase tracking-tight">
                            Conheça nossos serviços de <br />
                            <span className="text-green-500">manutenção e montagem de computadores</span>
                        </h1>
                        <p className="text-gray-400 max-w-md">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-4 items-start group">
                                <CheckCircleIcon size={28} weight="fill" className="text-green-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg group-hover:text-green-400 transition-colors">Diagnóstico Avançado</h4>
                                    <p className="text-sm text-gray-500">Lorem ipsum is simply text of the printing.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative flex flex-col items-end gap-4">

                    {servicoAtivo && (
                        <div className="w-full max-w-md bg-[#121212] border border-white/10 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-300 relative">
                            <button
                                onClick={() => setServicoAtivo(null)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white"
                            >
                                <XIcon size={20} />
                            </button>

                            <div className="cursor-pointer flex gap-4 mb-6">
                                <div className="p-3 bg-green-500/10 rounded-xl">
                                    <DesktopIcon size={32} className="text-green-500" />
                                </div>
                                <h3 className="text-xl font-bold self-center">{servicoAtivo.titulo}</h3>
                            </div>

                            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                {servicoAtivo.descricao}
                            </p>

                            <div className="grid grid-cols-2 gap-3 mb-6 text-[11px] font-semibold text-gray-300">
                                {servicoAtivo.detalhes.map((detalhe: any, idx: number) => (
                                    <div key={idx} className="flex items-center gap-2">
                                        <CheckCircleIcon size={14} className="text-green-500" /> {detalhe}
                                    </div>
                                ))}
                            </div>

                            <Image
                                src={servicoAtivo.imagem}
                                alt={servicoAtivo.titulo}
                                width={500}
                                height={500}
                                className="w-full h-40 object-cover rounded-xl border border-white/5 shadow-inner"
                            />

                            <button className="cursor-pointer btn-secondary mt-5">
                                Solicitar Orçamento
                            </button>
                        </div>
                    )}

                    <div className="flex flex-col gap-3 mt-8 items-end w-full">
                        <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-2 mr-4 font-bold">Diferenciais e Variedades</p>
                        {servicosDados.map((servico) => (
                            <button
                                key={servico.id}
                                onClick={() => setServicoAtivo(servico)}
                                className={`cursor-pointer
                  flex items-center gap-4 px-6 py-3 rounded-full border transition-all duration-300 group w-fit
                  ${servicoAtivo?.id === servico.id
                                        ? 'bg-green-600/10 border-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.3)]'
                                        : 'bg-[#121212] border-white/5 text-gray-400 hover:border-white/20 hover:text-white'}
                `}
                            >
                                <MonitorIcon size={20} weight={servicoAtivo?.id === servico.id ? "fill" : "regular"} />
                                <span className="text-sm font-medium">{servico.titulo}</span>
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            {/* Seção de Depoimentos (Abaixo conforme o print) */}
            {/* <section className="container mx-auto mt-24 pt-12 border-t border-white/5">
                <div className="max-w-md ml-auto">
                    <h4 className="text-sm font-bold text-gray-400 mb-6 flex items-center gap-2 justify-end">
                        Depoimentos de clientes que usaram esse serviço <span className="w-8 h-[1px] bg-green-500"></span>
                    </h4>
                    <div className="space-y-4">
                        {[1, 2].map(i => (
                            <div key={i} className="flex gap-4 items-center justify-end">
                                <div className="text-right">
                                    <p className="text-sm font-bold">John Doe</p>
                                    <p className="text-xs text-gray-500 uppercase">Loja pelo link em 12/10</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-800 border border-green-500/30"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
        </div>
    );
}