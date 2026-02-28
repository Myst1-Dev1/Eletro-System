'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CaretDownIcon } from "@phosphor-icons/react";
import { useProductsStore } from "@/stores/useProductsStore";
import { useUserStore } from "@/stores/useUserStore";

export function CategoriesDropdown() {
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

    return (
        <>
            {isLogged && (
                <div className="relative" ref={dropdownRef}>
                    <div
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 cursor-pointer group"
                    >
                        <span className="font-semibold transition-all duration-300 group-hover:text-[#03A64A]">
                            Categorias
                        </span>

                        <CaretDownIcon
                            size={16}
                            className={`transition-all duration-300 ${open ? "rotate-180 text-[#03A64A]" : "group-hover:text-[#03A64A]"
                                }`}
                        />
                    </div>

                    {open && (
                        <div className="flex flex-col w-fit transition-all duration-500 absolute top-8 left-0 w-56 bg-zinc-900 border border-white/10 rounded-xl shadow-lg py-3 animate-fadeIn">
                            {categories?.data?.map((category: any) => (
                                <Link
                                    href={`/produtos?categoria=${category.name}`}
                                    key={category.id}
                                    onClick={() => setOpen(false)}
                                    className="w-full cursor-pointer text-left px-4 py-2 hover:bg-[#03A64A]/20 transition-all text-sm capitalize"
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
}