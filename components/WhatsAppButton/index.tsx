'use client';

import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function WhatsAppButton() {
    const phoneNumber = "5521989810973";
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para meu setup.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center">
            <span className="absolute inline-flex h-20 w-20 animate-ping rounded-full bg-[#25D366] opacity-20"></span>
            <span className="absolute inline-flex h-16 w-16 animate-pulse rounded-full bg-[#25D366] opacity-40"></span>

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_rgba(37,211,102,0.4)] transition-colors hover:bg-[#20ba5a]"
                aria-label="Contato via WhatsApp"
            >
                <WhatsappLogoIcon size={36} weight="fill" />

                <span className="absolute top-1 right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-4 border-[#25D366]"></span>
                </span>
            </motion.a>

            {/* Tooltip opcional que aparece ao carregar */}
            {/* <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                className="absolute right-20 whitespace-nowrap rounded-xl bg-white px-4 py-2 text-sm font-bold text-black shadow-xl md:block hidden"
            >
                Dúvidas? Fale conosco!
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 border-y-8 border-y-transparent border-l-8 border-l-white" />
            </motion.div> */}
        </div>
    );
}