'use client';

import Image from 'next/image';
import { WhatsappLogoIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useLaptopRepair } from '..';

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  
  const { WHATSAPP_URL } = useLaptopRepair();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/40'
        : 'bg-black/70 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Image
          src="/images/logo.png"
          width={160}
          height={48}
          alt="EletroSystem"
          className="w-40 h-18 lg:h-14 object-cover"
          priority
        />
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="header-whatsapp-cta"
          className="flex justify-center text-center items-center gap-2 bg-[#0BD061] hover:bg-[#03A64A] text-black font-bold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 text-sm shadow-lg shadow-[#0BD061]/30"
        >
          <WhatsappLogoIcon size={20} weight="fill" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </header>
  );
}