import Link from "next/link";

export function TechAssistService() {
    return (
        <>
            <div className="py-10 container">

                <div className="max-w-6xl mx-auto px-6 text-center mb-14">
                    <h2 className="text-4xl font-bold mb-4">
                        Tecnologia que <span className="text-[#03A64A]">Resolve</span>.
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Produtos de alta performance e assistência especializada para notebooks, computadores e setups gamer.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-[#111] rounded-2xl p-8 border border-[#03A64A]/40 hover:border-[#03A64A] transition-all duration-500">
                        <h3 className="text-2xl font-semibold mb-4">
                            🔧 Assistência Técnica Especializada
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Manutenção, upgrades, limpeza interna, formatação e montagem completa de máquinas.
                        </p>
                        <Link
                            href="/servicos"
                            className="px-6 py-3 bg-gradient-to-r from-[#33945E] to-[#03A64A] rounded-lg font-semibold hover:brightness-110 transition-all"
                        >
                            Solicitar Atendimento
                        </Link>
                    </div>

                    <div className="bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-[#03A64A] transition-all duration-500">
                        <h3 className="text-xl font-semibold mb-4">
                            🖥 Produtos e Peças
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Componentes de última geração para upgrades e novos projetos.
                        </p>
                        <Link
                            href="/produtos"
                            className="text-[#03A64A] font-semibold hover:underline"
                        >
                            Ver produtos →
                        </Link>
                    </div>

                    <div className="bg-[#111] rounded-2xl p-8 border border-white/10 hover:border-[#03A64A] transition-all duration-500">
                        <h3 className="text-xl font-semibold mb-4">
                            🎮 PCs Gamer
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Montamos seu setup sob medida com máxima performance.
                        </p>
                        <Link
                            href="/servicos"
                            className="text-[#03A64A] font-semibold hover:underline"
                        >
                            Ver opções →
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}