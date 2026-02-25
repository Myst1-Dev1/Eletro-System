export default function Loading() {
    return (
        <div className="absolute inset-0 min-h-screen w-full bg-black z-50 py-12 space-y-12 animate-in fade-in duration-500">
            {/* Spinner Central Minimalista */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center py-10">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-zinc-800 border-t-[#03A64A] rounded-full animate-spin" />
                    <div className="absolute inset-0 w-16 h-16 border-4 border-[#03A64A]/20 rounded-full" />
                </div>
            </div>
        </div>
    );
}