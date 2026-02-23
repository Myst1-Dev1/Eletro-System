'use client';

import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Fone Gamer RGB",
        price: "789,99",
        image: "/images/produto.webp",
    },
    {
        id: 2,
        name: "Teclado Mecânico",
        price: "499,99",
        image: "/images/produto.webp",
    },
    {
        id: 3,
        name: "Mouse Gamer Pro",
        price: "299,99",
        image: "/images/produto.webp",
    },
    {
        id: 4,
        name: "Monitor 144Hz",
        price: "1.299,99",
        image: "/images/produto.webp",
    },
    {
        id: 5,
        name: "Placa de Vídeo RTX",
        price: "3.999,99",
        image: "/images/produto.webp",
    },
];

export function Products() {
    const isLogged = false;

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="group relative bg-[#111] border border-white/10 rounded-xl p-5 hover:border-[#03A64A] transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#0BD061] blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
                        </div>

                        <Image
                            className="relative z-10 mx-auto mb-4 transition-all duration-500 group-hover:scale-110"
                            src={product.image}
                            alt={product.name}
                            width={180}
                            height={180}
                        />

                        <h3 className="relative z-10 text-center font-semibold text-lg mb-2">
                            {product.name}
                        </h3>

                        <h4 className="relative z-10 text-center font-bold text-2xl text-[#03A64A]">
                            R$ {product.price}
                        </h4>

                        <button
                            onClick={() => {
                                if (isLogged === false) return alert('Você precisa estár logado para executar está ação')
                            }}
                            className="cursor-pointer relative z-10 mt-5 w-full py-3 bg-gradient-to-r from-[#33945E] to-[#03A64A] rounded-lg font-semibold transition-all duration-300 hover:brightness-110">
                            Adicionar ao carrinho
                        </button>
                    </div>
                ))}
            </div>
        </>
    )
}