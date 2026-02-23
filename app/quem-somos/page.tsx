'use client';

import { ShieldCheckIcon, WrenchIcon, HeadsetIcon, ChatCircleDotsIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function QuemSomos() {
    return (
        <div className="text-white min-h-screen">
            <div className="container mx-auto px-6 py-12 space-y-24">

                <section className="flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div>
                            <h2 className="text-green-500 font-bold text-lg mb-1">Quem Somos</h2>
                            <div className="w-8 h-[2px] bg-green-500"></div>
                        </div>
                        <div className="space-y-4 text-gray-300">
                            <p className="font-medium">
                                Bem-vindo à <span className="text-white">ELETROSYSTEM</span>! Somos uma empresa dedicada a assistência técnica especializada em notebooks e eletrônicos.
                            </p>
                            <p className="text-sm leading-relaxed opacity-70">
                                Oferecemos soluções precisas para problemas complexos. Nossa equipe é treinada para lidar com as mais diversas marcas do mercado, sempre prezando pela agilidade sem abrir mão da qualidade técnica.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-green-500/20 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <Image
                                src="/images/quem-somos-img-one.webp"
                                width={500}
                                height={500}
                                alt="Teclado Notebook"
                                className="relative rounded-lg border border-white/10 grayscale hover:grayscale-0 transition duration-500 w-full max-w-md"
                            />
                        </div>
                    </div>
                </section>

                <section className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div>
                            <h2 className="text-green-500 font-bold text-lg mb-1">Nossa Missão</h2>
                            <div className="w-8 h-[2px] bg-green-500"></div>
                        </div>
                        <div className="space-y-4 text-gray-300">
                            <p className="font-medium">
                                Nossa missão é devolver a produtividade aos nossos clientes através de reparos confiáveis e transparentes.
                            </p>
                            <p className="text-sm leading-relaxed opacity-70">
                                Acreditamos que a tecnologia deve ser uma aliada, e não um transtorno. Por isso, focamos em diagnósticos assertivos que prolongam a vida útil dos seus aparelhos favoritos.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-start">
                        <Image
                            src="/images/quem-somos-img-two.webp"
                            width={500}
                            height={500}
                            alt="Equipe EletroSystem"
                            className="relative rounded-lg border border-white/10 grayscale hover:grayscale-0 transition duration-500 w-full max-w-md"
                        />
                    </div>
                </section>

                <section className="text-center space-y-12 py-10">
                    <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-semibold">
                            Por que escolher a <span className="text-green-500">ELETROSYSTEM</span>?
                        </h3>
                        <div className="w-16 h-1 bg-green-600/50 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-[#121212] p-8 border border-white/5 rounded-sm hover:bg-[#161616] transition-colors group">
                            <ShieldCheckIcon size={48} weight="light" className="text-green-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-sm mb-3">Qualidade e Confiança</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Garantia total em todos os processos de reparo e componentes originais.</p>
                        </div>

                        <div className="bg-[#121212] p-8 border border-white/5 rounded-sm hover:bg-[#161616] transition-colors group">
                            <WrenchIcon size={48} weight="light" className="text-green-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-sm mb-3">Experiência e Agilidade</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Anos de mercado traduzidos em diagnósticos rápidos e precisos.</p>
                        </div>

                        <div className="bg-[#121212] p-8 border border-white/5 rounded-sm hover:bg-[#161616] transition-colors group">
                            <HeadsetIcon size={48} weight="light" className="text-green-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-sm mb-3">Atendimento a tudo</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Especialistas multimarcas prontos para qualquer desafio técnico.</p>
                        </div>

                        <div className="bg-[#121212] p-8 border border-white/5 rounded-sm hover:bg-[#161616] transition-colors group">
                            <ChatCircleDotsIcon size={48} weight="light" className="text-green-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                            <h4 className="font-bold text-sm mb-3">Suporte e atendimento</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Comunicação clara e direta durante todo o período de manutenção.</p>
                        </div>
                    </div>
                </section>

                <section className="text-center space-y-8 pt-4 border-t border-green-500/5">
                    <div className="space-y-2">
                        <p className="text-gray-400 text-sm">Tem alguma dúvida ou quer saber mais sobre nossos serviços?</p>
                        <h2 className="text-green-500 text-xl font-bold">Entre em contato conosco!</h2>
                    </div>
                    <Link href='/contato' className="cursor-pointer btn-secondary">
                        Contato
                    </Link>
                </section>
            </div>
        </div>
    );
}