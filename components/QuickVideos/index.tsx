'use client';

import { useRef, useState } from "react";
import { PlayIcon, XIcon, FilmStripIcon, CpuIcon, CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/navigation";

const quickVideos = [
    {
        id: 1,
        title: "Montagem PC Gamer RTX 5090",
        views: "12.5K",
        thumbnail: "/images/montagem.webp",
        videoUrl: "/videos/montagem-video.mp4"
    },
    {
        id: 2,
        title: "Reparo de Placa-Mãe ao Vivo",
        views: "8.9K",
        thumbnail: "/images/wifi-internet.webp",
        videoUrl: "/videos/reparo-video.mp4"
    },
    {
        id: 3,
        title: "Limpeza Química Extrema",
        views: "24.1K",
        thumbnail: "/images/limpeza.webp",
        videoUrl: "/videos/limpeza-video.mp4"
    }
];

export function QuickVideos() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    useGSAP(() => {
        gsap.from(".video-card", {
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.8,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative py-12 bg-black overflow-hidden">
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#03A64A]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-center text-center mb-18 gap-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#03A64A]/20 bg-[#03A64A]/5 text-[#03A64A] text-[10px] uppercase tracking-[0.3em] font-black">
                            <FilmStripIcon size={14} weight="bold" />
                            Eletro Labs
                        </div>
                       <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
                            Como fazemos <br />
                            <span className="text-[#03A64A] italic">acontecer.</span>
                        </h2>
                        <p className="text-gray-500 max-w-xl font-medium">
                            Bastidores do nosso laboratório, setups monstruosos e dicas brutas de hardware direto ao ponto.
                        </p>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto py-12">
                    <div className="flex flex-col items-start space-y-6">
                        
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-gray-400 text-[10px] uppercase tracking-wider font-bold">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            {featuredVideo.views} Visualizações
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">
                            Processo de <br />
                            <span className="text-[#03A64A] italic font-serif font-light">{featuredVideo.title}</span>
                        </h2>

                        <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed font-medium">
                            Acompanhe em alta definição a precisão milimétrica aplicada em nossa bancada. Sem cortes, direto ao ponto da engenharia de hardware.
                        </p>

                        <div className="flex items-center gap-3 text-xs font-black text-[#03A64A] uppercase tracking-widest pt-2 group cursor-pointer"
                            onClick={() => setActiveVideo(featuredVideo.videoUrl)}>
                            <CpuIcon size={18} weight="fill" className="animate-pulse text-[#03A64A]" />
                            <span className="border-b border-transparent group-hover:border-[#03A64A] transition-all duration-300">
                                Ver ferramentas utilizadas
                            </span>
                        </div>

                    </div>
                    
                    <div 
                        onClick={() => setActiveVideo(featuredVideo.videoUrl)}
                        className="group relative w-full max-w-120 h-120 aspect-9/16 rounded-[2.5rem] border border-white/10 bg-zinc-950 overflow-hidden shadow-[0_0_50px_rgba(3,166,74,0.1)] justify-self-center lg:justify-self-start cursor-pointer hover:border-[#03A64A]/40 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105" 
                            style={{ backgroundImage: `url(${featuredVideo.thumbnail})` }} 
                        />

                        <div className="absolute inset-0 w-full h-full [&>video]:object-cover opacity-80 pointer-events-none">
                            <ReactPlayer
                                src={featuredVideo.videoUrl}
                                playing={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                width="100%"
                                height="100%"
                                controls={false}
                            />
                        </div>

                        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/40 z-10" />

                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-16 h-16 rounded-full bg-[#03A64A] text-black flex items-center justify-center shadow-[0_0_30px_rgba(3,166,74,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]">
                                <PlayIcon size={26} weight="fill" className="ml-1" />
                            </div>
                        </div>

                        <div className="absolute bottom-6 inset-x-0 text-center z-20">
                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors">
                                Expandir Laboratório ⚡
                            </span>
                        </div>
                    </div>
                </div> */}

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    centeredSlides={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: true,
                    }}
                    loop={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    className="relative w-full"
                >
                    {quickVideos.map((video) => (
                        <SwiperSlide key={video.id}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                                
                                <div className="flex flex-col items-start space-y-6 order-2 lg:order-1">
                                    
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-gray-400 text-[10px] uppercase tracking-wider font-bold">
                                        <span className="flex h-2 w-2 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                        </span>
                                        {video.views} Visualizações
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-none">
                                        Processo de <br />
                                        <span className="text-[#03A64A] font-normal">{video.title}</span>
                                    </h2>

                                    <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed font-medium">
                                        Acompanhe em alta definição a precisão milimétrica aplicada em nossa bancada. Sem cortes, direto ao ponto da engenharia de hardware.
                                    </p>

                                    <div 
                                        className="flex items-center gap-3 text-xs font-black text-[#03A64A] uppercase tracking-widest pt-2 group cursor-pointer"
                                        onClick={() => setActiveVideo(video.videoUrl)}
                                    >
                                        <CpuIcon size={18} weight="fill" className="animate-pulse text-[#03A64A]" />
                                        <span className="border-b border-transparent group-hover:border-[#03A64A] transition-all duration-300">
                                            Ver ferramentas utilizadas
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-4 pt-6">
                                        <button className={`swiper-button-prev-custom w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#03A64A] hover:border-[#03A64A]/40 transition-all bg-white/5 ${video.id === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} disabled={video.id === 1}>
                                            <CaretLeftIcon size={18} weight="bold" />
                                        </button>
                                        <button className={`swiper-button-next-custom w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#03A64A] hover:border-[#03A64A]/40 transition-all bg-white/5 ${video.id === 3 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} disabled={video.id === 3}>
                                            <CaretRightIcon size={18} weight="bold" />
                                        </button>
                                    </div>
                                </div>
                                
                                <div 
                                    onClick={() => setActiveVideo(video.videoUrl)}
                                    className="group relative w-full h-100 aspect-9/16 rounded-[2.5rem] border border-white/10 bg-zinc-950 overflow-hidden shadow-[0_0_50px_rgba(3,166,74,0.1)] justify-self-center lg:justify-self-start cursor-pointer hover:border-[#03A64A]/40 transition-all duration-500 order-1 lg:order-2"
                                >
                                    {/* <div 
                                        className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105" 
                                        style={{ backgroundImage: `url(${video.thumbnail})` }} 
                                    /> */}

                                    <div className="absolute inset-0 w-full h-full opacity-80 pointer-events-none">
                                        <video
                                            src={video.videoUrl}
                                            poster={video.thumbnail}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/40 z-10" />

                                    <div className="absolute inset-0 flex items-center justify-center z-20">
                                        <div className="w-16 h-16 rounded-full bg-[#03A64A] text-black flex items-center justify-center shadow-[0_0_30px_rgba(3,166,74,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]">
                                            <PlayIcon size={26} weight="fill" className="ml-1" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 inset-x-0 text-center z-20">
                                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors">
                                            Expandir Laboratório ⚡
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* <div className="container mx-auto px-6">
                
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#03A64A]/20 bg-[#03A64A]/5 text-[#03A64A] text-[10px] uppercase tracking-[0.3em] font-black">
                            <FilmStripIcon size={14} weight="bold" />
                            Eletro Labs
                        </div>
                       <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
                            Como fazemos <br />
                            <span className="text-[#03A64A] italic">acontecer.</span>
                        </h2>
                        <p className="text-gray-500 max-w-xl font-medium">
                            Bastidores do nosso laboratório, setups monstruosos e dicas brutas de hardware direto ao ponto.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {quickVideos.map((video) => (
                        <div 
                            key={video.id}
                            onClick={() => setActiveVideo(video.videoUrl)}
                            className="video-card group relative aspect-9/16 rounded-4xl bg-[#0d0d0d] border border-white/5 overflow-hidden cursor-pointer shadow-lg shadow-black/80 transition-all duration-500 hover:border-[#03A64A]/40"
                        >
                            <div className="absolute inset-0 bg-zinc-900 animate-pulse group-hover:scale-105 transition-transform duration-700">
                                <div className="w-full h-full bg-linearr-to-b from-transparent via-black/40 to-black" />
                            </div>

                            <div className="absolute top-6 left-6 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-gray-300">
                                🔥 {video.views} views
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <div className="w-16 h-16 rounded-full bg-[#03A64A] text-black flex items-center justify-center shadow-[0_0_30px_rgba(3,166,74,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]">
                                    <PlayIcon size={28} weight="fill" className="ml-1 text-black" />
                                </div>
                            </div>

                            <div className="absolute bottom-0 inset-x-0 p-8 z-10 bg-linear-to-t from-black via-black/80 to-transparent pt-20">
                                <h3 className="text-xl font-black text-white tracking-tight leading-tight group-hover:text-[#03A64A] transition-colors">
                                    {video.title}
                                </h3>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-2 group-hover:text-gray-400 transition-colors">
                                    Clique para assistir
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {activeVideo && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in"
                    onClick={() => setActiveVideo(null)} 
                >
                    <div 
                        className="relative w-full max-w-140 h-90 aspect-9/16 rounded-4xl overflow-hidden border border-white/10 bg-zinc-950 shadow-[0_0_50px_rgba(3,166,74,0.25)] flex items-center justify-center animate-scale-up"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <button 
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 border border-white/10 text-gray-300 hover:text-[#03A64A] hover:bg-black/80 hover:border-[#03A64A]/40 transition-all duration-300 z-30 cursor-pointer backdrop-blur-md"
                        >
                            <XIcon size={16} weight="bold" />
                        </button>

                        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60 pointer-events-none z-10" />

                        <video 
                            src={activeVideo} 
                            autoPlay 
                            loop
                            playsInline
                            onClick={(e) => {
                                const video = e.currentTarget;
                                if (video.paused) {
                                    video.play();
                                } else {
                                    video.pause();
                                }
                            }}
                            className="absolute inset-0 block w-200 h-full object-cover cursor-pointer"
                        />

                        <div className="absolute bottom-4 z-20 pointer-events-none opacity-90 text-[8px] uppercase tracking-[0.2em] py-1 px-3 rounded-4xl bg-black/50 text-white/70">
                            ⚡ Eletro Labs • Toque para pausar
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}