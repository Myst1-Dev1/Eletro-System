'use client';

import { MouseIcon, HeadsetIcon, CrownIcon, TagIcon, ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";

export function KnowOurPartner() {
    return (
        <section className="py-20 bg-black text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-2 mb-4 bg-emerald-500/10 px-4 py-1 rounded-full border border-emerald-500/20">
                        <MouseIcon size={20} className="text-[#03A64A]" weight="fill" />
                        <span className="text-[#03A64A] text-sm font-bold tracking-widest uppercase">Parceria de Elite</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Conheça nossa Loja Parceira: <br />
                        <span className="text-[#03A64A] italic">SPEEDMOUSE</span>
                    </h2>
                    
                    <p className="max-w-2xl text-gray-400 text-lg">
                        Encontre os melhores periféricos de alta performance para complementar sua experiência tecnológica. 
                        Qualidade aprovada pela EletroSystem.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 rounded-4xl">
                    
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-linear-to-r from-emerald-600 to-green-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-700">
                            <Image 
                                src="/images/speedMouse.webp"
                                alt="Periféricos Gamer SpeedMouse"
                                className="w-full h-100 object-cover hover:scale-105 transition-transform duration-700"
                                width={1000}
                                height={400}
                            />
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="grid gap-6">
                            <FeatureItem 
                                icon={<CrownIcon size={32} className="text-[#03A64A]" />}
                                title="Periféricos de Elite"
                                desc="Mouses, teclados e headsets das marcas mais cobiçadas do cenário mundial."
                            />
                            <FeatureItem 
                                icon={<HeadsetIcon size={32} className="text-[#03A64A]" />}
                                title="Ergonomia e Design"
                                desc="Produtos selecionados para garantir conforto durante longas jornadas de uso."
                            />
                            <FeatureItem 
                                icon={<TagIcon size={32} className="text-[#03A64A]" />}
                                title="Preços Especiais"
                                desc="Clientes EletroSystem possuem condições exclusivas na primeira compra."
                            />
                        </div>

                        <a 
                            href="https://speedmouse.com.br" 
                            target="_blank" 
                            className="inline-flex items-center text-sm justify-between w-full md:w-auto gap-4 bg-[#03A64A] duration-500 text-black font-black px-8 py-4 rounded-xl transition-all hover:scale-105"
                        >
                            VISITAR A SPEEDMOUSE
                            <ArrowRightIcon weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="flex gap-4 p-4 rounded-2xl hover:bg-zinc-800/50 transition-colors border border-transparent hover:border-zinc-700">
            <div className="mt-1">{icon}</div>
            <div>
                <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}