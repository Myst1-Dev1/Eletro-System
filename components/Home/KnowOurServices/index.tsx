'use client';

import { CpuIcon, WrenchIcon, GlobeIcon, ShieldCheckIcon, DatabaseIcon, WifiHighIcon, CaretRightIcon, DesktopTowerIcon, LaptopIcon, DesktopIcon, PrinterIcon, SecurityCameraIcon, StarIcon, GameControllerIcon,  } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceForm } from "@/components/ServiceContent/ServiceForm";

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
        serviceName: 'Wi-Fi e Internet',
        description: 'Conectividade de alta velocidade com gerenciamento de tráfego e segurança de ponta.',
        icon: <WifiHighIcon size={48} weight="duotone" />,
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
        serviceName: 'Controle de acesso',
        description: 'Tenha total controle sobre quem entra e sai do seu ambiente com sistemas modernos e seguros. Trabalhamos com soluções como biometria, cartão, senha e reconhecimento facial, garantindo mais organização, segurança e praticidade para empresas, condomínios e residências.',
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
        serviceName: 'Câmera de segurança',
        description: 'Garanta mais proteção para sua residência ou empresa com sistemas de monitoramento modernos e de alta definição. Trabalhamos com câmeras HD e Full HD, acesso remoto pelo celular, visão noturna e gravação 24h, oferecendo mais segurança, controle e tranquilidade para você e sua família.',
        icon: <ShieldCheckIcon size={48} weight="duotone" />,
        highlight: false
    },
]

const servicosDados = [
    {
        id: 1,
        titulo: "Montagem de PC Gamer",
        icon: <DesktopTowerIcon size={24} />,
        descricao: "Engenharia de hardware focada em extrair cada frame. Montagem profissional com cable management avançado e otimização de fluxo de ar.",
        detalhes: ["Otimização de Airflow", "Instalação de Water Cooler", "Configuração de RGB", "Teste de Stress"],
        imagem: "/images/montagem.webp",
        tag: "Alta Performance"
    },
    {
        id: 2,
        titulo: "Manutenção de Notebook",
        icon: <LaptopIcon size={24} />,
        descricao: "Manutenção especializada para notebooks, garantindo melhor desempenho, menor aquecimento e maior vida útil do seu equipamento.",
        detalhes: [
            "Troca de pasta térmica premium",
            "Limpeza interna completa",
            "Higienização de cooler e dissipador",
            "Otimização de desempenho"
        ],
        imagem: "/images/manutencao-notebook.webp",
        tag: "Performance"
    },
    {
        id: 3,
        titulo: "Manutenção de Computadores",
        icon: <DesktopIcon size={24} />,
        descricao: "Serviço técnico completo para computadores desktop, focado em estabilidade, refrigeração eficiente e máximo desempenho.",
        detalhes: [
            "Limpeza técnica interna",
            "Organização de cabos",
            "Troca de pasta térmica",
            "Upgrade e otimização de hardware"
        ],
        imagem: "/images/manutencao-pc.webp",
        tag: "Estabilidade"
    },
    {
        id: 4,
        titulo: "Manuntenção e reparo em videogame",
        icon: <GameControllerIcon size={24} />,
        descricao: "Especialista em manutenção e assistência técnica para consoles e controles, realizando limpeza preventiva em diversos modelos de videogames, manutenção de controles, troca de módulos analógicos e reparos completos em hardware e carcaça de consoles. Serviço focado em desempenho, durabilidade e recuperação dos equipamentos.",
        detalhes: [
            "Limpeza preventiva todos consoles ",
            "Manutenção controle",
            "Troca módulo analógico",
            "Manutenção consoles (hardware e carcaça)"
        ],
        imagem: "/images/reparo-videogame.webp",
        tag: "Desempenho Gamer"
    },
    {
        id: 5,
        titulo: "Manutenção de Impressoras",
        icon: <PrinterIcon size={24} />,
        descricao: "Manutenção especializada em impressoras para garantir qualidade de impressão, evitar falhas e prolongar a vida útil do equipamento.",
        detalhes: [
            "Limpeza e desobstrução de cabeçote",
            "Revisão de roletes e tracionadores",
            "Reset e configuração de firmware",
            "Diagnóstico e correção de falhas"
        ],
        imagem: "/images/manutencao-impressoras.webp",
        tag: "Precisão"
    },
    {
        id: 6,
        titulo: "Manutenção de Câmeras CFTV",
        icon: <SecurityCameraIcon size={24} />,
        descricao: "Serviço especializado em manutenção de sistemas de CFTV, garantindo imagens nítidas, estabilidade na gravação e máxima segurança para seu ambiente.",
        detalhes: [
            "Limpeza e ajuste de lentes",
            "Verificação de cabeamento e conectores",
            "Configuração de DVR/NVR",
            "Teste e otimização de gravação"
        ],
        imagem: "/images/manutencao-cameras.webp",
        tag: "Segurança"
    },
    {
        id: 7,
        titulo: "Limpeza Preventiva",
        icon: <WrenchIcon size={24} />,
        descricao: "Seu setup novo, de novo. Remoção química de resíduos, troca de pasta térmica premium e lubrificação técnica de fans.",
        detalhes: ["Pasta Térmica Grizzly", "Limpeza Química", "Banho Ultrassônico", "Redução de Ruído"],
        imagem: "/images/limpeza.webp",
        tag: "Longevidade"
    },
    {
        id: 8,
        titulo: "Wi-Fi e Internet",
        icon: <WifiHighIcon size={24} />,
        descricao: "Soluções completas em redes Wi-Fi e Internet para garantir alta performance, estabilidade e segurança em ambientes residenciais e corporativos.",
        detalhes: [
            "Projeto e implantação de rede Wi-Fi",
            "Instalação de roteadores e access points",
            "Eliminação de áreas sem sinal",
            "Configuração avançada de segurança"
        ],
        imagem: "/images/wifi-internet.webp",
        tag: "Alta Performance"
    },
];

