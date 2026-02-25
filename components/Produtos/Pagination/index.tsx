'use client';

import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages <= 1) return null;

    const renderButtons = () => {
        const buttons = [];
        const maxVisible = 2;

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - maxVisible && i <= currentPage + maxVisible)
            ) {
                buttons.push(
                    <button
                        key={i}
                        onClick={() => onPageChange(i)}
                        className={`w-10 h-10 rounded-lg border transition-all duration-500 cursor-pointer flex items-center justify-center font-medium
                            ${currentPage === i
                                ? "bg-green-500 border-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                                : "border-white/10 text-gray-400 hover:bg-green-400 hover:text-white"
                            }`}
                    >
                        {i}
                    </button>
                );
            } else if (
                (i === currentPage - maxVisible - 1) ||
                (i === currentPage + maxVisible + 1)
            ) {
                buttons.push(<span key={i} className="text-gray-600">...</span>);
            }
        }
        return buttons;
    };

    return (
        <div className="mt-12 flex items-center justify-center gap-2">
            {/* Botão Voltar */}
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-green-400 disabled:opacity-20 disabled:cursor-not-allowed"
            >
                <CaretLeftIcon size={20} />
            </button>

            {renderButtons()}

            {/* Botão Avançar */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-500 hover:bg-green-400 disabled:opacity-20 disabled:cursor-not-allowed"
            >
                <CaretRightIcon size={20} />
            </button>
        </div>
    );
}