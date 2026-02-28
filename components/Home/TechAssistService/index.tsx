'use client';

import Link from "next/link";
import {
    WrenchIcon,
    CpuIcon,
    GameControllerIcon,
    ArrowRightIcon,
    LockKeyIcon,
    ShieldCheckIcon,
    LightningIcon
} from "@phosphor-icons/react";
import Image from "next/image";
import { useUserStore } from "@/stores/useUserStore";

const avatar = [
    {
        id: 1,
        image: '/images/user1.jpg'
    },
    {
        id: 2,
        image: '/images/user2.jpg'
    },
    {
        id: 3,
        image: '/images/user3.jpg'
    }
]

export function TechAssistService() {
    const { isLogged } = useUserStore();

    return (
        <section className="py-24 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#03A64A]/10 border border-[#03A64A]/20 text-[#03A64A] text-xs font-black uppercase tracking-[0.2em] mb-6">
                            <LightningIcon size={16} weight="fill" className="animate-pulse" />
                            <span>Performance Máxima Ativada</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none">
                            Seu hardware em <br />
                            <span className="text-[#03A64A] italic">Mãos Especialistas.</span>
                        </h2>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Não somos apenas uma assistência. Somos o próximo nível do seu setup.
                            Reparos avançados e montagens de elite com garantia de quem entende de performance.
                        </p>
                    </div>

                    <div className="hidden lg:flex flex-col items-end gap-2 text-right">
                        <div className="flex -space-x-3 mb-2">
                            {avatar.map(i => (
                                <div key={i.id} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                                    <Image src={i.image} width={50} height={50} alt="Avatar" className="rounded-full aspect-square" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-black bg-[#03A64A] flex items-center justify-center text-[10px] font-bold">+1k</div>
                        </div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Setups Otimizados este mês</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 group relative overflow-hidden bg-gradient-to-br from-[#0d0d0d] to-[#050505] rounded-[2.5rem] p-10 border border-white/5 hover:border-[#03A64A]/50 transition-all duration-700 shadow-2xl">

                        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
                            <WrenchIcon size={180} weight="thin" className="text-[#03A64A] -rotate-12 transition-transform duration-700 group-hover:rotate-0" />
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-12">
                                <div className="p-5 bg-[#03A64A] rounded-3xl shadow-[0_0_50px_rgba(3,166,74,0.4)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                    <WrenchIcon size={40} weight="bold" className="text-black" />
                                </div>
                                {/* <div className="text-right">
                                    <span className="text-[10px] font-black text-[#03A64A] uppercase tracking-[0.3em]">Status da Oficina</span>
                                    <div className="flex items-center gap-2 justify-end">
                                        <div className="w-2 h-2 rounded-full bg-[#03A64A] animate-ping" />
                                        <span className="text-sm font-bold">Vagas para Diagnóstico Hoje</span>
                                    </div>
                                </div> */}
                            </div>

                            <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                                Assistência Técnica <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Nível Laboratorial</span>
                            </h3>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {['Limpeza Química Ultrassônica', 'Troca de Pasta Térmica Premium', 'Reparo de Placas', 'Recuperação de Notebooks'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-gray-400 font-medium">
                                        <ShieldCheckIcon size={18} className="text-[#03A64A]" weight="fill" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/servicos"
                                className="cursor-pointer transition-all duration-500 group/btn flex items-center justify-center gap-4 w-full sm:w-fit px-12 py-5 bg-[#03A64A] text-black font-black rounded-2xl hover:bg-[#05c458] shadow-[0_20px_40px_rgba(3,166,74,0.2)]"
                            >
                                AGENDAR MANUTENÇÃO AGORA
                                <ArrowRightIcon size={20} weight="bold" className="group-hover/btn:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-4 group relative bg-[#0d0d0d] rounded-[2.5rem] p-10 border border-white/5 hover:border-amber-500/30 transition-all duration-500 flex flex-col overflow-hidden text-center md:text-left">

                        {isLogged === true ? '' : <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity z-20 flex flex-col items-center justify-center p-6 text-center">
                            <LockKeyIcon size={48} className="text-amber-500 mb-4" weight="duotone" />
                            <p className="text-sm font-bold text-white uppercase tracking-widest">Acesso Restrito</p>
                            <p className="text-[10px] text-gray-400 mt-2">Disponível apenas para clientes cadastrados na oficina</p>
                        </div>}

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 mx-auto md:mx-0 group-hover:bg-amber-500/10 transition-colors">
                                <CpuIcon size={32} weight="duotone" className="text-gray-400 group-hover:text-amber-500" />
                            </div>

                            <h3 className="text-2xl font-black mb-4">Loja de Peças <br /> {isLogged === true ? '' : <span className="text-amber-500 text-sm tracking-[.2em] uppercase font-black">Private Store</span>}</h3>

                            <p className="text-gray-500 mb-8 leading-relaxed font-medium">
                                Hardware selecionado e componentes OEM com garantia Eletro System.
                            </p>

                            {isLogged === true ? '' : <div className="mt-auto pt-6 border-t border-white/5">
                                <span className="flex items-center justify-center md:justify-start gap-2 text-xs font-black text-gray-500">
                                    <LockKeyIcon size={14} /> EXCLUSIVO PARA CLIENTES
                                </span>
                            </div>}
                        </div>
                    </div>

                    <div className="md:col-span-12 group bg-[#0d0d0d] rounded-[2.5rem] p-2 border border-white/5 hover:border-[#03A64A]/30 transition-all duration-500">
                        <div className="bg-black rounded-[2.2rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
                            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-[#03A64A]/40 blur-2xl rounded-full group-hover:bg-[#03A64A]/60 transition-all" />
                                    <div className="relative w-20 h-20 bg-gradient-to-br from-[#03A64A] to-[#015e2a] rounded-[2rem] flex items-center justify-center transition-transform duration-700 group-hover:rotate-[360deg]">
                                        <GameControllerIcon size={48} weight="fill" className="text-black" />
                                    </div>
                                </div>
                                <div className="max-w-md">
                                    <h3 className="text-2xl md:text-3xl font-black mb-2 tracking-tighter uppercase">Montagem de Elite Gamer</h3>
                                    <p className="text-gray-500 font-medium">Projetamos seu setup do zero com foco em airflow, estética industrial e máximo FPS.</p>
                                </div>
                            </div>

                            <Link
                                href="/servicos"
                                className="whitespace-nowrap px-12 py-5 border-2 border-[#03A64A] text-[#03A64A] hover:bg-[#03A64A] hover:text-black font-black rounded-2xl transition-all duration-500 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(3,166,74,0.3)]"
                            >
                                CONFIGURAR MEU PC
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}