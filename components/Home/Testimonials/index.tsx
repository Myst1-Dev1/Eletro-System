"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

// interface TestimonialsProps {
//     reviews: {
//         author_name: string;
//         author_url: string;
//         language: string;
//         original_language: string;
//         profile_photo_url: string;
//         rating: number;
//         relative_time_description: string;
//         text: string;
//         time: number;
//         translated: boolean;
//     }[];
// }

// type TestimonialsType = {
//     author_name: string;
//     author_url: string;
//     language: string;
//     original_language: string;
//     profile_photo_url: string;
//     rating: number;
//     relative_time_description: string;
//     text: string;
//     time: number;
//     translated: boolean;
// }

const reviews = [
    {
        author_name: 'Claudia Mendes',
        profile_photo_url: 'https://lh3.googleusercontent.com/a/ACg8ocJNH3R_Q7LsXHE3juyYDFd-L5Y57Bf0kjl2ZUWCPyHJhFKxwg=s64-c-rp-mo-br100',
        rating: 5,
        text: 'Fui atendida pelo Gabriel Miranda! Quanta eficiência e dedicação no que faz. Super indico essa empresa e esse profissional. Parabéns! Vcs são 10',
        relative_time_description: '2 semanas atrás'
    },
    {
        author_name: 'Thayane Oliveira',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjW1fvtWDVo-McP6KNHUhuqFLet4Dr3xcC8K2opYkoR9jGXgGrmX=w72-h72-p-rp-mo-br100',
        rating: 5,
        text: 'Serviço de alta qualidade, confiança total e ótimo custo-benefício. Minha experiência foi excelente do início ao fim.',
        relative_time_description: '2 semanas atrás'
    },
    {
        author_name: 'Gabriel Guimaraes',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjVVFlVdRRuKKnEiJpOFFsrtRMfQnk58toDN8lR8CDGgfd2Nb_cGiw=w72-h72-p-rp-mo-br100',
        rating: 5,
        text: 'O dono é muito atencioso, bom e honesto, resolveu meu problema que ninguém conseguiu!!! Super indico…',
        relative_time_description: '2 semanas atrás'
    },
    {
        author_name: 'Douglas Mendes',
        profile_photo_url: 'https://lh3.googleusercontent.com/a/ACg8ocJtRRzuIZvHBAb4cpUSDaU_SDj-NWA1lSs4hwyaplHzJkIYuA=w72-h72-p-rp-mo-br100',
        rating: 5,
        text: 'Muito bom atendimento rápido e eficaz estou satisfeito Gabriel excelente de mas',
        relative_time_description: '1 mês atrás'
    },
    {
        author_name: 'Daiana Mendes',
        profile_photo_url: 'https://lh3.googleusercontent.com/a-/ALV-UjXQILKGvuzmjE-2FgUSdokKyGLppvD35-LxKlalUZj8UqyVaipF=w72-h72-p-rp-mo-br100',
        rating: 5,
        text: 'Excelente, eficaz',
        relative_time_description: 'uma semanas atrás'
    },
]

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const avataresRef = useRef<HTMLDivElement[]>([]);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    useGSAP(() => {
        if (!pathRef.current) return;

        reviews.forEach((_, index) => {
            const avatar = avataresRef.current[index];
            if (!avatar) return;

            let targetProgress = 0.5;
            let scale = 1.2;
            let opacity = 1;
            let grayscale = "0%";

            const diff = (index - activeIndex + reviews.length) % reviews.length;

            if (diff === 0) {
                targetProgress = 0.5;
                scale = 1.2;
                opacity = 1;
                grayscale = "0%";
            } else if (diff === 1 || (diff === -2)) {
                targetProgress = 0.82;
                scale = 0.8;
                opacity = 0.5;
                grayscale = "100%";
            } else {
                targetProgress = 0.18;
                scale = 0.8;
                opacity = 0.5;
                grayscale = "100%";
            }

            gsap.to(avatar, {
                motionPath: {
                    path: pathRef.current!,
                    align: pathRef.current!,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: false,
                    start: (gsap.getProperty(avatar, "motionPathProgress") as number) || 0,
                    end: targetProgress,
                },
                scale: scale,
                opacity: opacity,
                filter: `grayscale(${grayscale})`,
                duration: 0.8,
                ease: "power2.inOut",
                onUpdate: function () {
                    gsap.set(avatar, { motionPathProgress: targetProgress });
                }
            });
        });

        // Animação do texto
        gsap.fromTo(".testimonial-content",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
        );

    }, { dependencies: [activeIndex], scope: containerRef });

    return (
        <section className="relative py-24 bg-black overflow-hidden">
            <div className="container">

                <div className="flex flex-col items-center text-center mb-24 relative">
                    {/* Badge de Autoridade */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#03A64A]/20 bg-[#03A64A]/5 text-[#03A64A] text-[10px] uppercase tracking-[0.3em] font-black mb-6 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#03A64A] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#03A64A]"></span>
                        </span>
                        Feedback dos Clientes
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-6">
                        Quem confia, <br className="md:hidden" />
                        <span className="text-[#03A64A] italic">recomenda.</span>
                    </h2>

                    <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        Abaixo, a experiência real de quem elevou o nível do seu setup com a
                        <span className="text-white font-bold"> Eletro System</span>.
                        Transparência total em cada reparo.
                    </p>

                    {/* Linha decorativa minimalista */}
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#03A64A] to-transparent mt-8 opacity-30" />
                </div>

                <div className="grid grid-cols-2 lg:gap-20 items-center">

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

                        {reviews.map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => { if (el) avataresRef.current[index] = el }}
                                className="absolute flex items-center gap-4 cursor-pointer z-20"
                                onClick={() => setActiveIndex(index)}
                                style={{ transform: 'translate(-50%, -50%)' }}
                            >
                                <div className={`relative rounded-full p-1 ${index === activeIndex ? 'bg-[#03A64A] shadow-lg shadow-green-500/40' : ''}`}>
                                    <Image
                                        src={item.profile_photo_url}
                                        width={80}
                                        height={80}
                                        alt={item.author_name}
                                        className="rounded-full w-4 h-4 lg:w-16 lg:h-16 object-cover"
                                    />
                                </div>
                                <div className={`transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                                    <p className="text-white text-xs lg:text-lg font-semibold whitespace-nowrap">{item.author_name}</p>
                                    <p className="text-[8px] lg:text-sm text-green-400 whitespace-nowrap flex gap-2">⭐ {item.rating}.0 <span className="text-gray-300">{item.relative_time_description}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative text-white max-w-xl mx-auto lg:mx-0 testimonial-content">
                        <span className="text-6xl text-[#03A64A] font-serif leading-none italic">
                            “
                        </span>

                        <p className="mb-10 text-xs md:text-xl leading-relaxed mt-4 text-gray-200 min-h-[150px]">
                            {reviews[activeIndex].text}
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
