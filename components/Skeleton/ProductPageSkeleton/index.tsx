export function ProdutoPageSkeleton() {
    return (
        <section className="min-h-screen bg-black text-white py-12 animate-pulse">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7">
                        <div className="aspect-square bg-white/5 rounded-[3rem] border border-white/5" />
                    </div>

                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <div className="h-6 w-24 bg-white/10 rounded-md" />
                            <div className="h-12 w-3/4 bg-white/10 rounded-xl" />
                            <div className="h-20 w-full bg-white/5 rounded-xl" />
                        </div>

                        <div className="p-8 bg-[#0d0d0d] border border-white/5 rounded-[2rem] space-y-6">
                            <div className="h-10 w-1/2 bg-[#03A64A]/20 rounded-lg" />
                            <div className="h-16 w-full bg-white/5 rounded-2xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}