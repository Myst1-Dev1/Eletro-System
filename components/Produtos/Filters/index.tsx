'use client';

import { MagnifyingGlassIcon } from "@phosphor-icons/react";

export function Filters() {
    return (
        <div className="w-full flex flex-col gap-2">
            <div className="flex justify-between flex-wrap lg:gap-0 gap-5">
                <div className="flex justify-between items-center max-w-md w-full rounded-lg border border-gray-400 p-3 bg-black/30">
                    <input type="text" className="outline-none w-full pr-3 bg-transparent" placeholder="Digite o nome do produto" />
                    <MagnifyingGlassIcon size={20} color="#fff" />
                </div>
                <div className="flex flex-wrap gap-5">
                    <select className="rounded-md p-3 w-fit border border-gray-400 outline-none">
                        <option value="todos" className="text-black">Categoria</option>
                        <option value="notebooks" className="text-black">Notebooks</option>
                        <option value="computadores" className="text-black">Computadores</option>
                        <option value="perifericos" className="text-black">Periféricos</option>
                        <option value="monitores" className="text-black">Monitores</option>
                    </select>
                    <select className="rounded-md p-3 w-fit border border-gray-400 outline-none">
                        <option value="todos" className="text-black">Filtrar por preço</option>
                        <option value="0-1000" className="text-black">R$ 0 - R$ 1.000</option>
                        <option value="1000-2000" className="text-black">R$ 1.000 - R$ 2.000</option>
                        <option value="2000-3000" className="text-black">R$ 2.000 - R$ 3.000</option>
                        <option value="3000-4000" className="text-black">R$ 3.000 - R$ 4.000</option>
                        <option value="4000-5000" className="text-black">R$ 4.000 - R$ 5.000</option>
                        <option value="5000-6000" className="text-black">R$ 5.000 - R$ 6.000</option>
                        <option value="6000-7000" className="text-black">R$ 6.000 - R$ 7.000</option>
                        <option value="7000-8000" className="text-black">R$ 7.000 - R$ 8.000</option>
                        <option value="8000-9000" className="text-black">R$ 8.000 - R$ 9.000</option>
                        <option value="9000-10000" className="text-black">R$ 9.000 - R$ 10.000</option>
                        <option value="10000+" className="text-black">R$ 10.000+</option>
                    </select>
                    <select className="rounded-md p-3 w-fit border border-gray-400 outline-none">
                        <option value="todos" className="text-black">Ordenar por</option>
                        <option value="menor-preco" className="text-black">Menor preço</option>
                        <option value="maior-preco" className="text-black">Maior preço</option>
                        <option value="mais-vendidos" className="text-black">Mais vendidos</option>
                        <option value="mais-recente" className="text-black">Mais recente</option>
                    </select>
                </div>
            </div>
            <button className="ml-auto cursor-pointer relative z-10 mt-5 px-4 py-3 bg-gradient-to-r from-[#33945E] to-[#03A64A] rounded-lg font-semibold w-fit transition-all duration-500 hover:brightness-110">Filtrar</button>
        </div>
    )
}