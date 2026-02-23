'use client';

import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export function Filters() {
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
                    />
                    <MagnifyingGlassIcon size={18} className="text-gray-400" />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

                <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                        Categoria
                    </label>
                    <select className="rounded-xl w-fit px-4 py-3 bg-black/40 border border-gray-600 text-sm focus:border-[#03A64A] outline-none transition">
                        <option value="todos">Todas</option>
                        <option value="notebooks">Notebooks</option>
                        <option value="computadores">Computadores</option>
                        <option value="perifericos">Periféricos</option>
                        <option value="monitores">Monitores</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                        Preço
                    </label>
                    <select className="rounded-xl w-fit px-4 py-3 bg-black/40 border border-gray-600 text-sm focus:border-[#03A64A] outline-none transition">
                        <option value="todos">Todos</option>
                        <option value="0-1000">R$ 0 - R$ 1.000</option>
                        <option value="1000-2000">R$ 1.000 - R$ 2.000</option>
                        <option value="2000-3000">R$ 2.000 - R$ 3.000</option>
                        <option value="3000+">R$ 3.000+</option>
                    </select>
                </div>

                <div>
                    <label className="text-sm text-gray-400 mb-2 block">
                        Ordenar
                    </label>
                    <select className="rounded-xl w-fit px-4 py-3 bg-black/40 border border-gray-600 text-sm focus:border-[#03A64A] outline-none transition">
                        <option value="mais-recente">Mais recente</option>
                        <option value="menor-preco">Menor preço</option>
                        <option value="maior-preco">Maior preço</option>
                        <option value="mais-vendidos">Mais vendidos</option>
                    </select>
                </div>

            </div>

            <button className="cursor-pointer h-[46px] px-6 rounded-xl font-semibold bg-gradient-to-r from-[#33945E] to-[#03A64A] hover:brightness-110 transition-all shadow-md whitespace-nowrap">
                Filtrar
            </button>

        </div>
    );
}