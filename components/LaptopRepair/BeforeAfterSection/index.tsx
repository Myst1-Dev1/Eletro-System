'use client';

import { CheckCircleIcon, LaptopIcon, MonitorIcon } from "@phosphor-icons/react";
import { useLaptopRepair } from "..";

export function BeforeAfterSection() {
  const { ref, visible } = useLaptopRepair();

  const cases = [
    {
      icon: <LaptopIcon size={24} weight="fill" />,
      device: 'Notebook Dell Inspiron',
      problem: 'Não ligava — fusível queimado na placa de energia',
      solution: 'Diagnóstico por esquemático + reparo SMD',
      result: 'Funcionando como novo com garantia de 90 dias',
    },
    {
      icon: <LaptopIcon size={24} weight="fill" />,
      device: 'Notebook Lenovo IdeaPad',
      problem: 'Superaquecimento crítico — desligava sozinho',
      solution: 'Limpeza profunda + troca de pasta térmica',
      result: 'Temperatura normalizada, performance restaurada',
    },
    {
      icon: <MonitorIcon size={24} weight="fill" />,
      device: 'PC Gamer Personalizado',
      problem: 'Cliente queria montar setup do zero',
      solution: 'Consultoria de peças + montagem profissional',
      result: 'Setup 144hz entregue testado e funcionando',
    },
    {
      icon: <LaptopIcon size={24} weight="fill" />,
      device: 'MacBook Pro 2019',
      problem: 'Liquid damage — derramamento de líquido',
      solution: 'Ultrassom + reparo de componentes afetados',
      result: 'Placa recuperada, data preservada',
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-sm font-semibold uppercase tracking-widest">Casos Reais</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Antes & <span className="text-[#0BD061]">Depois</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Equipamentos que chegaram danificados e saíram funcionando. Veja alguns dos nossos casos.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {cases.map((c, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-[#050f08] border border-white/8 hover:border-[#0BD061]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0BD061]/10"
            >
              {/* Device header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-[#0BD061]/10 text-[#0BD061]">{c.icon}</div>
                <h3 className="text-white font-bold">{c.device}</h3>
              </div>

              {/* Flow */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-20 text-xs font-semibold text-red-400 uppercase shrink-0 pt-0.5">Problema</span>
                  <p className="text-gray-300 text-sm">{c.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-20 text-xs font-semibold text-yellow-400 uppercase shrink-0 pt-0.5">Solução</span>
                  <p className="text-gray-300 text-sm">{c.solution}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-20 text-xs font-semibold text-[#0BD061] uppercase shrink-0 pt-0.5">Resultado</span>
                  <p className="text-gray-300 text-sm">{c.result}</p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#0BD061]">
                <CheckCircleIcon size={14} weight="fill" />
                Equipamento entregue com garantia
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}