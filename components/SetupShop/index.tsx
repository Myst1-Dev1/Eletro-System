'use client';

export function SetupShop() {
  return (
    <section className="bg-white/10 py-20 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-112.5 h-87.5 bg-[#0BD061]/10 blur-[130px] rounded-full pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="flex flex-col items-start">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Monte o setup dos seus sonhos. <br />
            <span className="text-zinc-300">Nós construímos.</span>
          </h2>

          <p className="mt-6 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
            Utilize nosso laboratório de montagem online. Escolha peça por peça e deixe nossos técnicos especializados montarem sua máquina com cable management perfeito e testes rigorosos de estresse.
          </p>

          <button className="cursor-pointer mt-8 group inline-flex items-center gap-3 px-6 py-3.5 rounded-lg border border-[#0BD061]/60 bg-zinc-950/80 hover:bg-[#0BD061]/10 text-[#0BD061] font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(11,208,97,0.1)] hover:shadow-[0_0_25px_rgba(11,208,97,0.25)] active:scale-95">
            <span>Iniciar Simulador de Montagem</span>
            <svg 
              className="w-4 h-4 transition-transform group-hover:rotate-45" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
        
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="bg-zinc-950/80 px-4 py-3 border-b border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono text-zinc-500 tracking-wider">
              ELETROSYSTEM_TERMINAL_V2.0
            </span>
            <div className="w-12" />
          </div>

          <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm space-y-4 min-h-80 bg-zinc-950/60">
            <div className="flex items-center gap-2 text-[#0BD061]">
              <span>&gt;</span>
              <span>INITIALIZING BUILD SIMULATOR...</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span>&gt;</span>
              <span>LOADING COMPONENT DATABASE [<span className="text-[#0BD061]">OK</span>]</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span>&gt;</span>
              <span>CHECKING COMPATIBILITY MATRICES...</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span>&gt;</span>
              <span>READY FOR INPUT.</span>
            </div>
            
            <div className="pt-4 flex items-center gap-2 text-white">
              <span className="text-[#0BD061]">&gt;</span>
              <span>SELECT CPU:</span>
              <span className="w-2.5 h-4 bg-[#0BD061] inline-block animate-pulse" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}