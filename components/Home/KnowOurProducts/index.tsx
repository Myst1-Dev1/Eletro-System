'use client';

import { useUIStore } from "@/stores/useUIStore";
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

export function KnowOurProducts() {
    const { openLoginModal } = useUIStore();
    const isLogged = false;

    return (
        <section className="container py-20">
            {isLogged === false ? '' :
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Conheça nossos{" "}
                        <span className="bg-gradient-to-r from-[#33945E] to-[#03A64A] bg-clip-text text-transparent">
                            Produtos
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        Equipamentos de alta performance para quem exige qualidade e tecnologia de ponta.
                    </p>
                </div>
            }

            <div className="relative">
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-8 transition-all duration-300 ${!isLogged ? "blur-sm pointer-events-none select-none" : ""
                        }`}
                >
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
                                disabled
                                className="relative z-10 mt-5 w-full py-3 bg-gradient-to-r from-[#33945E] to-[#03A64A] rounded-lg font-semibold opacity-80"
                            >
                                Adicionar ao carrinho
                            </button>
                        </div>
                    ))}
                </div>

                {!isLogged && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-2xl transition-all duration-300">

                        <div className="bg-[#111]/80 border border-white/10 shadow-2xl rounded-2xl p-10 max-w-md text-center animate-fadeIn">

                            <div className="text-4xl mb-4">🔒</div>

                            <h3 className="text-2xl font-bold mb-3">
                                Área exclusiva para clientes
                            </h3>

                            <p className="text-gray-400 mb-6">
                                Faça login para visualizar preços, adicionar produtos ao carrinho e realizar pedidos.
                            </p>

                            <button
                                onClick={openLoginModal}
                                className="cursor-pointer inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-[#33945E] to-[#03A64A] font-semibold hover:brightness-110 transition"
                            >
                                Fazer Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}