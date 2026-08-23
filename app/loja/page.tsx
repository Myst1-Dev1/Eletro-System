import { KnowOurProducts } from "@/components/Home/KnowOurProducts";
import { SetupShop } from "@/components/SetupShop";
import { ShopProducts } from "@/components/ShopProducts";

export default function Loja() {
    return (
        <>
            <main>
                <KnowOurProducts />
                <div className="max-w-6xl mx-auto py-24 px-4 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-[#0BD061]/15 blur-[120px] rounded-full pointer-events-none -z-10" />

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-900/80 border border-zinc-800 text-xs font-mono tracking-wider text-[#0BD061] mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#0BD061] animate-pulse" />
                        <span>ESTOQUE ATUALIZADO // SIST. ONLINE</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none">
                        Performance Extrema. <br />
                        <span className="text-[#0BD061]">Sem Concessões.</span>
                    </h1>

                    <p className="mt-6 text-gray-400 max-w-2xl text-sm sm:text-base leading-relaxed font-normal">
                        Hardware de nível laboratorial e componentes de alto desempenho para setups profissionais e entusiastas. Acesso direto aos servidores de estoque.
                    </p>

                    <ShopProducts />
                </div>
                    <SetupShop />
            </main>
        </>
    )
}