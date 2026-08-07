'use client';

import { useLaptopRepair } from "..";

export function HowItWorksSection() {
  const { ref, visible } = useLaptopRepair();

  const steps = [
    { num: '01', title: 'Recebemos o equipamento', desc: 'Traga ou envie seu dispositivo. Atendemos com agendamento.' },
    { num: '02', title: 'Diagnóstico técnico', desc: 'Avaliação completa em até 24h por técnico especializado.' },
    { num: '03', title: 'Orçamento transparente', desc: 'Enviamos o orçamento pelo WhatsApp. Sem surpresas.' },
    { num: '04', title: 'Aprovação', desc: 'Você decide se aprova o serviço. Só então iniciamos o reparo.' },
    { num: '05', title: 'Reparo profissional', desc: 'Nossos técnicos realizam o reparo com equipamentos profissionais.' },
    { num: '06', title: 'Testes rigorosos', desc: 'Testamos o equipamento exaustivamente antes de liberar.' },
    { num: '07', title: 'Entrega com garantia', desc: 'Equipamento entregue funcionando com garantia de 90 dias.' },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-sm font-semibold uppercase tracking-widest">Processo</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Como <span className="text-[#0BD061]">funciona</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Um processo claro, transparente e eficiente do início ao fim.
          </p>
        </div>

        <div
          ref={ref}
          className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-[#0BD061] via-[#03A64A]/40 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
              >
                {/* Content */}
                <div className={`sm:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                  <div
                    className={`p-5 rounded-2xl bg-[#050f08] border border-white/8 hover:border-[#0BD061]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0BD061]/10`}
                  >
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                      <span className="text-[#0BD061] text-xs font-bold tracking-widest">{step.num}</span>
                      <h3 className="text-white font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Circle */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#0BD061] text-black font-extrabold text-sm shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 shadow-lg shadow-[#0BD061]/50">
                  {i + 1}
                </div>

                {/* Empty space for alternate side */}
                <div className="hidden sm:block sm:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}