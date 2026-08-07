'use client';

import {
  ArrowDownIcon,
  CheckCircleIcon,
  XCircleIcon,
  CpuIcon,
  ThermometerIcon,
  GameControllerIcon,
  ArrowRightIcon,
} from "@phosphor-icons/react";
import { useLaptopRepair } from "..";

interface CaseStep {
  label: string;
  type?: 'problem' | 'step' | 'success';
}

interface CaseStudy {
  title: string;
  device: string;
  icon: React.ReactNode;
  steps: CaseStep[];
  badge: string;
}

const CASES: CaseStudy[] = [
  {
    title: 'Recuperação de Placa Curto-circuito',
    device: 'Notebook Dell XPS 15',
    badge: 'Reparo de Placa',
    icon: <CpuIcon size={24} weight="fill" />,
    steps: [
      { label: 'Não ligava (Curto na entrada)', type: 'problem' },
      { label: 'Diagnóstico eletrônico SMD', type: 'step' },
      { label: 'Substituição de mosfets queimados', type: 'step' },
      { label: 'Equipamento 100% funcional com garantia', type: 'success' },
    ],
  },
  {
    title: 'Superaquecimento e Desligamento',
    device: 'MacBook Pro 15"',
    badge: 'Manutenção Térmica',
    icon: <ThermometerIcon size={24} weight="fill" />,
    steps: [
      { label: 'Superaquecendo e travando', type: 'problem' },
      { label: 'Desmontagem e higienização interna', type: 'step' },
      { label: 'Aplicação de pasta térmica metálica', type: 'step' },
      { label: 'Temperatura reduzida em -32°C', type: 'success' },
    ],
  },
  {
    title: 'PC Gamer Alta Performance',
    device: 'Setup Custom RTX 4080',
    badge: 'Montagem & Setup',
    icon: <GameControllerIcon size={24} weight="fill" />,
    steps: [
      { label: 'Peças avulsas sem montagem', type: 'problem' },
      { label: 'Montagem e cable management', type: 'step' },
      { label: 'Instalação de BIOS e stress test', type: 'step' },
      { label: 'Entrega rápida com máxima estabilidade', type: 'success' },
    ],
  },
];

export function RealCasesSection() {
  const { ref, visible } = useLaptopRepair();

  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#0BD061]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-xs font-semibold uppercase tracking-[0.2em]">
            Histórias de Sucesso
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Casos <span className="text-[#0BD061]">Reais</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Conheça alguns dos equipamentos recuperados por nossa equipe e veja como transformamos problemas graves em soluções definitivas.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {CASES.map((c, i) => (
            <div
              key={i}
              className="group relative flex flex-col bg-[#080f0a] border border-white/8 rounded-2xl p-6 sm:p-7 hover:border-[#0BD061]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(11,208,97,0.2)]"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3 mb-6 pb-5 border-b border-white/8">
                <div>
                  <span className="inline-block text-[10px] font-semibold text-[#0BD061] uppercase tracking-wider bg-[#0BD061]/10 px-2.5 py-1 rounded-md border border-[#0BD061]/20 mb-2">
                    {c.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#0BD061] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">{c.device}</p>
                </div>
                <div className="p-3 bg-white/4 rounded-xl text-[#0BD061] border border-white/5 shrink-0">
                  {c.icon}
                </div>
              </div>

              {/* Steps Flow */}
              <div className="flex flex-col gap-3 flex-1">
                {c.steps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className={`w-full flex items-center gap-3 p-3 rounded-xl border text-xs sm:text-sm font-medium transition-colors ${
                        step.type === 'problem'
                          ? 'bg-red-500/10 border-red-500/20 text-red-300'
                          : step.type === 'success'
                          ? 'bg-[#0BD061]/10 border-[#0BD061]/30 text-[#0BD061] font-semibold'
                          : 'bg-white/3 border-white/5 text-gray-300'
                      }`}
                    >
                      {step.type === 'problem' && (
                        <XCircleIcon size={18} weight="fill" className="text-red-400 shrink-0" />
                      )}
                      {step.type === 'step' && (
                        <ArrowRightIcon size={16} className="text-gray-500 shrink-0" />
                      )}
                      {step.type === 'success' && (
                        <CheckCircleIcon size={18} weight="fill" className="text-[#0BD061] shrink-0" />
                      )}
                      <span className="leading-tight">{step.label}</span>
                    </div>

                    {idx < c.steps.length - 1 && (
                      <ArrowDownIcon size={14} className="text-gray-600 my-1 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