export function KnowOurServices() {
    const [servicoAtivo, setServicoAtivo] = useState(servicosDados[0]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <section id="services" className="bg-black py-32 overflow-hidden">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center text-center mb-24 relative">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#03A64A]/20 bg-[#03A64A]/5 text-[#03A64A] text-[10px] uppercase tracking-[0.3em] font-black mb-6">
                        <CpuIcon size={16} weight="fill" className="animate-pulse" />
                        <span>Ecossistema de Serviços</span>
                    </div>

                   <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-8">
                        Do diagnóstico avançado ao <br />
                        <span className="text-[#03A64A] italic">setup dos seus sonhos.</span>
                    </h2>

                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        Selecione o serviço ideal para o seu hardware. Da micro-soldagem de placas à montagem de máquinas extremas, cuidamos do seu equipamento com precisão cirúrgica.
                    </p>
                </motion.div>

                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                </div> */}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                    <div className="lg:col-span-5 space-y-8">

                        <div className="flex flex-col scrollBar overflow-y-auto h-48 lg:h-96 pr-2 gap-3">
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] ml-2">Selecione o Serviço</p>
                            {servicosDados.map((servico) => (
                                <button
                                    key={servico.id}
                                    onClick={() => {
                                        setServicoAtivo(servico);
                                        if (window.innerWidth <= 768) {
                                            setTimeout(() => {
                                                document
                                                    .getElementById("service-desc")
                                                    ?.scrollIntoView({ behavior: "smooth" });
                                            }, 300);
                                        }
                                    }}
                                    className={`
                                        cursor-pointer group relative flex items-center justify-between p-6 rounded-[2rem] border transition-all duration-500
                                        ${servicoAtivo.id === servico.id
                                            ? 'bg-[#03A64A] border-[#03A64A] text-black shadow-[0_20px_40px_rgba(3,166,74,0.2)]'
                                            : 'bg-[#0d0d0d] border-white/5 text-gray-400 hover:border-white/20'}
                                    `}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl ${servicoAtivo.id === servico.id ? 'bg-black text-[#03A64A]' : 'bg-white/5 text-gray-500 group-hover:text-white transition-colors'}`}>
                                            {servico.icon}
                                        </div>
                                        <span className="text-normal text-start lg:text-xl font-black tracking-tight">{servico.titulo}</span>
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

                    <div id="service-desc" className="scroll-mt-24 lg:col-span-7 sticky top-24">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={servicoAtivo.id}
                                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                                transition={{ duration: 0.4, ease: "linear" }}
                                className="relative bg-[#0d0d0d] border border-white/10 rounded-[3rem] overflow-hidden p-8 md:p-12 shadow-2xl"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#03A64A]/5 blur-[100px] pointer-events-none" />

                                <div className="relative z-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10">
                                    <div className="space-y-8">
                                        <div>
                                            <span className="px-3 py-1 rounded-md bg-[#03A64A]/10 text-[#03A64A] text-[10px] font-black uppercase tracking-widest">
                                                {servicoAtivo.tag}
                                            </span>
                                            <h3 className="text-3xl md:text-3xl font-black text-white mt-4 tracking-tighter leading-none">
                                                {servicoAtivo.titulo}
                                            </h3>
                                        </div>

                                        <p className="text-gray-400 leading-relaxed font-medium">
                                            {servicoAtivo.descricao}
                                        </p>

                                        <div className="grid gap-3">
                                            {servicoAtivo.detalhes.map((detalhe, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-[11px] font-bold text-gray-300 uppercase tracking-widest bg-white/5 p-3 rounded-xl border border-white/5">
                                                    <StarIcon size={14} weight="fill" className="shrink-0 text-[#03A64A]" />
                                                    {detalhe}
                                                </div>
                                            ))}
                                        </div>

                                        <button onClick={() => setIsOpen(true)} className="cursor-pointer w-full flex items-center justify-center gap-3 py-5 bg-[#03A64A] text-black font-black rounded-2xl hover:scale-[1.02] transition-all shadow-[0_15px_30px_rgba(3,166,74,0.2)]">
                                            SOLICITAR ORÇAMENTO <CaretRightIcon size={20} weight="bold" />
                                        </button>
                                    </div>

                                    <div className="relative h-[300px] w-full md:h-auto rounded-[2rem] overflow-hidden border border-white/10 group">
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
        </section >
        <ServiceForm isOpen={isOpen} setIsOpen={setIsOpen} servicoAtivo={servicoAtivo} />
        </>
    )
}