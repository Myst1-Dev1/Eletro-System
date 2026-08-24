/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, CheckCircleIcon, FlaskIcon, PlayIcon, ShoppingCart } from "@phosphor-icons/react";
import { useCartStore } from "@/stores/useCartStore";

export function ProdutoContent() {
    const { addToCart } = useCartStore();

    const product = {
        id: "pc-ultra-performance",
        name: "PC Gamer",
        subtitle: "Ultra Performance",
        description: "Engenharia de precisão para máxima taxa de quadros e renderização intensiva. Montado artesanalmente por especialistas, calibrado para o limite.",
        price: 24999.00,
        installments: "12x de R$ 2.395,73 sem juros",
        image: "/images/produto.webp",
        gallery: [
            "/images/limpeza.webp",
            "/images/wifi-internet.webp",
            "/images/manutencao-cameras.webp",
        ],
        specs: [
            { label: "CPU:", value: "i9-14900K 6.0GHz" },
            { label: "GPU:", value: "RTX 4090 24GB" },
            { label: "RAM:", value: "64GB DDR5 6400MHz" },
            { label: "NVMe:", value: "4TB Gen5 SSD 12GB/s" }
        ]
    };

    const [selectedMedia, setSelectedMedia] = useState(product.image);

    return (
        <section className="py-12 md:py-20 max-w-6xl mx-auto px-4 text-white">
            <div className="flex items-center justify-between text-xs font-mono tracking-wider mb-8 text-zinc-400">
                <div className="flex items-center gap-2">
                    <Link href="/" className="hover:text-[#0BD061] transition-colors">HOME</Link>
                    <span>&gt;</span>
                    <span className="hover:text-[#0BD061] transition-colors">PCS GAMERS</span>
                    <span>&gt;</span>
                    <span className="text-[#0BD061] font-bold uppercase">{product.subtitle}</span>
                </div>

                <Link href="/loja" className="flex items-center gap-2 hover:text-[#0BD061] transition-colors font-sans font-semibold">
                    <ArrowLeftIcon size={16} />
                    <span>Voltar à Loja</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="relative w-full h-112.5 bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden flex items-center justify-center p-6">
                        <div className="absolute top-6 left-6 flex flex-col gap-2 z-10 font-mono text-[11px] font-bold">
                            <span className="px-3 py-1 bg-[#0BD061]/10 border border-[#0BD061]/30 text-[#0BD061] rounded-md backdrop-blur-md flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#0BD061] animate-pulse" />
                                EM ESTOQUE
                            </span>
                            <span className="px-3 py-1 bg-[#0BD061] text-black rounded-md w-fit font-sans font-extrabold uppercase tracking-wider">
                                LANÇAMENTO
                            </span>
                        </div>

                        <Image 
                            src={selectedMedia} 
                            alt={product.name} 
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="grid grid-cols-4 gap-4">
                        {product.gallery.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedMedia(img)}
                                className={`relative h-24 bg-zinc-900 border rounded-xl overflow-hidden cursor-pointer transition-all ${
                                    selectedMedia === img ? 'border-[#0BD061]' : 'border-zinc-800 hover:border-zinc-600'
                                }`}
                            >
                                <Image src={img} alt="Thumbnail" fill className="object-cover" />
                            </button>
                        ))}

                        <button className="h-24 bg-zinc-900 border border-zinc-800 hover:border-[#0BD061]/50 rounded-xl flex items-center justify-center text-zinc-400 hover:text-[#0BD061] transition-all cursor-pointer">
                            <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center">
                                <PlayIcon size={18} weight="fill" />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight leading-none text-white">
                            {product.name}
                        </h1>
                        <h2 className="text-3xl font-extrabold tracking-tight leading-tight text-[#0BD061] mt-1">
                            {product.subtitle}
                        </h2>
                        <p className="text-xs text-zinc-400 mt-4 leading-relaxed font-normal">
                            {product.description}
                        </p>
                    </div>

                    <div className="pt-2">
                        <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block mb-1">
                            VALOR DO INVESTIMENTO
                        </span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl md:text-4xl font-extrabold text-[#0BD061]">
                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                            </span>
                            <span className="text-xs text-zinc-400 font-medium">à vista no PIX</span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-1">
                            ou <span className="text-zinc-200 font-semibold">{product.installments}</span>
                        </p>
                    </div>

                    <button
                        onClick={() => addToCart(product as any)}
                        className="w-full py-4 bg-[#0BD061] hover:bg-[#09b353] text-black font-black uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(11,208,97,0.25)] active:scale-98 cursor-pointer mt-2"
                    >
                        <span>ADICIONAR AO CARRINHO</span>
                        <ShoppingCart size={20} weight="bold" />
                    </button>

                    <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-5 mt-4">
                        <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-400 mb-4 pb-2 border-b border-zinc-800/60">
                            CONFIGURAÇÃO BASE
                        </h3>

                        <div className="space-y-3 font-mono text-xs">
                            {product.specs.map((spec, idx) => (
                                <div key={idx} className="flex justify-between items-center">
                                    <span className="text-zinc-500">{spec.label}</span>
                                    <span className="text-zinc-200 font-semibold">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-10 border-t border-zinc-800/60">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                            Especificações Técnicas
                        </h2>
                        <p className="text-xs text-zinc-400 mt-1">
                            Arquitetura de hardware detalhada do sistema.
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-[#0BD061]" />
                        <span className="font-mono text-[10px] tracking-widest text-[#0BD061] uppercase font-bold">
                            TERMINAL DATA VIEW
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <div className="relative bg-zinc-950/90 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0BD061] uppercase block mb-3">
                                PROCESSAMENTO
                            </span>
                            <h3 className="text-xl font-extrabold text-white">
                                Intel Core i9
                            </h3>
                            <span className="text-xs font-mono font-semibold text-zinc-400 block mb-6">
                                14900K
                            </span>
                        </div>

                        <div className="space-y-2 font-mono text-xs border-t border-zinc-900 pt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500">Núcleos:</span>
                                <span className="text-zinc-200 font-semibold">24 (8P+16E)</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500">Threads:</span>
                                <span className="text-zinc-200 font-semibold">32</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500">Boost Max:</span>
                                <span className="text-[#0BD061] font-bold">6.0 GHz</span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: Gráficos */}
                    <div className="relative bg-zinc-950/90 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0BD061] uppercase block mb-3">
                                GRÁFICOS
                            </span>
                            <h3 className="text-xl font-extrabold text-white">
                                NVIDIA RTX 4090
                            </h3>
                            <span className="text-xs font-mono font-semibold text-zinc-400 block mb-6">
                                Founders Edition / Premium Partner
                            </span>
                        </div>

                        <div className="space-y-2 font-mono text-xs border-t border-zinc-900 pt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500">VRAM:</span>
                                <span className="text-zinc-200 font-semibold">24GB GDDR6X</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500">CUDA Cores:</span>
                                <span className="text-zinc-200 font-semibold">16384</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500">Ray Tracing:</span>
                                <span className="text-[#0BD061] font-bold">3rd Gen Cores</span>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3: Plataforma */}
                    <div className="relative bg-zinc-950/90 border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between overflow-hidden">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0BD061] uppercase block mb-3">
                                PLATAFORMA
                            </span>
                            <h3 className="text-xl font-extrabold text-white">
                                Z790 E-ATX
                            </h3>
                            <span className="text-xs font-mono font-semibold text-zinc-400 block mb-6">
                                64GB DDR5 Dual Channel
                            </span>
                        </div>

                        <div className="space-y-2 font-mono text-xs border-t border-zinc-900 pt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500">Freq. RAM:</span>
                                <span className="text-zinc-200 font-semibold">6400 MT/s</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500">Latência:</span>
                                <span className="text-zinc-200 font-semibold">CL32</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500">Conectividade:</span>
                                <span className="text-[#0BD061] font-bold">WiFi 7 + 10GbE</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-20 pt-10 border-t border-zinc-800/60">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* COLUNA ESQUERDA: Texto e Destaques */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                        
                        {/* Título com Ícone */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center shrink-0">
                                <CheckCircleIcon size={24} className="text-[#0BD061]" weight="fill" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                                Montagem <br />
                                Artesanal.
                            </h2>
                        </div>

                        {/* Parágrafos de Descrição */}
                        <div className="space-y-4 text-xs text-zinc-400 leading-relaxed font-normal">
                            <p>
                                Cada sistema é meticulosamente construído por nossos especialistas no 
                                Laboratório EletroSystem. A gestão de cabos é executada com precisão 
                                milimétrica, garantindo fluxo de ar perfeito e estética impecável.
                            </p>
                            <p>
                                Antes do envio, a máquina passa por 48 horas ininterruptas de stress test 
                                térmico e benchmarks sintéticos. Nós não enviamos até que o sistema prove 
                                ser absolutamente estável sob carga extrema.
                            </p>
                        </div>

                        {/* Checkmarks de Garantia */}
                        <div className="mt-8 space-y-3 font-mono text-xs font-bold text-white tracking-wider uppercase">
                            <div className="flex items-center gap-3">
                                <CheckCircleIcon size={18} className="text-[#0BD061] shrink-0" weight="bold" />
                                <span>3 ANOS DE GARANTIA INTEGRAL</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircleIcon size={18} className="text-[#0BD061] shrink-0" weight="bold" />
                                <span>SUPORTE REMOTO DEDICADO</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircleIcon size={18} className="text-[#0BD061] shrink-0" weight="bold" />
                                <span>CERTIFICADO DE BENCHMARK INDIVIDUAL</span>
                            </div>
                        </div>
                    </div>

                    {/* COLUNA DIREITA: Imagem do Técnico + Badge Flutuante */}
                    <div className="lg:col-span-6">
                        <div className="relative w-full h-100 md:h-112.5 bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden">
                            <Image
                                src="/images/tech-building.webp" // Substitua pela sua imagem
                                alt="Técnico realizando montagem artesanal"
                                fill
                                className="object-cover object-center"
                            />

                            {/* Badge Flutuante Inferior (Fase de Teste) */}
                            <div className="absolute bottom-6 left-6 bg-zinc-950/90 border border-zinc-800 backdrop-blur-md p-3.5 rounded-xl flex items-center gap-3 shadow-2xl">
                                <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center shrink-0">
                                    <FlaskIcon size={20} className="text-[#0BD061]" />
                                </div>
                                <div>
                                    <span className="text-[9px] font-mono font-bold tracking-widest text-[#0BD061] uppercase block">
                                        FASE DE TESTE
                                    </span>
                                    <span className="text-sm font-bold text-white font-sans">
                                        Stress Test Ativo
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}