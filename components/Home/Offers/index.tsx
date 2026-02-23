'use client';

import Image from "next/image";

export function Offers() {
    const products = [
        {
            id: 1,
            name: "AirPods Pro",
            image: "/images/produto.webp",
            price: 799,
            discount: 20,
        },
        {
            id: 2,
            name: "AirPods Pro",
            image: "/images/produto.webp",
            price: 799,
            discount: 20,
        },
        {
            id: 3,
            name: "AirPods Pro",
            image: "/images/produto.webp",
            price: 799,
            discount: 20,
        },
    ];

    const isLogged = false;

    return (
        <section className="relative py-20">
            <div className="container">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Ofertas especiais{" "}
                        <span className="bg-gradient-to-r from-[#33945E] to-[#03A64A] bg-clip-text text-transparent">
                            de última hora!
                        </span>
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-[#111] border border-white/10 rounded-xl p-5 hover:border-[#03A64A] transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#0BD061] blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
                            </div>

                            <span className="absolute top-5 left-5 bg-[#03A64A] text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                                OFERTA IMPERDÍVEL
                            </span>

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

                            <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-md mb-3">
                                -{product.discount}%
                            </span>

                            <p className="text-gray-400 text-sm">POR:</p>
                            <p className="text-2xl font-bold text-[#03A64A] mb-6">
                                R$ {product.price.toFixed(2).replace(".", ",")}
                            </p>

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
            </div>
        </section>
    );
}