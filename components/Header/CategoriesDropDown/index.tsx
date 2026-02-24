'use client';

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CaretDownIcon } from "@phosphor-icons/react";

export function CategoriesDropdown() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const categories = [
        "Periférico",
    ];

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

            {/* DROPDOWN */}
            {open && (
                <div className="flex flex-col w-fit transition-all duration-500 absolute top-8 left-0 w-56 bg-zinc-900 border border-white/10 rounded-xl shadow-lg py-3 animate-fadeIn">
                    {categories.map((category) => (
                        <Link
                            href={`/produtos?categoria=${category}`}
                            key={category}
                            onClick={() => setOpen(false)}
                            className="w-full cursor-pointer text-left px-4 py-2 hover:bg-[#03A64A]/20 transition-all text-sm capitalize"
                        >
                            {category}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}