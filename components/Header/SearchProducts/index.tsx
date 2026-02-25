"use client";

import { useProductsStore } from "@/stores/useProductsStore";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface SearchProductsProps {
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SearchProducts({ setMenuOpen }: SearchProductsProps) {
    const { products } = useProductsStore();

    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const searchRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const filteredProducts = products?.data
        ?.filter((product: any) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 5);

    return (
        <div className="relative" ref={searchRef}>
            <div className="relative flex items-center bg-white/5 border border-white/10 rounded-xl px-4 py-2 focus-within:border-[#03A64A] transition-all">
                <input
                    type="text"
                    placeholder="Pesquisar produtos..."
                    className="bg-transparent outline-none text-sm w-52"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                />
                <MagnifyingGlassIcon size={20} className="text-[#03A64A]" />
            </div>

            {isOpen && search.length > 0 && (
                <div className="absolute top-full mt-2 left-0 w-full bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl z-50 overflow-hidden">

                    {filteredProducts?.length === 0 && (
                        <div className="px-4 py-3 text-sm text-zinc-400">
                            Nenhum produto encontrado
                        </div>
                    )}

                    <div className="max-h-72 overflow-y-auto">
                        {filteredProducts?.map((product: any) => (
                            <Link
                                href={`/produto/${product.id}`}
                                key={product.id}
                                onClick={() => {
                                    setIsOpen(false);
                                    setSearch("");
                                    setMenuOpen(false);
                                }}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition"
                            >
                                <Image
                                    src={`https://admin.eletrosystemti.com.br/uploads/${product.image}`}
                                    alt={product.name}
                                    width={40}
                                    height={40}
                                    className="rounded-lg object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium">
                                        {product.name}
                                    </p>
                                    <p className="text-xs text-[#03A64A]">
                                        R$ {Number(product.price).toFixed(2)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}