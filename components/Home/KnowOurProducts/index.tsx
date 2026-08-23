'use client';

import Link from "next/link";

import {
  TruckIcon,
  CpuIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  LightningIcon,
  MemoryIcon,
  MonitorIcon,
  ShoppingCartSimpleIcon,
} from "@phosphor-icons/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";

const products = [
  {
    id: 1,
    category: "PC GAMER",
    name: "Eletro Beast RTX",
    description:
      "Potência extrema para jogos competitivos e experiências em alto nível.",
    image: "/images/produto.webp",
    gpu: "GeForce RTX",
    cpu: "Ryzen 7",
    ram: "32GB RAM",
    highlight: "4K READY",
  },
  {
    id: 2,
    category: "WORKSTATION",
    name: "Eletro Studio X",
    description:
      "Performance profissional para criação, edição e desenvolvimento.",
    image: "/images/produto.webp",
    gpu: "RTX 4070",
    cpu: "Ryzen 9",
    ram: "64GB RAM",
    highlight: "PRO SERIES",
  },
  {
    id: 3,
    category: "EXTREME GAMING",
    name: "Eletro Titan",
    description:
      "Nossa configuração mais poderosa para quem simplesmente exige o máximo.",
    image: "/images/produto.webp",
    gpu: "RTX 5090",
    cpu: "Ryzen 9",
    ram: "64GB RAM",
    highlight: "ULTIMATE",
  },
];

