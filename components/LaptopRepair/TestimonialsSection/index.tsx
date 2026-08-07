'use client';

import { MapPinIcon, StarIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useLaptopRepair } from "..";

export function TestimonialsSection() {
  const { ref, visible } = useLaptopRepair();

  const testimonials = [
    {
      name: 'Carlos Mendes',
      role: 'Designer Freelancer',
      location: 'Barra da Tijuca, RJ',
      avatar: '/images/user1.jpg',
      text: 'Meu notebook caiu e a tela quebrou. Trouxe para a EletroSystem, foram super rápidos — em 2 dias já estava pronto. Preço justo e garantia. Recomendo demais!',
      stars: 5,
    },
    {
      name: 'Ana Beatriz',
      role: 'Estudante de Medicina',
      location: 'Recreio dos Bandeirantes, RJ',
      avatar: '/images/user2.jpg',
      text: 'Notebook travando o tempo todo e esquentando muito. Me ajudaram com diagnóstico, limpeza interna, upgrade de SSD NVMe e sistema novo. Agora está voando!',
      stars: 5,
    },
    {
      name: 'Renato Costa',
      role: 'Empreendedor',
      location: 'Jacarepaguá, RJ',
      avatar: '/images/user3.jpg',
      text: 'Procurei vários técnicos e todos disseram que minha placa-mãe estava perdida e sem conserto. A EletroSystem recuperou! Trabalho incrível e muito profissional.',
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#050f08] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-xs font-semibold uppercase tracking-[0.2em]">
            Depoimentos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            O que dizem nossos <span className="text-[#0BD061]">clientes</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            A satisfação dos nossos clientes é nossa maior garantia de qualidade e transparência.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-black/80 border border-white/8 hover:border-[#0BD061]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(11,208,97,0.2)] flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <StarIcon key={j} size={18} weight="fill" className="text-[#0BD061]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-[#0BD061] bg-[#0BD061]/10 px-2 py-0.5 rounded-full border border-[#0BD061]/20">
                    Cliente Verificado
                  </span>
                </div>

                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &#34;{t.text}&ldquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/8">
                <Image
                  src={t.avatar}
                  width={48}
                  height={48}
                  alt={t.name}
                  className="rounded-full object-cover w-12 h-12 border border-[#0BD061]/30 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-white text-sm font-bold leading-snug">{t.name}</p>
                  <p className="text-gray-400 text-xs truncate">{t.role}</p>
                  <div className="flex items-center gap-1 text-[11px] text-[#0BD061]/90 mt-0.5">
                    <MapPinIcon size={12} weight="fill" />
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}