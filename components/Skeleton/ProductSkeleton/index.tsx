
interface ProductSkeletonProps {
    length: number;
}

export function ProductSkeleton({ length }: ProductSkeletonProps) {
    return (
        <>
            {Array.from({ length }, (_, index) => (
                <div
                    key={index}
                    className="h-72 w-full flex flex-col justify-center items-center relative bg-[#111] border border-white/10 rounded-xl p-5 animate-pulse"
                >
                    <div className="absolute top-2 right-2 w-12 h-6 bg-white/5 rounded-md" />

                    <div className="w-32 h-32 bg-white/5 rounded-lg mb-4" />

                    <div className="w-3/4 h-5 bg-white/10 rounded mb-2" />

                    <div className="w-1/3 h-3 bg-white/5 rounded mb-2" />

                    <div className="w-1/2 h-7 bg-[#03A64A]/20 rounded mb-3" />

                    <div className="w-full h-12 bg-white/5 rounded-lg mt-auto" />
                </div>
            ))}
        </>
    );
}