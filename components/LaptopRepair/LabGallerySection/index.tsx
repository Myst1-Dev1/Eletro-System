'use client';

import {
  PlayCircleIcon,
  WhatsappLogoIcon,
  CheckCircleIcon,
  RecordIcon,
  ShieldCheckIcon,
} from '@phosphor-icons/react';
import Image from 'next/image';
import { useState } from 'react';
import { useLaptopRepair } from '..';

// ─── Tipos ────────────────────────────────────────────────────────────────────

interface VideoItem {
  src: string;
  thumb: string;
  title: string;
  description: string;
  duration: string;
  tag: string;
}

// ─── Dados ────────────────────────────────────────────────────────────────────

const VIDEO_ITEMS: VideoItem[] = [
  {
    src: '/videos/reparo-video.mp4',
    thumb: '/images/manutencao-notebook.webp',
    title: 'Reparo de Placa-mãe',
    description: 'Diagnóstico e soldagem de componentes SMD com estação profissional.',
    duration: '2:14',
    tag: 'Caso Real',
  },
  {
    src: '/videos/limpeza-video.mp4',
    thumb: '/images/limpeza.webp',
    title: 'Limpeza Preventiva',
    description: 'Desmontagem completa, higienização e lubrificação das ventoinhas.',
    duration: '1:47',
    tag: 'Gravado em nossa oficina',
  },
  {
    src: '/videos/montagem-video.mp4',
    thumb: '/images/montagem.webp',
    title: 'Montagem de PC Gamer',
    description: 'Montagem personalizada com gerenciamento de cabos e teste de estresse.',
    duration: '3:02',
    tag: 'Caso Real',
  },
  {
    src: '/videos/reparo-video.mp4',
    thumb: '/images/manutencao-notebook.webp',
    title: 'Troca de SSD',
    description: 'Substituição de armazenamento com clonagem do sistema operacional.',
    duration: '1:33',
    tag: 'Caso Real',
  },
  {
    src: '/videos/limpeza-video.mp4',
    thumb: '/images/limpeza.webp',
    title: 'Soldagem SMD Avançada',
    description: 'Retrabalho BGA em GPU com estação de ar quente e microscópio.',
    duration: '4:20',
    tag: 'Gravado em nossa oficina',
  },
];

const CREDENTIALS = [
  'Equipamentos profissionais',
  'Técnicos especializados',
  'Diagnóstico técnico',
  'Serviço realizado em laboratório próprio',
];

// ─── Componente ───────────────────────────────────────────────────────────────

export function LabGallerySection() {
  const { ref, visible, WHATSAPP_URL } = useLaptopRepair();
  const [activeIndex, setActiveIndex] = useState(0);

  const active = VIDEO_ITEMS[activeIndex];

  return (
    <section className="py-24 bg-[#050f08]">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-xs font-semibold uppercase tracking-[0.2em]">
            Laboratório
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Nosso Laboratório{' '}
            <span className="text-[#0BD061]">em Ação</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Conheça alguns dos reparos realizados pela nossa equipe. Utilizamos equipamentos
            profissionais e técnicas especializadas para recuperar notebooks, computadores e
            placas eletrônicas.
          </p>
        </div>

        {/* ── Player + Miniaturas ───────────────────────────────────────────── */}
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-4 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* ─── Vídeo principal ──────────────────────────────────────────── */}
          <div className="flex-1 flex flex-col gap-4 min-w-0">
            {/* Player */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/8 shadow-[0_0_40px_-10px_rgba(11,208,97,0.25)]">
              {/* Etiqueta */}
              <span className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-[#0BD061] text-[10px] font-semibold px-2.5 py-1 rounded-full border border-[#0BD061]/30">
                <RecordIcon size={8} weight="fill" className="animate-pulse" />
                {active.tag}
              </span>

              {/* Vídeo */}
              <video
                key={active.src + activeIndex}
                src={active.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Rodapé do vídeo */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 pt-10 pb-4">
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm sm:text-base leading-tight line-clamp-1">
                      {active.title}
                    </p>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-1">
                      {active.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-[#0BD061] text-xs font-mono bg-[#0BD061]/10 border border-[#0BD061]/20 px-2 py-0.5 rounded-md">
                    {active.duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Legenda de autenticidade */}
            <div className="flex items-center justify-center gap-2 text-center text-xs text-gray-400 py-1 bg-white/2 rounded-lg border border-white/5">
              <ShieldCheckIcon size={16} className="text-[#0BD061] shrink-0" />
              <span>Reparo realizado em laboratório próprio utilizando equipamentos profissionais.</span>
            </div>

            {/* Faixa de credenciais */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CREDENTIALS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-white/3 border border-white/8 backdrop-blur-sm rounded-xl px-3 py-2.5"
                >
                  <CheckCircleIcon
                    size={14}
                    weight="fill"
                    className="shrink-0 text-[#0BD061]"
                  />
                  <span className="text-gray-300 text-[11px] leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Coluna de miniaturas ─────────────────────────────────────── */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:w-72 shrink-0 pb-1 lg:pb-0 scrollBarX">
            {VIDEO_ITEMS.map((video, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`flex items-center gap-3 shrink-0 w-64 lg:w-full rounded-xl border transition-all duration-300 p-2 text-left group ${
                  activeIndex === i
                    ? 'bg-[#0BD061]/10 border-[#0BD061]/40 shadow-[0_0_16px_-4px_rgba(11,208,97,0.3)]'
                    : 'bg-white/3 border-white/8 hover:bg-white/6 hover:border-white/15'
                }`}
              >
                {/* Thumbnail */}
                <div className="relative w-20 aspect-video rounded-lg overflow-hidden shrink-0 bg-black">
                  <Image
                    src={video.thumb}
                    fill
                    alt={video.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="80px"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <PlayCircleIcon
                    size={20}
                    weight="fill"
                    className={`absolute inset-0 m-auto transition-all duration-300 ${
                      activeIndex === i ? 'text-[#0BD061]' : 'text-white/70 group-hover:text-white'
                    }`}
                  />
                </div>

                {/* Metadados */}
                <div className="min-w-0 flex-1">
                  <p
                    className={`text-xs font-medium leading-tight line-clamp-2 transition-colors duration-300 ${
                      activeIndex === i ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}
                  >
                    {video.title}
                  </p>
                  <span
                    className={`mt-1 text-[10px] font-mono ${
                      activeIndex === i ? 'text-[#0BD061]' : 'text-gray-500'
                    }`}
                  >
                    {video.duration}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-gray-400 text-sm">Gostou do nosso trabalho?</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0BD061] hover:bg-[#09b856] text-black font-bold text-base px-8 py-4 rounded-2xl shadow-lg shadow-[#0BD061]/30 transition-all duration-300 hover:scale-105 hover:shadow-[#0BD061]/50"
          >
            <WhatsappLogoIcon size={22} weight="fill" />
            Solicite um orçamento pelo WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}