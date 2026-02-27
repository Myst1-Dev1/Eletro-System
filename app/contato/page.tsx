'use client';

import {
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    ChatCircleTextIcon,
    WhatsappLogoIcon,
    PaperclipIcon,
    PaperPlaneTiltIcon,
    ClockIcon,
    HeadsetIcon,
    MapPinIcon
} from "@phosphor-icons/react";

export default function Contato() {
    return (
        <div className="text-white min-h-screen bg-black">
            {/* Hero Section com Overlay de Vidro */}
            <section className="relative w-full py-24 px-6 overflow-hidden bg-[url('/images/contato-bg.webp')] bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>

                {/* Luz Decorativa */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#03A64A]/20 blur-[120px] rounded-full" />

                <div className="container mx-auto relative z-10 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#03A64A] text-sm font-bold uppercase tracking-widest backdrop-blur-md">
                        <HeadsetIcon size={20} weight="duotone" />
                        <span>Suporte Especializado</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter">
                        Precisa de <span className="text-[#03A64A]">ajuda?</span>
                    </h1>

                    <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed opacity-80">
                        Seja para um novo projeto de PC Gamer ou suporte técnico avançado,
                        nossa equipe está pronta para te atender. Escolha o melhor canal abaixo.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-16 relative z-20">

                {/* COLUNA ESQUERDA: FORMULÁRIO (OCUPA 7 COLUNAS) */}
                <section className="lg:col-span-7 bg-[#0a0a0a] p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl backdrop-blur-xl">
                    <div className="mb-10">
                        <h2 className="text-2xl font-black mb-2">Envie uma Mensagem</h2>
                        <p className="text-gray-500 text-sm italic">Tempo médio de resposta: 30 minutos.</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase ml-2 tracking-widest">Seu Nome</label>
                                <div className="relative">
                                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#03A64A] transition-colors" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Ex: João Silva"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#03A64A]/50 focus:bg-white/[0.08] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="group space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase ml-2 tracking-widest">E-mail</label>
                                <div className="relative">
                                    <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-[#03A64A] transition-colors" size={20} />
                                    <input
                                        type="email"
                                        placeholder="seu@email.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#03A64A]/50 focus:bg-white/[0.08] transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="group space-y-2">
                            <label className="text-xs font-bold text-gray-500 uppercase ml-2 tracking-widest">Como podemos ajudar?</label>
                            <div className="relative">
                                <ChatCircleTextIcon className="absolute left-4 top-5 text-gray-600 group-focus-within:text-[#03A64A] transition-colors" size={20} />
                                <textarea
                                    placeholder="Descreva seu problema ou projeto..."
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl py-4 pl-12 pr-4 focus:outline-none focus:border-[#03A64A]/50 focus:bg-white/[0.08] transition-all resize-none"
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
                            <label className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-dashed border-white/20 hover:border-[#03A64A]/50 hover:bg-[#03A64A]/5 cursor-pointer transition-all group">
                                <PaperclipIcon size={20} className="text-gray-500 group-hover:text-[#03A64A]" />
                                <span className="text-sm font-bold text-gray-400 group-hover:text-white">Anexar Log/Foto</span>
                                <input type="file" className="hidden" />
                            </label>

                            <button className="cursor-pointer transition-all duration-500 w-full md:flex-1 flex items-center justify-center gap-3 py-5 bg-[#03A64A] text-black font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(3,166,74,0.3)]">
                                <PaperPlaneTiltIcon size={22} weight="bold" />
                                ENVIAR AGORA
                            </button>
                        </div>
                    </form>
                </section>

                {/* COLUNA DIREITA: CARDS DE CONTATO (OCUPA 5 COLUNAS) */}
                <section className="lg:col-span-5 space-y-6">

                    {/* Card WhatsApp */}
                    <a href="#" className="group block bg-[#0a0a0a] p-8 rounded-[2.5rem] border border-white/5 hover:border-[#25D366]/40 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute -right-4 -bottom-4 text-[#25D366]/5 group-hover:text-[#25D366]/10 transition-colors">
                            <WhatsappLogoIcon size={120} weight="fill" />
                        </div>
                        <div className="relative z-10 flex items-start gap-6">
                            <div className="p-4 bg-[#25D366]/10 rounded-2xl text-[#25D366]">
                                <WhatsappLogoIcon size={32} weight="duotone" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-1">WhatsApp Business</h4>
                                <p className="text-gray-400 text-sm mb-4">Atendimento instantâneo para orçamentos rápidos.</p>
                                <span className="text-[#25D366] font-black text-lg">+55 21 4002-8922</span>
                            </div>
                        </div>
                    </a>

                    {/* Card Informações Úteis */}
                    <div className="bg-[#0d0d0d] p-8 rounded-[2.5rem] border border-white/5 space-y-8">
                        <div className="flex gap-5">
                            <div className="p-3 bg-white/5 rounded-xl text-[#03A64A]">
                                <MapPinIcon size={24} weight="duotone" />
                            </div>
                            <div>
                                <h5 className="font-bold text-white">Nossa Sede</h5>
                                <p className="text-sm text-gray-500">Rua da Tecnologia, 1000 - Barra da Tijuca, RJ</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="p-3 bg-white/5 rounded-xl text-[#03A64A]">
                                <ClockIcon size={24} weight="duotone" />
                            </div>
                            <div>
                                <h5 className="font-bold text-white">Horário de Operação</h5>
                                <p className="text-sm text-gray-500">Segunda à Sexta: 08h — 18h</p>
                                <p className="text-sm text-gray-500">Sábado: 08h — 12h</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Status do Sistema</span>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#03A64A] animate-pulse"></span>
                                    <span className="text-xs font-black text-white">ONLINE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Badge de E-mail */}
                    <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#03A64A]/20 to-transparent border border-[#03A64A]/10">
                        <h4 className="font-bold mb-2 flex items-center gap-2">
                            <EnvelopeIcon size={20} /> E-mail Corporativo
                        </h4>
                        <p className="text-sm text-[#03A64A] font-bold">suporte@eletrosystem.com.br</p>
                    </div>

                </section>
            </div>
        </div>
    );
}