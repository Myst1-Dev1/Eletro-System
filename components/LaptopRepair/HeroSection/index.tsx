'use client';

import { useState } from 'react';

import {
  ArrowRightIcon,
  CheckCircleIcon,
  MedalIcon,
  SealCheckIcon,
  ShoppingBagIcon,
  StarIcon,
  ThumbsUpIcon,
  VideoIcon,
  WhatsappLogoIcon,
  WrenchIcon,
} from '@phosphor-icons/react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import { useLaptopRepair } from '..';
import Link from 'next/link';

export function HeroSection() {
  const { WHATSAPP_URL, videos } = useLaptopRepair();

  const [activeVideo, setActiveVideo] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-black pt-20 pb-16 lg:py-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-br from-black via-[#050f08] to-black" />

      <div className="absolute top-0 right-0 w-150 h-150 bg-[#0BD061]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-120 h-120 bg-[#03A64A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-8 lg:py-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full min-w-0">

        {/* =========================================================
            LEFT COLUMN
        ========================================================== */}
        <div className="space-y-8 text-center lg:text-left min-w-0">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0BD061]/10 border border-[#0BD061]/30 text-[#0BD061] text-xs sm:text-sm font-semibold uppercase tracking-wider">
            <SealCheckIcon size={16} weight="fill" />

            Especialistas em Reparo de Notebooks
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
            Notebook não liga?{' '}

            <br className="hidden sm:block" />

            <span className="bg-linear-to-r from-[#0BD061] via-[#03A64A] to-[#4ade80] bg-clip-text text-transparent">
              A gente resolve.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed mx-auto lg:mx-0">
            Diagnóstico técnico especializado, reparo de placas com microscópio profissional e garantia em todos os serviços.{' '}

            <strong className="text-white font-semibold">
              Atendimento na Barra da Tijuca - RJ.
            </strong>
          </p>

          {/* CTA */}
         <div className="flex flex-col gap-4 justify-center lg:justify-start">
            {/* Botão Principal - WhatsApp */}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-cta"
              className="w-fit group relative flex items-center justify-center gap-3 bg-[#0BD061] hover:bg-[#09b856] text-black font-bold px-8 py-5 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_30px_-5px_rgba(11,208,97,0.5)] overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <WhatsappLogoIcon size={26} weight="fill" />

              Solicitar Orçamento Grátis

              <ArrowRightIcon
                size={20}
                weight="bold"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              href="/loja"
              className="w-fit group flex items-center justify-center gap-3 bg-zinc-900/80 hover:bg-zinc-800 text-white font-bold px-8 py-5 rounded-2xl text-lg transition-all duration-300 hover:scale-105 border border-zinc-800 hover:border-[#0BD061]/50 hover:shadow-[0_0_25px_-5px_rgba(11,208,97,0.3)]"
            >
              <ShoppingBagIcon size={24} weight="bold" className="text-[#0BD061]" />

              <span>Acesse nossa Loja</span>

              <ArrowRightIcon
                size={20}
                weight="bold"
                className="group-hover:translate-x-1 transition-transform text-zinc-400 group-hover:text-white"
              />
            </Link>
          </div>

          {/* =========================================================
              SOCIAL PROOF
          ========================================================== */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">

            {/* Google */}
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm min-w-0">
              <div className="flex text-[#0BD061] shrink-0">
                <StarIcon size={18} weight="fill" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-bold text-white leading-none">
                  ★★★★★
                </p>

                <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                  Avaliação Google
                </p>
              </div>
            </div>

            {/* Reparados */}
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm min-w-0">
              <WrenchIcon
                size={18}
                weight="fill"
                className="text-[#0BD061] shrink-0"
              />

              <div className="min-w-0">
                <p className="text-xs font-bold text-white leading-none">
                  +500
                </p>

                <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                  Reparados
                </p>
              </div>
            </div>

            {/* Clientes */}
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm min-w-0">
              <ThumbsUpIcon
                size={18}
                weight="fill"
                className="text-[#0BD061] shrink-0"
              />

              <div className="min-w-0">
                <p className="text-xs font-bold text-white leading-none">
                  +350
                </p>

                <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                  Clientes
                </p>
              </div>
            </div>

            {/* Experiência */}
            <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/3 border border-white/5 backdrop-blur-sm min-w-0">
              <MedalIcon
                size={18}
                weight="fill"
                className="text-[#0BD061] shrink-0"
              />

              <div className="min-w-0">
                <p className="text-xs font-bold text-white leading-none">
                  +8 Anos
                </p>

                <p className="text-[10px] text-gray-400 mt-0.5 truncate">
                  Experiência
                </p>
              </div>
            </div>

          </div>

          {/* =========================================================
              TRUST SIGNALS
          ========================================================== */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center lg:justify-start text-xs text-gray-400 pt-1">

            <span className="flex items-center gap-1.5">
              <CheckCircleIcon
                size={15}
                className="text-[#0BD061]"
                weight="fill"
              />

              Diagnóstico mediante avaliação
            </span>

            <span className="hidden sm:inline text-gray-600">
              •
            </span>

            <span className="flex items-center gap-1.5">
              <CheckCircleIcon
                size={15}
                className="text-[#0BD061]"
                weight="fill"
              />

              Atendimento com agendamento
            </span>

            <span className="hidden sm:inline text-gray-600">
              •
            </span>

            <span className="flex items-center gap-1.5">
              <CheckCircleIcon
                size={15}
                className="text-[#0BD061]"
                weight="fill"
              />

              Resposta rápida no WhatsApp
            </span>

          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN - VIDEO
        ========================================================== */}
        <div className="relative w-full min-w-0">

          {/* Video container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#0BD061]/30 shadow-[0_0_50px_-10px_rgba(11,208,97,0.3)] bg-black">

            {/* Top Tag Badge */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#0BD061] border border-[#0BD061]/30">
              <span className="w-2 h-2 rounded-full bg-[#0BD061] animate-ping shrink-0" />

              Laboratório EletroSystem
            </div>

              {videos.map((video) => (
                <div
                  key={video.src}
                  className="relative! h-full!"
                >
                  {/* Video */}
                  <video
                    src={video.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl text-xs font-medium text-white border border-white/10">

                    <div className="flex items-center gap-2 min-w-0">
                      <VideoIcon
                        size={16}
                        className="text-[#0BD061] shrink-0"
                        weight="fill"
                      />

                      <span className="truncate">
                        {video.label}
                      </span>
                    </div>

                    <span className="hidden sm:block text-[10px] text-gray-400 whitespace-nowrap">
                      Ao vivo no laboratório
                    </span>

                  </div>
                </div>
              ))}
          </div>

          <div className="absolute -inset-4 bg-[#0BD061]/15 rounded-3xl blur-2xl -z-10" />
        </div>

      </div>
    </section>
  );
}