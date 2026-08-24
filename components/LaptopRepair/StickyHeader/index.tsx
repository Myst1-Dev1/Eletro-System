'use client';

import Image from 'next/image';
import { ShoppingCartIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Cart } from '@/components/Header/Cart';
import { useCartStore } from '@/stores/useCartStore';

export function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { isOpen, openCart, cart } = useCartStore();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/40'
        : 'bg-black/70 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href='/'>
          <Image
            src="/images/logo.png"
            width={160}
            height={48}
            alt="EletroSystem"
            className="w-40 h-18 lg:h-14 object-cover"
            priority
          />
        </Link>
        {/* <Link 
          href='/loja' 
          className="text-gray-300 hover:text-[#00e676] font-medium transition-colors duration-200 tracking-wide text-sm md:text-base"
        >
          Loja
        </Link> */}
        {/* <div className="flex items-center gap-5"> */}
          <div className='relative'>
            <ShoppingCartIcon onClick={() => openCart()} className="text-xl cursor-pointer hover:text-[#00e676] stroke-[2.5]" />
            {cart.length > 0 && (
                  <span className="absolute -top-2 -right-3 text-[10px] font-black bg-[#03A64A] text-black h-5 w-5 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(3,166,74,0.5)] animate-bounce">
                      {cart.length}
                  </span>
              )}
          </div>
          {/* <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-cta"
            className="hidden lg:flex justify-center text-center items-center gap-2 bg-[#0BD061] hover:bg-[#03A64A] text-black font-bold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 text-sm shadow-lg shadow-[#0BD061]/30"
          >
            <WhatsappLogoIcon size={20} weight="fill" />
            <span>Falar no WhatsApp</span>
          </Link>
        </div> */}
      </div>
    </header>
     {isOpen && <Cart />}
    </>
  );
}