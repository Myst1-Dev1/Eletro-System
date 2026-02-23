import Image from "next/image";
import Link from "next/link";

export function Banner() {
    return (
        <section className="relative mt-1 w-full min-h-[75dvh] flex items-center rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[url(/images/home-banner.webp)] bg-cover bg-center" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-green-900/60" />

            <div className="relative container flex flex-col-reverse lg:flex-row items-center justify-between gap-10 py-16">

                <div className="max-w-xl text-center lg:text-left space-y-6">

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                        Os Melhores Equipamentos
                        <br />
                        <span className="bg-gradient-to-r from-[#33945E] to-[#03A64A] bg-clip-text text-transparent">
                            Você Encontra Aqui!
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-200">
                        Produtos de última geração e assistência especializada
                        para notebooks e computadores.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                        <Link
                            href="/produtos"
                            className="
                                px-6 py-3
                                bg-gradient-to-r from-[#33945E] to-[#03A64A]
                                text-white font-semibold
                                rounded-xl
                                shadow-lg shadow-green-500/30
                                transition-all duration-300
                                hover:scale-105 hover:brightness-110
                            "
                        >
                            Confira Agora
                        </Link>

                        <Link
                            href="/servicos"
                            className="
                                px-6 py-3
                                border border-white/30
                                text-white font-semibold
                                rounded-xl
                                transition-all duration-500
                                hover:bg-white hover:text-black
                            "
                        >
                            Nossos Serviços
                        </Link>

                    </div>
                </div>

                <div className="relative">
                    <Image
                        src="/images/home-banner-img.webp"
                        width={420}
                        height={420}
                        alt="Periféricos gamer"
                        className="drop-shadow-[0_0_40px_rgba(3,166,74,0.4)] w-[250px] sm:w-[350px] lg:w-[420px] h-auto"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}