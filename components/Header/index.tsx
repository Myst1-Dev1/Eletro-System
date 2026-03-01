'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    UserIcon,
    ShoppingCartIcon,
    ListIcon,
    XIcon,
    ClipboardTextIcon,
    SignOutIcon
} from "@phosphor-icons/react";
import { CategoriesDropdown } from "./CategoriesDropDown";
import { LoginFormModal } from "./LoginFormModal";
import { Cart } from "./Cart";
import { useUIStore } from "@/stores/useUIStore";
import { useUserStore } from "@/stores/useUserStore";
import { useCartStore } from "@/stores/useCartStore";
import { SearchProducts } from "./SearchProducts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { WhatsAppButton } from "../WhatsAppButton";

export function Header() {
    const { openLoginModal } = useUIStore();
    const { isLogged, logout, isLoading } = useUserStore();
    const { cart } = useCartStore();

    const [menuOpen, setMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useGSAP(() => {
        gsap.fromTo('header', { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power1.inOut' })
    }, []);

    useGSAP(() => {
        gsap.fromTo(".menuMobile", {
            duration: 0.5,
            height: "0px",
            opacity: 0,
            y: -20,
            ease: "power2.out"
        }, {
            duration: 0.5,
            height: "100%",
            opacity: 1,
            y: 0,
            ease: "power2.out"
        })
    }, [menuOpen]);

    return (
        <>
            <header className="sticky bg-[#242424] top-0 z-50 shadow-xs shadow-green-500">
                <div className="container flex items-center justify-between py-4">
                    <Link href="/" className="shrink-0">
                        <Image
                            src="/images/logo.png"
                            width={160}
                            height={40}
                            alt="Logo Eletrosystem"
                            className="shrink-0 w-38 h-10 object-cover"
                        />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8">
                        <CategoriesDropdown />

                        <Link className="font-semibold hover:text-[#03A64A] transition" href="/quem-somos">
                            Quem Somos
                        </Link>

                        <Link className="font-semibold hover:text-[#03A64A] transition" href="/servicos">
                            Serviços
                        </Link>

                        <Link className="font-semibold hover:text-[#03A64A] transition" href="/contato">
                            Contato
                        </Link>
                    </nav>

                    <div className="hidden lg:flex items-center gap-6">

                        {isLogged
                            ?
                            <SearchProducts setMenuOpen={setMenuOpen} />

                            : ''
                        }

                        {isLogged ? isLoading ? 'Carregando...' :
                            <Link href="/pedidos" className="flex items-center gap-3 font-semibold hover:text-[#03A64A] transition-all duration-500">
                                <ClipboardTextIcon className="shrink-0" size={22} />
                                Meus Pedidos
                            </Link>
                            :
                            <div
                                className="cursor-pointer flex items-center gap-2 hover:text-[#03A64A] transition"
                                onClick={openLoginModal}
                            >
                                <UserIcon size={22} />
                                <span className="text-sm">Entrar</span>
                            </div>
                        }

                        {isLogged &&
                            <div
                                className="cursor-pointer relative flex items-center gap-2 hover:text-[#03A64A] transition"
                                onClick={() => setIsCartOpen(true)}
                            >
                                <ShoppingCartIcon className="shrink-0" size={22} />
                                <span className="text-sm">Carrinho</span>
                                {cart.length === 0 ? '' :
                                    <span className="absolute -top-2 -right-3 text-xs bg-[#03A64A] px-2 rounded-full">
                                        {cart.length}
                                    </span>
                                }
                            </div>}
                        {isLogged && (
                            <div onClick={logout} className="cursor-pointer transition-all duration-500 hover:text-green-500 flex items-center gap-3">
                                <SignOutIcon size={22} />
                                <span className="text-sm">Sair</span>
                            </div>
                        )}
                    </div>

                    <button
                        className="lg:hidden cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <XIcon size={26} /> : <ListIcon size={26} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="menuMobile px-6 lg:hidden bg-black border-t border-white/10 py-6 space-y-6">

                        {isLogged
                            ?
                            <SearchProducts setMenuOpen={setMenuOpen} />

                            : ''
                        }

                        <CategoriesDropdown />

                        <Link href="/quem-somos" className="block font-semibold">
                            Quem Somos
                        </Link>

                        <Link href="/servicos" className="block font-semibold">
                            Serviços
                        </Link>

                        <Link href="/contato" className="block font-semibold">
                            Contato
                        </Link>

                        <hr className="border-white/10" />

                        {isLogged ?
                            <Link href="/pedidos" className="flex items-center gap-3 font-semibold hover:text-[#03A64A] transition-all duration-500">
                                <ClipboardTextIcon className="shrink-0" size={22} />
                                Meus Pedidos
                            </Link>
                            :
                            <div onClick={() => { setMenuOpen(false); openLoginModal() }} className="flex items-center gap-3">
                                <UserIcon className="shrink-0" size={22} />
                                Entrar
                            </div>
                        }

                        {isLogged &&
                            <div onClick={() => { setMenuOpen(false); setIsCartOpen(true) }} className="relative flex items-center gap-3">
                                <ShoppingCartIcon size={22} />
                                Carrinho
                                {cart.length === 0 ? '' :
                                    <span className="absolute -top-2 left-3 text-xs bg-[#03A64A] px-2 rounded-full">
                                        {cart.length}
                                    </span>
                                }
                            </div>
                        }
                        {isLogged && (
                            <div onClick={logout} className="cursor-pointer transition-all duration-500 hover:text-green-500 flex items-center gap-3">
                                <SignOutIcon size={22} />
                                <span className="text-sm">Sair</span>
                            </div>
                        )}
                    </div>
                )}
            </header>

            <LoginFormModal />
            {isCartOpen && <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />}
            <WhatsAppButton />
        </>
    );
}