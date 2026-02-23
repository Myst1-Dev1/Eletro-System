import Image from "next/image";

export function Testimonials() {
    return (
        <section className="relative py-24 bg-black overflow-hidden">
            <div className="container">

                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Veja as Avaliações da{" "}
                        <span className="bg-gradient-to-r from-[#33945E] to-[#03A64A] bg-clip-text text-transparent">
                            Eletro System
                        </span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                        A experiência de quem já comprou conosco.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-20 items-center">

                    <div className="relative flex flex-col justify-center gap-16">

                        <svg
                            className="absolute left-6 top-0 h-full"
                            width="120"
                            viewBox="0 0 120 500"
                            fill="none"
                        >
                            <path
                                d="M100 0 C 20 120, 20 380, 100 500"
                                stroke="url(#grad)"
                                strokeWidth="2"
                                fill="transparent"
                            />
                            <defs>
                                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#03A64A" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#03A64A" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <div className="flex items-center gap-4 relative z-10">
                            <Image
                                src="/images/user1.jpg"
                                width={60}
                                height={60}
                                alt="Cliente"
                                className="rounded-full w-10 h-10 lg:w-16 lg:h-16 grayscale hover:grayscale-0 transition duration-500"
                            />
                            <div>
                                <p className="text-white text-sm lg:text-lg font-semibold">Diana Costa</p>
                                <p className="text-sm text-gray-400">⭐ 4.9 • 29/08/2025</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 relative z-10 ml-8">
                            <Image
                                src="/images/user2.jpg"
                                width={80}
                                height={80}
                                alt="Cliente"
                                className="rounded-full w-10 h-10 lg:w-16 lg:h-16 border-2 border-[#03A64A] shadow-lg shadow-green-500/40"
                            />
                            <div>
                                <p className="text-white text-sm lg:text-lg font-semibold">
                                    Lauren Mendes
                                </p>
                                <p className="text-sm text-green-400">⭐ 5.0 • 29/08/2025</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 relative z-10">
                            <Image
                                src="/images/user3.jpg"
                                width={60}
                                height={60}
                                alt="Cliente"
                                className="rounded-full w-10 h-10 lg:w-16 lg:h-16 grayscale hover:grayscale-0 transition duration-500"
                            />
                            <div>
                                <p className="text-white text-sm lg:text-lg font-semibold">Eduardo Lima</p>
                                <p className="text-sm text-gray-400">⭐ 4.8 • 29/08/2025</p>
                            </div>
                        </div>

                    </div>

                    <div className="relative text-white max-w-xl mx-auto lg:mx-0">

                        <span className="text-6xl text-[#03A64A] font-serif leading-none">
                            “
                        </span>

                        <p className="mb-10 text-xs md:text-xl leading-relaxed mt-4 text-gray-200">
                            Estou comprando na Eletro System há anos e sempre fico
                            impressionada com a qualidade do atendimento e dos produtos.
                            Entrega rápida, suporte especializado e confiança total.
                            Recomendo para todos que buscam tecnologia de verdade.
                        </p>

                        <span className="text-6xl text-end block text-[#03A64A] font-serif leading-none">
                            ”
                        </span>

                    </div>

                </div>
            </div>
        </section>
    );
}