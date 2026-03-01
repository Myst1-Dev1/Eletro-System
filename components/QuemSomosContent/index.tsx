'use client';

import { Counter } from "@/components/Counter";
import { useGSAP } from "@gsap/react";
import { ShieldCheckIcon, WrenchIcon, HeadsetIcon, ChatCircleDotsIcon, TargetIcon, EyeIcon, TrophyIcon } from "@phosphor-icons/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function QuemSomosContent() {

    // useGSAP(() => {
    //     gsap.from("h1, p, .inline-flex", {
    //         opacity: 0,
    //         y: 30,
    //         duration: 1,
    //         stagger: 0.2,
    //         ease: "power3.out"
    //     });

    //     gsap.from(".group img", {
    //         scale: 1.2,
    //         duration: 1.5,
    //         ease: "power2.out"
    //     });
    // }, []);

    return (
        <div className="text-white min-h-screen bg-black overflow-hidden">
            <div className="container mx-auto px-6 py-20 space-y-32">

                <section className="relative flex flex-col lg:flex-row items-center gap-16">
                    <div className="absolute -left-20 -top-20 w-72 h-72 bg-[#03A64A]/10 blur-[120px] rounded-full" />

                    <div className="flex-1 space-y-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#03A64A] text-sm font-bold uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-[#03A64A] animate-ping" />
                            Nossa Trajetória
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black leading-tight">
                            Paixão por <br />
                            <span className="text-[#03A64A]">Performance.</span>
                        </h1>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed max-w-xl">
                            <p>
                                Bem-vindo à <span className="text-white font-bold italic">ELETROSYSTEM</span>. Mais do que uma assistência, somos o centro de reabilitação para o seu hardware de alta performance.
                            </p>
                            <p className="text-base opacity-80">
                                Nascemos da necessidade de um serviço que tratasse cada notebook não como um número, mas como uma ferramenta vital de trabalho e lazer. Nossa equipe respira tecnologia, entregando soluções que as assistências comuns consideram impossíveis.
                            </p>
                        </div>

                        <div className="flex gap-8 border-l-2 border-[#03A64A] pl-6 py-4">
                            <div>
                                <p className="text-2xl font-black text-white">+<Counter value={10} /> Anos</p>
                                <p className="text-xs uppercase text-gray-500 font-bold">de Experiência</p>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-white"><Counter value={100} />%</p>
                                <p className="text-xs uppercase text-gray-500 font-bold">Peças Originais</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-[#03A64A]/20 to-transparent rounded-[2.5rem] blur-2xl group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10">
                            <Image
                                src="/images/quem-somos-img-one.webp"
                                width={600}
                                height={600}
                                alt="Laboratório EletroSystem"
                                className="object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-8">
                    <div className="p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 relative overflow-hidden group">
                        <TargetIcon className="absolute -right-8 -bottom-8 text-white/5 w-40 h-40 group-hover:text-[#03A64A]/10 transition-colors" />
                        <div className="w-14 h-14 bg-[#03A64A]/10 rounded-2xl flex items-center justify-center mb-6">
                            <TargetIcon size={32} className="text-[#03A64A]" weight="duotone" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Devolver a produtividade aos nossos clientes através de reparos confiáveis e transparentes, garantindo que a tecnologia seja sempre uma ponte, nunca um obstáculo.
                        </p>
                    </div>

                    <div className="p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 relative overflow-hidden group">
                        <EyeIcon className="absolute -right-8 -bottom-8 text-white/5 w-40 h-40 group-hover:text-[#03A64A]/10 transition-colors" />
                        <div className="w-14 h-14 bg-[#03A64A]/10 rounded-2xl flex items-center justify-center mb-6">
                            <EyeIcon size={32} className="text-[#03A64A]" weight="duotone" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Ser a maior referência nacional em manutenção de hardware premium, reconhecida pela precisão cirúrgica de nossos diagnósticos e ética impecável.
                        </p>
                    </div>
                </section>

                <section className="space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black">
                            Os pilares da <span className="text-[#03A64A]">EletroSystem</span>
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Excelência técnica combinada com um atendimento humano e transparente.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: ShieldCheckIcon, title: "Qualidade & Confiança", desc: "Garantia total e processos certificados em cada parafuso." },
                            { icon: WrenchIcon, title: "Agilidade Técnica", desc: "Laboratório próprio equipado para diagnósticos rápidos." },
                            { icon: HeadsetIcon, title: "Especialistas Multi", desc: "Treinados para dominar as marcas mais complexas do mercado." },
                            { icon: ChatCircleDotsIcon, title: "Comunicação Real", desc: "Você acompanha cada etapa do reparo sem surpresas." }
                        ].map((item, idx) => (
                            <div key={idx} className="group p-8 bg-[#0d0d0d] border border-white/5 rounded-3xl hover:border-[#03A64A]/40 transition-all duration-500">
                                <item.icon size={48} weight="duotone" className="text-[#03A64A] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform" />
                                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#0a0a0a] to-[#03A64A]/10 border border-[#03A64A]/20 text-center overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#03A64A]/5 blur-[100px]" />

                    <div className="relative z-10 space-y-8">
                        <TrophyIcon size={60} weight="duotone" className="text-[#03A64A] mx-auto animate-bounce" />
                        <h2 className="text-3xl md:text-5xl font-black max-w-3xl mx-auto leading-tight">
                            Pronto para dar uma nova vida ao seu equipamento?
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            Fale com um de nossos especialistas e descubra por que somos a escolha número 1 em assistência especializada.
                        </p>
                        <div className="block mx-auto gap-4">
                            <Link href='/servicos' className="w-full sm:w-auto px-10 py-5 bg-[#03A64A] text-black font-black rounded-2xl hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(3,166,74,0.3)]">
                                Iniciar Orçamento
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}