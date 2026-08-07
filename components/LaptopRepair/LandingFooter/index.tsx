'use client';

import { ArrowRightIcon, ArrowUpRightIcon, ClockIcon, InstagramLogoIcon, MapPinIcon, PhoneIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useLaptopRepair } from "..";

export function LandingFooter() {
  const { WHATSAPP_URL } = useLaptopRepair();

  return (
    <footer className="bg-[#050f08] border-t border-[#0BD061]/10 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-white/5">

        {/* Brand */}
        <div className="space-y-4">
          <Image
            src="/images/logo.png"
            width={180}
            height={54}
            alt="EletroSystem"
            className="h-12 w-auto object-contain"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Especialistas em reparo de notebooks, computadores e placas eletrônicas em laboratório próprio.
          </p>
          
          {/* Selo Barra da Tijuca */}
          <div className="inline-flex items-center gap-2 bg-[#0BD061]/10 border border-[#0BD061]/30 px-3 py-1.5 rounded-full text-[#0BD061] text-xs font-semibold">
            <MapPinIcon size={16} weight="fill" />
            <span>📍 Atendimento na Barra da Tijuca - RJ</span>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href="https://www.instagram.com/eletrosystemti/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 rounded-xl hover:bg-[#0BD061] hover:text-black transition-all duration-300 text-gray-300"
              aria-label="Instagram"
            >
              <InstagramLogoIcon size={18} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 rounded-xl hover:bg-[#0BD061] hover:text-black transition-all duration-300 text-gray-300"
              aria-label="WhatsApp"
            >
              <WhatsappLogoIcon size={18} />
            </a>
            <a
              href="tel:+5521989810973"
              className="p-2.5 bg-white/5 rounded-xl hover:bg-[#0BD061] hover:text-black transition-all duration-300 text-gray-300"
              aria-label="Telefone"
            >
              <PhoneIcon size={18} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-5">Serviços</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {[
              'Reparo de Notebooks',
              'Manutenção de Computadores',
              'Montagem PC Gamer',
              'Reparo de Placas (Nível III)',
              'Limpeza Profissional',
            ].map((s) => (
              <li key={s}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0BD061] transition-colors flex items-center gap-2"
                >
                  <ArrowRightIcon size={12} className="text-[#0BD061]" />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Hours */}
        <div>
          <h4 className="text-white font-semibold mb-5">Contato & Horário</h4>
          <ul className="space-y-3.5 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPinIcon size={18} className="text-[#0BD061] shrink-0 mt-0.5" />
              <span>Barra da Tijuca, Rio de Janeiro - RJ</span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon size={18} className="text-[#0BD061] shrink-0" />
              <a href="tel:+5521989810973" className="hover:text-[#0BD061] transition-colors">(21) 9 8981-0973</a>
            </li>
            <li className="flex items-center gap-3">
              <ClockIcon size={18} className="text-[#0BD061] shrink-0" />
              <span>Seg – Sex: 09h às 18h | Sáb: 09h às 12h</span>
            </li>
          </ul>

          <div className="mt-6">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#0BD061]/40 text-[#0BD061] text-xs font-semibold rounded-xl hover:bg-[#0BD061] hover:text-black transition-all duration-300"
            >
              <ArrowUpRightIcon size={16} />
              Ver todos os serviços
            </Link>
          </div>
        </div>

        {/* Google Maps / Localização Ilustrativa */}
        <div>
          <h4 className="text-white font-semibold mb-3">Nossa Localização</h4>
          <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-white/10 bg-black/60 group">
            <iframe
              title="Localização EletroSystem Barra da Tijuca"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58775.25816999335!2d-43.3768222!3d-23.0003714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695d36e2f1%3A0x6b9d628dd53b52d2!2sBarra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(120deg) contrast(1.2)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 pointer-events-none border border-[#0BD061]/20 rounded-xl" />
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto px-4 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
        <p>© 2026 EletroSystem. Todos os direitos reservados.</p>
        <div className="flex items-center gap-2">
          <span>Desenvolvido por</span>
          <a href="https://www.mystdev.com.br/" target="_blank" rel="noopener noreferrer">
            <Image src="/images/myst-logo.webp" width={80} height={24} alt="MystDev" className="w-auto object-contain" />
          </a>
        </div>
      </div>
    </footer>
  );
}