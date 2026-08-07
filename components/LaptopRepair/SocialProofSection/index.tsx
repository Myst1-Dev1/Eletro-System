'use client';

import { MedalIcon, StarIcon, ThumbsUpIcon, WrenchIcon } from "@phosphor-icons/react";
import { useLaptopRepair } from "..";

export function SocialProofSection() {
    const { ref, visible, useCounter } = useLaptopRepair();
  
    const equipamentos = useCounter(500, visible);
    const clientes = useCounter(350, visible);
    const anos = useCounter(8, visible);

  const stats = [
    { value: `+${equipamentos}`, label: 'Equipamentos reparados', icon: <WrenchIcon size={28} weight="fill" /> },
    { value: `+${clientes}`, label: 'Clientes satisfeitos', icon: <ThumbsUpIcon size={28} weight="fill" /> },
    { value: `+${anos}`, label: 'Anos de experiência', icon: <MedalIcon size={28} weight="fill" /> },
    {
      value: (
        <span className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} size={28} weight="fill" className="text-[#0BD061]" />
          ))}
        </span>
      ),
      label: 'Avaliação Google',
      icon: <StarIcon size={28} weight="fill" />,
    },
  ];

  return (
    <section className="bg-[#050f08] border-y border-[#0BD061]/10 py-16">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/3 border border-white/5 hover:border-[#0BD061]/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-[#0BD061]">{s.icon}</div>
            <div className="text-3xl lg:text-4xl font-extrabold text-white">{s.value}</div>
            <div className="text-sm text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}