"use client";

import Image from "next/image";
import { testimonialsLogic } from "./testimonialsLogic";

export function Testimonials() {
    const { testimonials, activeIndex, setActiveIndex, nextTestimonial, prevTestimonial, containerRef, pathRef, avataresRef } = testimonialsLogic();

    return (
        <section className="relative py-24 bg-black overflow-hidden" ref={containerRef}>
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

                <div className="grid grid-cols-2 gap-4 lg:gap-20 items-center">

                    <div className="relative h-[400px] flex items-center justify-center">
                        <svg
                            className="absolute left-1/2 lg:left-20 top-0 h-full -translate-x-1/2 lg:translate-x-0"
                            width="200"
                            viewBox="0 0 120 500"
                            fill="none"
                        >
                            <path
                                ref={pathRef}
                                d="M100 0 C 20 120, 20 380, 100 500"
                                stroke="url(#grad)"
                                strokeWidth="2"
                                fill="transparent"
                            />
                            <defs>
                                <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#03A64A" stopOpacity="0.2" />
                                    <stop offset="50%" stopColor="#03A64A" stopOpacity="0.6" />
                                    <stop offset="100%" stopColor="#03A64A" stopOpacity="0.2" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {testimonials.map((item, index) => (
                            <div
                                key={item.id}
                                ref={(el) => { if (el) avataresRef.current[index] = el }}
                                className="absolute flex items-center gap-4 cursor-pointer z-20"
                                onClick={() => setActiveIndex(index)}
                                style={{ transform: 'translate(-50%, -50%)' }}
                            >
                                <div className={`relative rounded-full p-1 ${index === activeIndex ? 'bg-[#03A64A] shadow-lg shadow-green-500/40' : ''}`}>
                                    <Image
                                        src={item.image}
                                        width={80}
                                        height={80}
                                        alt={item.name}
                                        className="rounded-full w-6 h-6 lg:w-16 lg:h-16 object-cover"
                                    />
                                </div>
                                <div className={`transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                                    <p className="text-white text-sm lg:text-lg font-semibold whitespace-nowrap">{item.name}</p>
                                    <p className="text-xs text-green-400 whitespace-nowrap">⭐ {item.rating} • {item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative text-white max-w-xl mx-auto lg:mx-0 testimonial-content">
                        <span className="text-6xl text-[#03A64A] font-serif leading-none italic">
                            “
                        </span>

                        <p className="mb-10 text-lg md:text-xl leading-relaxed mt-4 text-gray-200 min-h-[150px]">
                            {testimonials[activeIndex].content}
                        </p>

                        <div className="flex justify-between items-center">
                            <span className="text-6xl text-[#03A64A] font-serif leading-none italic">
                                ”
                            </span>

                            <div className="flex gap-4">
                                <button
                                    onClick={prevTestimonial}
                                    className="cursor-pointer p-3 border border-gray-800 rounded-full hover:bg-green-600 transition-colors group"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 group-hover:text-white">
                                        <path d="M15 18l-6-6 6-6" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="cursor-pointer p-3 border border-gray-800 rounded-full hover:bg-green-600 transition-colors group"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400 group-hover:text-white">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