export function KnowOurProducts() {

    return (
        <section className="bg-black py-20 mt-5">
            <div className="max-w-6xl mx-auto px-4 relative gap-10 lg:gap-0 grid grid-cols-1 lg:grid-cols-2">
                <div className="flex m-auto max-w-xl flex-col">
                    <div className="mb-7 flex w-fit items-center gap-2 rounded-full border border-green-500/40 bg-green-500/5 px-3 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-green-400">
                        Loja Oficial
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">
                        Eleve sua{" "}
                        <span className="text-green-400">
                        Performance.
                        </span>
                    </h1>

                    <p className="mt-5 max-w-lg text-sm leading-6 text-gray-300">
                        Hardware de elite e máquinas exclusivas montadas sob medida no
                        nosso laboratório. Performance sem concessões para quem exige o
                        máximo.
                    </p>

                    <div className="mt-9">
                        <Link
                        href="#produtos"
                        className="cursor-pointer w-fit group flex items-center gap-3 rounded-md bg-green-400 px-6 py-3.5 text-xs font-medium tracking-[0.15em] text-black transition-all duration-200 hover:bg-green-300"
                        >
                        Ver Produtos

                        <ArrowRightIcon
                            size={18}
                            weight="bold"
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                        </Link>
                    </div>

                    <div className="mt-12 border-t border-white/10 pt-6">
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="rounded-sm border border-white/10 bg-white/2 p-3">
                            <div className="mb-2 flex items-center gap-2">
                            <TruckIcon
                                size={15}
                                weight="bold"
                                className="text-green-400"
                            />

                            <span className="text-[10px] font-semibold text-white">
                                Logística
                            </span>
                            </div>

                            <p className="text-[10px] leading-4 text-gray-300">
                            Entrega em todo o Brasil
                            </p>
                        </div>

                        <div className="rounded-sm border border-white/10 bg-white/2 p-3">
                            <div className="mb-2 flex items-center gap-2">
                            <CpuIcon
                                size={15}
                                weight="bold"
                                className="text-green-400"
                            />

                            <span className="text-[10px] font-semibold text-white">
                                Qualidade
                            </span>
                            </div>

                            <p className="text-[10px] leading-4 text-gray-300">
                            Componentes 100% Originais
                            </p>
                        </div>

                        <div className="rounded-sm border border-white/10 bg-white/2 p-3">
                            <div className="mb-2 flex items-center gap-2">
                            <ShieldCheckIcon
                                size={15}
                                weight="bold"
                                className="text-green-400"
                            />

                            <span className="text-[10px] font-semibold text-white">
                                Segurança
                            </span>
                            </div>

                            <p className="text-[10px] leading-4 text-gray-300">
                            Garantia EletroSystem
                            </p>
                        </div>
                        </div>
                    </div>

                </div>

                <div className="relative w-full">
                    <div className="relative overflow-hidden rounded-2xl border border-green-400/20 bg-[#07100c] p-2 shadow-[0_0_60px_rgba(34,197,94,0.08)]">
                        
                        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-green-500/10 blur-3xl" />

                        <div className="relative z-10 flex h-9 items-center justify-between rounded-t-xl border-b border-white/5 bg-[#050a08] px-4">

                        <div className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-green-500/70" />
                            <span className="h-1.5 w-1.5 rounded-full bg-green-400/50" />
                            <span className="h-1.5 w-1.5 rounded-full bg-green-300/30" />
                        </div>
                        </div>

                        <Swiper
                        modules={[Navigation, Autoplay, EffectFade]}
                        effect="fade"
                        fadeEffect={{
                            crossFade: true,
                        }}
                        navigation={{
                            nextEl: ".product-next",
                            prevEl: ".product-prev",
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop
                        className="relative"
                        >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                            <div className="relative min-h-117.5 overflow-hidden">
                                
                                <div className="absolute inset-0">
                                <Image
                                    width={400}
                                    height={400}
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-linear-to-r from-[#050b08] via-[#050b08]/55 to-transparent" />

                                <div className="absolute inset-0 bg-linear-to-t from-[#050b08] via-transparent to-transparent" />
                                </div>

                                <div className="relative z-10 flex min-h-117.5 flex-col justify-between p-6 sm:p-8">
                                
                                <div>
                                    <div className="mb-5 flex items-center gap-2">
                                    <span className="h-px w-6 bg-green-400" />

                                    <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-green-400">
                                        {product.category}
                                    </span>
                                    </div>

                                    <h2 className="max-w-67.5 text-3xl font-bold leading-[0.95] tracking-tight text-white sm:text-4xl">
                                    {product.name}
                                    </h2>

                                    <p className="mt-4 max-w-67.5 text-xs leading-5 text-gray-300">
                                    {product.description}
                                    </p>

                                    <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1.5">
                                    <LightningIcon
                                        size={12}
                                        weight="fill"
                                        className="text-green-400"
                                    />

                                    <span className="font-mono text-[8px] font-bold tracking-[0.2em] text-green-400">
                                        {product.highlight}
                                    </span>
                                    </div>
                                </div>

                                <div>
                                    <div className="mb-5 grid max-w-[320px] grid-cols-3 gap-2">
                                    
                                    <div className="border border-white/10 bg-black/40 p-2.5 backdrop-blur-sm">
                                        <CpuIcon
                                        size={14}
                                        className="mb-1 text-green-400"
                                        />

                                        <span className="block font-mono text-[8px] text-gray-500">
                                        CPU
                                        </span>

                                        <span className="text-[9px] font-semibold text-white">
                                        {product.cpu}
                                        </span>
                                    </div>

                                    <div className="border border-white/10 bg-black/40 p-2.5 backdrop-blur-sm">
                                        <MonitorIcon
                                        size={14}
                                        className="mb-1 text-green-400"
                                        />

                                        <span className="block font-mono text-[8px] text-gray-500">
                                        GPU
                                        </span>

                                        <span className="text-[9px] font-semibold text-white">
                                        {product.gpu}
                                        </span>
                                    </div>

                                    <div className="border border-white/10 bg-black/40 p-2.5 backdrop-blur-sm">
                                        <MemoryIcon
                                        size={14}
                                        className="mb-1 text-green-400"
                                        />

                                        <span className="block font-mono text-[8px] text-gray-500">
                                        MEMORY
                                        </span>

                                        <span className="text-[9px] font-semibold text-white">
                                        {product.ram}
                                        </span>
                                    </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                    
                                    <button
                                        type="button"
                                        className="w-fit rounded-md cursor-pointer group flex items-center gap-2 bg-green-400 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.15em] text-black transition hover:bg-green-300"
                                    >
                                        Ver configuração

                                        <ShoppingCartSimpleIcon
                                        size={14}
                                        weight="bold"
                                        className="transition-transform group-hover:translate-x-0.5"
                                        />
                                    </button>

                                    <div className="flex items-center gap-2">
                                        <button
                                        type="button"
                                        className="cursor-pointer product-prev flex h-8 w-8 items-center justify-center border border-white/10 bg-black/40 text-white transition hover:border-green-400/40 hover:text-green-400"
                                        >
                                        <ArrowLeftIcon size={14} />
                                        </button>

                                        <button
                                        type="button"
                                        className="cursor-pointer product-next flex h-8 w-8 items-center justify-center border border-white/10 bg-black/40 text-white transition hover:border-green-400/40 hover:text-green-400"
                                        >
                                        <ArrowRightIcon size={14} />
                                        </button>
                                    </div>
                                    </div>
                                </div>
                                </div>

                                <div className="absolute right-5 top-5 z-20 font-mono text-[9px] text-white/40">
                                <span className="text-green-400">0{product.id}</span>
                                <span> / 03</span>
                                </div>
                            </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>

                        <div className="flex items-center justify-between border-t border-white/5 bg-[#050a08] px-4 py-2.5">
                        <div className="flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-green-400" />

                            <span className="font-mono text-[8px] tracking-[0.15em] text-gray-500">
                            LIVE FROM LABORATORY
                            </span>
                        </div>

                        <span className="font-mono text-[8px] tracking-[0.15em] text-green-400/60">
                            SYSTEM // READY
                        </span>
                        </div>
                    </div>

                    <div className="absolute -right-1 -top-1 h-6 w-6 border-r border-t border-green-400/50" />
                    <div className="absolute -bottom-1 -left-1 h-6 w-6 border-b border-l border-green-400/50" />
                </div>
            </div>
        </section>
    );
}