'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CaretDownIcon } from "@phosphor-icons/react";
import { useProductsStore } from "@/stores/useProductsStore";
import { useUserStore } from "@/stores/useUserStore";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface CategoriesDropDownProps {
    setMenuOpen: any;
}

export function CategoriesDropdown({ setMenuOpen }: CategoriesDropDownProps) {
    const { categories } = useProductsStore();
    const { isLogged } = useUserStore();

    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useGSAP(() => {
        if (open) {
            gsap.fromTo('.dropdown-container',
                { opacity: 0, y: -10, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' }
            );

            gsap.fromTo('.category-container', { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power1.out' })

            gsap.fromTo('.category-box',
                { opacity: 0, x: -5 },
                { opacity: 1, x: 0, duration: 0.3, stagger: 0.05, delay: 0.1, ease: 'power1.out' }
            );
        }
    }, { dependencies: [open], scope: dropdownRef });

    return (
        <>
            {isLogged && (
                <div className="dropdown-container nav-item relative" ref={dropdownRef}>
                    <div
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 cursor-pointer group"
                    >
                        <span className="font-semibold transition-all duration-300 group-hover:text-[#03A64A]">
                            Loja
                        </span>

                        <CaretDownIcon
                            size={16}
                            className={`transition-all duration-300 ${open ? "rotate-180 text-[#03A64A]" : "group-hover:text-[#03A64A]"
                                }`}
                        />
                    </div>

                    {open && (
                        <div className="category-container absolute top-10 left-0 w-fit bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-2 animate-fadeIn overflow-hidden z-50">
                            <div className="px-3 py-2 mb-1">
                                <h4 className="text-[11px] uppercase tracking-widest text-zinc-500 font-bold">
                                    Categorias
                                </h4>
                            </div>

                            <div className="flex flex-col gap-1">
                                {categories?.data?.map((category: any) => (
                                    <Link
                                        href={`/produtos?categoria=${category.name}`}
                                        key={category.id}
                                        onClick={() => { setOpen(false); setMenuOpen(false); }}
                                        className="category-box group flex items-center justify-between px-3 py-2.5 rounded-lg text-zinc-300 hover:bg-white/5 hover:text-[#03A64A] transition-all duration-200"
                                    >
                                        <span className="text-sm font-medium capitalize">
                                            {category.name}
                                        </span>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}