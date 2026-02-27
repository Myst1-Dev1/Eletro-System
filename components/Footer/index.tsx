'use client';

import Link from "next/link";
import {
    InstagramLogoIcon,
    FacebookLogoIcon,
    WhatsappLogoIcon,
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon
} from "@phosphor-icons/react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10">

            <div className="container py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#33945E] to-[#03A64A] bg-clip-text text-transparent">
                        Eletro System
                    </h3>

                    <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                        Especialistas em tecnologia, assistência técnica e produtos
                        de última geração para notebooks e computadores.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#03A64A] transition">
                            <InstagramLogoIcon size={20} />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#03A64A] transition">
                            <FacebookLogoIcon size={20} />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-[#03A64A] transition">
                            <WhatsappLogoIcon size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Navegação</h4>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><Link href="/produtos" className="hover:text-[#03A64A] transition">Categorias</Link></li>
                        <li><Link href="/servicos" className="hover:text-[#03A64A] transition">Serviços</Link></li>
                        <li><Link href="/quem-somos" className="hover:text-[#03A64A] transition">Quem Somos</Link></li>
                        <li><Link href="/contato" className="hover:text-[#03A64A] transition">Contato</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Suporte</h4>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><Link href="#" className="hover:text-[#03A64A] transition">Central de Ajuda</Link></li>
                        <li><Link href="#" className="hover:text-[#03A64A] transition">Trocas e Devoluções</Link></li>
                        <li><Link href="#" className="hover:text-[#03A64A] transition">Política de Privacidade</Link></li>
                        <li><Link href="#" className="hover:text-[#03A64A] transition">Termos de Uso</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-4">Contato</h4>

                    <ul className="space-y-4 text-gray-400 text-sm">
                        <li className="flex items-center gap-3">
                            <MapPinIcon size={18} className="text-[#03A64A]" />
                            São Paulo - SP
                        </li>

                        <li className="flex items-center gap-3">
                            <PhoneIcon size={18} className="text-[#03A64A]" />
                            (11) 99999-9999
                        </li>

                        <li className="flex items-center gap-3">
                            <EnvelopeIcon size={18} className="text-[#03A64A]" />
                            contato@eletrosystem.com
                        </li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-white/10 py-6">
                <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

                    <p>© 2026 Eletro System. Todos os direitos reservados.</p>

                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-[#03A64A] transition">
                            Privacidade
                        </Link>
                        <Link href="#" className="hover:text-[#03A64A] transition">
                            Termos
                        </Link>
                    </div>

                </div>
            </div>

        </footer>
    );
}