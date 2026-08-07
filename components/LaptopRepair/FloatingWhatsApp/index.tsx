'use client';

import { WhatsappLogoIcon } from '@phosphor-icons/react';
import { useLaptopRepair } from '..';

export function FloatingWhatsApp() {
  const { WHATSAPP_URL } = useLaptopRepair();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-110 group border border-white/20"
    >
      {/* Pulse Rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />
      
      <WhatsappLogoIcon size={32} weight="fill" className="shrink-0" />
      
      <div className="hidden sm:flex flex-col text-left leading-tight pr-1">
        <span className="text-[10px] uppercase font-semibold text-white/80 tracking-wide">Atendimento Online</span>
        <span className="text-sm font-bold text-white">Falar no WhatsApp</span>
      </div>
    </a>
  );
}
