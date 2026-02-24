'use client';

import { MagnifyingGlassIcon } from "@phosphor-icons/react";

interface FiltersProps {
    categories: any;
    search: any;
    setSearch: any;
    category: any;
    setCategory: any;
}

export function Filters({ categories, search, setSearch, category, setCategory }: FiltersProps) {

    return (
        <div className="flex flex-col lg:flex-row gap-6 items-end mb-10">
            <div className="flex-1 w-full">
                <label className="text-sm text-gray-400 mb-2 block">
                    Buscar produto
                </label>

                <div className="flex items-center rounded-xl border border-gray-600 bg-black/40 px-4 py-3 focus-within:border-[#03A64A] transition">
                    <input
                        type="text"
                        placeholder="Digite o nome do produto..."
                        className="w-full bg-transparent outline-none text-sm"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <MagnifyingGlassIcon size={18} className="text-gray-400" />
                </div>
            </div>
            <div>
                <label className="text-sm text-gray-400 mb-2 block">
                    Categoria
                </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="rounded-xl w-fit px-4 py-3 bg-black/40 border border-gray-600 text-sm focus:border-[#03A64A] outline-none transition text-white bg-zinc-900"
                >
                    <option value="todos">Todos</option>

                    {categories?.map((item: any) => (
                        <option key={item.id} value={item.category.name}>
                            {item.category.name}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
}