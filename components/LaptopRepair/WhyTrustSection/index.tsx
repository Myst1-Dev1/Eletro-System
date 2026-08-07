'use client';

import { ClockClockwiseIcon, CpuIcon, LightningIcon, MedalIcon, ShieldCheckIcon, ToolboxIcon } from "@phosphor-icons/react";
import { useLaptopRepair } from "..";

export function WhyTrustSection() {
  const { ref, visible } = useLaptopRepair();

  const items = [
    {
      icon: <ShieldCheckIcon size={32} weight="fill" />,
      title: 'Garantia em todos os serviços',
      desc: '90 dias de garantia em peças e mão de obra. Se o problema voltar, resolvemos sem custo adicional.',
    },
    {
      icon: <CpuIcon size={32} weight="fill" />,
      title: 'Equipamentos profissionais',
      desc: 'Microscópio, estação de solda, multímetros e ferramentas calibradas. Precisão cirúrgica no reparo.',
    },
    {
      icon: <LightningIcon size={32} weight="fill" />,
      title: 'Agilidade e transparência',
      desc: 'Orçamento enviado antes de qualquer reparo. Você decide se quer continuar. Sem surpresas na nota.',
    },
    {
      icon: <MedalIcon size={32} weight="fill" />,
      title: '+8 anos de experiência',
      desc: 'Técnicos especializados com vasta experiência em notebooks, computadores e placas-mãe.',
    },
    {
      icon: <ClockClockwiseIcon size={32} weight="fill" />,
      title: 'Diagnóstico rápido',
      desc: 'Maioria dos diagnósticos concluída em até 24h. Você sabe exatamente o que tem e quanto vai custar.',
    },
    {
      icon: <ToolboxIcon size={32} weight="fill" />,
      title: 'Peças de qualidade',
      desc: 'Trabalhamos com componentes originais e compatíveis de alta procedência. Durabilidade garantida.',
    },
  ];

  return (
    <section className="py-24 bg-[#050f08]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-sm font-semibold uppercase tracking-widest">Diferenciais</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Por que <span className="text-[#0BD061]">confiar</span> em nós?
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Mais do que conserto — entregamos tranquilidade e um equipamento funcionando como novo.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="group p-7 rounded-2xl bg-black border border-white/8 hover:border-[#0BD061]/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0BD061]/10 transition-all duration-300"
            >
              <div className="text-[#0BD061] mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}