'use client';

import { ArrowRightIcon, ShieldCheckIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { useLaptopRepair } from "..";

export function CtaBanner() {
  const { WHATSAPP_URL } = useLaptopRepair();

  return (
    <section className="py-20 bg-linear-to-r from-[#03A64A] via-[#0BD061] to-[#33945E] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('/images/home-banner.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[90px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[90px]" />

      <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6">
        
        {/* Impact Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-black/80 backdrop-blur-md text-[#0BD061] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full border border-[#0BD061]/30">
          <ShieldCheckIcon size={18} weight="fill" />
          Não descarte seu equipamento antes de falar conosco.
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tight">
          Seu notebook pode ter conserto.
          <br />
          <span className="text-black/80">Faça um diagnóstico com nossos especialistas.</span>
        </h2>

        <p className="text-black/90 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Mais de 90% dos equipamentos considerados &ldquo;sem solução&rdquo; por outras assistências são recuperados em nosso laboratório.
        </p>

        {/* High Conversion CTA Button */}
        <div className="pt-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="mid-whatsapp-cta"
            className="group relative inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-extrabold px-10 py-5 rounded-2xl text-lg sm:text-xl transition-all duration-300 hover:scale-105 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.6)] border border-white/20 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <WhatsappLogoIcon size={30} weight="fill" className="text-[#0BD061] animate-bounce" />
            <span>Falar agora pelo WhatsApp</span>
            <ArrowRightIcon size={22} weight="bold" className="group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>

        <p className="text-black/75 text-xs sm:text-sm font-semibold">
          ✔ Resposta rápida em poucos minutos &nbsp;•&nbsp; ✔ Orçamento sem compromisso
        </p>
      </div>
    </section>
  );
}