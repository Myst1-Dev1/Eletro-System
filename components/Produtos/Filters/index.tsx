'use client';

import { MagnifyingGlassIcon, FunnelIcon, XCircleIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

interface FiltersProps {
    categories: any;
    search: any;
    setSearch: any;
    category: any;
    setCategory: any;
}

export function Filters({ categories, search, setSearch, category, setCategory }: FiltersProps) {

    const uniqueCategories = Array.from(
        new Map(
            categories?.map((item: any) => [item.category.name, item])
        ).values()
    );

    console.log('aqui', categories);

    return (
        <div className="flex flex-col gap-4 mb-12">

            <div className="relative shrink-0 group max-xl w-full">
                <div className="absolute -inset-0.5 rounded-2xl blur opacity-75 group-focus-within:opacity-100 transition duration-500" />
                <div className="relative flex items-center rounded-2xl border border-white/10 bg-[#0d0d0d] px-6 py-4 focus-within:border-[#03A64A]/50 transition-all">
                    <MagnifyingGlassIcon size={22} className="text-gray-500 group-focus-within:text-[#03A64A] transition-colors" />
                    <input
                        type="text"
                        placeholder="O que você está procurando hoje?"
                        className="w-full bg-transparent outline-none text-base ml-4 text-white placeholder:text-gray-600 font-medium"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {search && (
                        <button onClick={() => setSearch('')} className="text-gray-500 hover:text-white transition-colors">
                            <XCircleIcon size={20} weight="fill" />
                        </button>
                    )}
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 ml-1">
                    <FunnelIcon size={14} weight="fill" />
                    Filtrar por Categoria
                </div>

                <div className="flex flex-wrap gap-3">
                    <button
                        onClick={() => setCategory('todos')}
                        className={`
                            px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border
                            ${category === 'todos'
                                ? 'bg-[#03A64A] border-[#03A64A] text-black shadow-[0_10px_20px_rgba(3,166,74,0.2)]'
                                : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20 hover:text-white'}
                        `}
                    >
                        Todos
                    </button>

                    {uniqueCategories?.map((item: any) => {
                        const name = item.category.name;
                        const isSelected = category === name;

                        return (
                            <button
                                key={item.id}
                                onClick={() => setCategory(name)}
                                className={`
                                    px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 border
                                    ${isSelected
                                        ? 'bg-[#03A64A] border-[#03A64A] text-black shadow-[0_10px_20px_rgba(3,166,74,0.2)]'
                                        : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20 hover:text-white'}
                                `}
                            >
                                {name}
                            </button>
                        );
                    })}
                </div>
            </div>

            {search && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-gray-500 font-medium"
                >
                    Mostrando resultados para: <span className="text-[#03A64A] font-bold">"{search}"</span>
                </motion.p>
            )}
        </div>
    );
}