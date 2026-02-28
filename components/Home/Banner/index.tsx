import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ShoppingCartSimpleIcon, CheckCircleIcon } from "@phosphor-icons/react/dist/ssr";

export function Banner() {

    return (
        <section className="relative w-auto min-h-[85dvh] flex items-center overflow-hidden">

            <div className="absolute inset-0 scale-105 animate-pulse-slow" />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent lg:to-green-900/40" />

            <div className="relative container mx-auto px-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 py-20">

                <div className="max-w-2xl text-center lg:text-left space-y-8">

                    <div className="inline-flex uppercase font-bold items-center gap-2 px-3 py-1 rounded-full bg-green-950 border border-green-900 text-[#03A64A] text-sm backdrop-blur-sm">
                        <CheckCircleIcon size={18} weight="fill" />
                        <span>Especialistas em Performance</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
                        Conserto Rápido
                        <br /> e Profissional <br />
                        Para seus <br />
                        <span className="bg-gradient-to-r from-[#4ade80] via-[#03A64A] to-[#33945E] bg-clip-text text-transparent">
                            Dispositivos
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed">
                        Recupere seu celular, tablet ou notebook hoje mesmo com peças originais e garantia estendida. Orçamento grátuito em minutos via WhatsApp.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

                        <Link
                            href="/servicos"
                            className="group btn-secondary flex items-center justify-center py-5 gap-3 lg:w-fit"
                        >
                            Solicitar Orçamento
                            <ArrowRightIcon size={22} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/produtos"
                            className="group flex items-center justify-center gap-2 px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                        >
                            <ShoppingCartSimpleIcon size={22} weight="bold" />
                            Loja de Peças
                        </Link>
                    </div>

                    {/* <div className="flex items-center justify-center lg:justify-start gap-4 pt-6 border-t border-white/10">
                        <div className="flex -space-x-3">
                            {avatar.map((i) => (
                                <div key={i.id} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 flex items-center justify-center text-[10px] font-bold">
                                    <Image src={i.image} width={50} height={50} alt="Avatar" className="rounded-full aspect-square" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-gray-400">
                            <strong className="text-white">+500 setups</strong> otimizados este ano
                        </p>
                    </div> */}
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-black/20 blur-[100px] rounded-full" />
                    <Image
                        src="/images/home-banner-img-new.webp"
                        width={500}
                        height={500}
                        alt="Hardware Premium"
                        className="relative rounded-xl z-10 drop-shadow-[0_0_50px_rgba(3,166,74,0.4)] w-[280px] sm:w-[380px] lg:w-[500px] h-auto object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}