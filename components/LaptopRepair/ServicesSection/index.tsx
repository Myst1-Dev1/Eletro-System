'use client';

import { ArrowRightIcon, CheckCircleIcon, GameControllerIcon, LaptopIcon, MonitorIcon, WhatsappLogoIcon, WrenchIcon } from "@phosphor-icons/react";
import { useLaptopRepair } from "..";
import Image from "next/image";

export function ServicesSection() {
  const { ref, visible, WHATSAPP_URL } = useLaptopRepair();

  const services = [
    {
      image: '/images/manutencao-notebook.webp',
      icon: <LaptopIcon size={22} weight="fill" />,
      title: 'Reparo de Notebooks',
      description: 'Conserto especializado em qualquer marca e modelo. Não liga, tela quebrada, superaquecimento ou teclado falhando.',
      benefits: ['Diagnóstico eletrônico completo', 'Troca de tela e teclado', 'Reparo de placa-mãe', 'Limpeza e pasta térmica', 'Garantia de 90 dias'],
      price: 160
    },
    {
      image: '/images/manutencao-pc.webp',
      icon: <MonitorIcon size={22} weight="fill" />,
      title: 'Manutenção de Computadores',
      description: 'PC lento, travando, com vírus ou sem ligar? Diagnóstico preciso e reparo rápido com garantia total.',
      benefits: ['Formatação e reinstalação', 'Upgrade de hardware', 'Limpeza interna preventiva', 'Instalação de SSD NVMe', 'Otimização de performance'],
      price: 130
    },
    {
      image: '/images/montagem.webp',
      icon: <GameControllerIcon size={22} weight="fill" />,
      title: 'Montagem de PC Gamer',
      description: 'Montagem personalizada com as melhores peças do mercado. Setup completo e otimizado para máxima performance.',
      benefits: ['Consultoria de peças', 'Montagem profissional', 'Gerenciamento de cabos', 'Instalação do sistema', 'Testes de estresse e temperatura'],
      price: 200
    },
    {
      image: '/images/limpeza.webp',
      icon: <WrenchIcon size={22} weight="fill" />,
      title: 'Reparo de Placas (Nível III)',
      description: 'Soldagem SMD avançada com microscópio profissional. Recuperamos placas que outras assistências condenam.',
      benefits: ['Soldagem SMD avançada', 'Microscópio profissional', 'Diagnóstico por esquemático', 'Troca de componentes BGA', 'Equipamentos calibrados'],
      price: 0
    },
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-xs font-semibold uppercase tracking-[0.2em]">O que fazemos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Serviços <span className="text-[#0BD061]">Especializados</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Cada equipamento é tratado com o cuidado de um especialista. Diagnóstico preciso, reparo eficiente e transparência.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative flex flex-col bg-[#0a0a0a] border border-white/8 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[#0BD061]/50 hover:shadow-[0_0_30px_-5px_rgba(11,208,97,0.25)]"
            >
              {/* Image with zoom on hover */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.image}
                  fill
                  alt={s.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a]/60 via-black/30 to-[#0a0a0a]" />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 border border-[#0BD061]/40 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[#0BD061] text-xs font-semibold shadow-md">
                  {s.icon}
                  <span>{s.title}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 gap-5">
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>

                <ul className="space-y-2.5 flex-1">
                  {s.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircleIcon size={16} weight="fill" className="text-[#0BD061] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover-enhanced button */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 py-3.5 px-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 text-sm group-hover:bg-[#0BD061] group-hover:text-black group-hover:border-[#0BD061] group-hover:shadow-lg group-hover:shadow-[#0BD061]/25"
                >
                  <WhatsappLogoIcon size={19} weight="fill" />
                  <span>{s.price === 0 ? 'sob consulta' : `a partir de ${Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(s.price)}`}</span>
                  <ArrowRightIcon size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}