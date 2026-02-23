'use client';

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

export function Pagination() {
    return (
        <>
            <div className="mt-7">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center gap-2">
                        <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-green-400">
                            <CaretLeftIcon size={20} strokeWidth={2} />
                        </button>
                        <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-green-400">1</button>
                        <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-green-400">2</button>
                        <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-green-400">3</button>
                        <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-green-400">
                            <CaretRightIcon size={20} strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}