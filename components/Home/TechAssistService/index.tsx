import Link from "next/link";
import { WrenchIcon, CpuIcon, GameControllerIcon, ArrowRightIcon, CaretRightIcon } from "@phosphor-icons/react/dist/ssr";

export function TechAssistService() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-6">

                {/* Header com Badge */}
                <div className="text-center mb-16">
                    <span className="px-4 py-1.5 rounded-full border border-[#03A64A]/30 bg-[#03A64A]/10 text-[#03A64A] text-xs uppercase tracking-widest font-bold mb-4 inline-block">
                        Serviços Premium
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        Tecnologia que <span className="text-[#03A64A] bg-clip-text text-transparent bg-gradient-to-r from-[#03A64A] to-[#4ade80]">Resolve</span>.
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        De upgrades potentes a reparos delicados, entregamos a performance que seu setup merece.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

                    {/* Card Principal: Assistência */}
                    <div className="md:col-span-4 group relative overflow-hidden bg-[#0d0d0d] rounded-3xl p-8 border border-white/5 hover:border-[#03A64A]/40 transition-all duration-500 shadow-2xl">
                        {/* Glow Effect de Fundo */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#03A64A]/10 blur-[100px] group-hover:bg-[#03A64A]/20 transition-all" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className="w-16 h-16 bg-[#03A64A] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(3,166,74,0.3)] group-hover:scale-110 transition-transform duration-500">
                                    <WrenchIcon className="text-black" size={32} weight="bold" />
                                </div>
                                <h3 className="text-3xl font-bold mb-4 group-hover:text-[#03A64A] transition-colors">
                                    Assistência Técnica <br /> Especializada
                                </h3>
                                <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
                                    Manutenção premium para quem não pode parar. Diagnóstico preciso, limpeza ultrassônica e montagem de alta performance.
                                </p>
                            </div>

                            <Link
                                href="/servicos"
                                className="btn-secondary flex items-center gap-3 w-fit"
                            >
                                Solicitar Atendimento
                                <ArrowRightIcon size={22} weight="bold" />
                            </Link>
                        </div>
                    </div>

                    {/* Card: Produtos */}
                    <div className="md:col-span-2 group bg-[#0d0d0d] rounded-3xl p-8 border border-white/5 hover:border-[#03A64A]/40 transition-all duration-500 relative overflow-hidden flex flex-col">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#03A64A]/20 transition-colors">
                            <CpuIcon className="text-[#03A64A]" size={28} weight="duotone" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Produtos e Peças</h3>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            O hardware mais recente para o seu próximo grande salto de performance.
                        </p>
                        <Link
                            href="/produtos"
                            className="transition-all duration-500 mt-auto flex items-center gap-2 text-[#03A64A] font-bold group-hover:gap-4 transition-all"
                        >
                            Explorar Loja <CaretRightIcon size={20} weight="bold" />
                        </Link>
                    </div>

                    {/* Card Horizontal: PC Gamer */}
                    <div className="md:col-span-6 group bg-[#0d0d0d] rounded-3xl p-8 border border-white/5 hover:border-[#03A64A]/40 transition-all duration-500 overflow-hidden relative">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                <div className="w-16 h-16 bg-[#03A64A]/10 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                                    <GameControllerIcon className="text-[#03A64A]" size={40} weight="duotone" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">Montagem de Setup Gamer</h3>
                                    <p className="text-gray-400 max-w-sm">Projetamos a máquina dos seus sonhos, focada em FPS e estética.</p>
                                </div>
                            </div>
                            <Link
                                href="/servicos"
                                className="transition-all duration-500 whitespace-nowrap px-10 py-4 border-2 border-[#03A64A] text-[#03A64A] hover:bg-[#03A64A] hover:text-black font-extrabold rounded-2xl transition-all shadow-[0_0_15px_rgba(3,166,74,0.1)] hover:shadow-[0_0_25px_rgba(3,166,74,0.4)]"
                            >
                                Configurar meu PC
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}