'use client';

import {
    UserIcon,
    EnvelopeIcon,
    PhoneIcon,
    ChatCircleTextIcon,
    WhatsappLogoIcon,
    PaperclipIcon,
    PaperPlaneTiltIcon,
    Clock
} from "@phosphor-icons/react";

export default function Contato() {
    return (
        <div className="text-white min-h-screen">

            <section className="relative w-full py-16 px-6 overflow-hidden bg-[url('/images/contato-bg.webp')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

                <div className="container mx-auto relative z-10 flex flex-col justify-center items-center gap-8">
                    {/* <div className="flex-shrink-0">
                        <div className="relative w-32 h-32 md:w-48 md:h-48">
                            <img
                                src="/caminho-pro-seu-logo-escudo.png"
                                alt="Suporte Técnico"
                                className="drop-shadow-[0_0_25px_rgba(34,197,94,0.6)]"
                            />
                        </div>
                    </div> */}
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Precisa de ajudar?</h1>
                        <p className="text-gray-300 text-lg max-w-xl">
                            Estamos aqui para resolver quaisquer problemas com nossos serviços ou sua compra.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <section className="bg-[#121212] p-8 rounded-xl border border-white/5 shadow-2xl">
                    <h2 className="text-xl font-semibold mb-8 border-l-4 border-green-500 pl-4">Entre em contato conosco</h2>

                    <form className="space-y-4">
                        <div className="relative">
                            <UserIcon className="absolute left-3 top-3.5 text-green-500" size={20} />
                            <input
                                type="text"
                                placeholder="Nome Completo"
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-green-500 transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <EnvelopeIcon className="absolute left-3 top-3.5 text-green-500" size={20} />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-green-500 transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <PhoneIcon className="absolute left-3 top-3.5 text-green-500" size={20} />
                            <input
                                type="tel"
                                placeholder="Telefone (Opcional)"
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-green-500 transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <ChatCircleTextIcon className="absolute left-3 top-3.5 text-green-500" size={20} />
                            <textarea
                                placeholder="Mensagem"
                                rows={4}
                                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 pl-12 pr-4 focus:outline-none focus:border-green-500 transition-colors"
                            ></textarea>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
                                Anexar arquivo (Opcional)
                            </label>
                            <label className="flex items-center justify-center w-full bg-gradient-to-r from-green-800 to-green-900 hover:from-green-700 hover:to-green-800 text-white py-3 rounded-lg cursor-pointer transition-all gap-2 text-sm font-semibold">
                                <PaperclipIcon size={20} />
                                + Escolher arquivo
                                <input type="file" className="hidden" />
                            </label>
                            <p className="text-[10px] text-gray-500">Aceitamos imagens, pdfs e documentos até 20MB.</p>
                        </div>

                        <button className="w-full btn-secondary flex items-center justify-center gap-2 transition-all duration-500 cursor-pointer shadow-[0_0_20px_rgba(22,163,74,0.2)] mt-6">
                            <PaperPlaneTiltIcon size={22} weight="bold" />
                            Enviar mensagem
                        </button>
                    </form>
                </section>

                <section className="space-y-6">
                    <h2 className="text-xl font-semibold mb-8">Outras opções de contato</h2>

                    <div className="bg-[#121212] p-6 rounded-xl border border-white/5 flex items-start gap-5 hover:border-green-500/30 transition-all">
                        <div className="p-3 bg-green-500/10 rounded-lg">
                            <WhatsappLogoIcon size={32} className="text-green-500" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold">Converse pelo whatsapp</h4>
                            <p className="text-gray-400 text-sm mb-4">55 21 40028922</p>
                            <button className="cursor-pointer btn-secondary">
                                Iniciar conversa
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#121212] p-6 rounded-xl border border-white/5 flex items-start gap-5 hover:border-green-500/30 transition-all">
                        <div className="p-3 bg-green-500/10 rounded-lg">
                            <EnvelopeIcon size={32} className="text-green-500" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold">Envie um email</h4>
                            <p className="text-gray-400 text-sm mb-4">contato@eletrosystem.com.br</p>
                            <button className="cursor-pointer btn-secondary">
                                Enviar email
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#121212] p-6 rounded-xl border border-white/5 flex items-start gap-5 hover:border-green-500/30 transition-all">
                        <div className="p-3 bg-green-500/10 rounded-lg">
                            <PhoneIcon size={32} className="text-green-500" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold">Telefone de segunda a sábado</h4>
                            <p className="text-gray-400 text-sm">21 2434-1050</p>
                            <div className="mt-2 flex items-center gap-2 text-[11px] text-gray-500 uppercase tracking-wider">
                                <Clock size={14} />
                                Seg a sex: 08h às 18h | Sábado: 08h às 12h
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}