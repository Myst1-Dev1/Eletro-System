import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

if (typeof window !== "undefined") {
    gsap.registerPlugin(MotionPathPlugin, useGSAP);
}

const testimonials = [
    {
        id: 1,
        name: "Diana Costa",
        rating: "4.9",
        date: "29/08/2025",
        image: "/images/user1.jpg",
        content: "Estou comprando na Eletro System há anos e sempre fico impressionada com a qualidade do atendimento e dos produtos. Entrega rápida, suporte especializado e confiança total."
    },
    {
        id: 2,
        name: "Lauren Mendes",
        rating: "5.0",
        date: "29/08/2025",
        image: "/images/user2.jpg",
        content: "Excelente experiência! O suporte me ajudou a escolher os melhores equipamentos para minha rede. A entrega foi antes do prazo e o material é de altíssima qualidade."
    },
    {
        id: 3,
        name: "Eduardo Lima",
        rating: "4.8",
        date: "29/08/2025",
        image: "/images/user3.jpg",
        content: "Recomendo a todos. A Eletro System se tornou nossa principal fornecedora de tecnologia. O atendimento personalizado faz toda a diferença no dia a dia."
    }
];

export function testimonialsLogic() {
    const [activeIndex, setActiveIndex] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const avataresRef = useRef<HTMLDivElement[]>([]);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useGSAP(() => {
        if (!pathRef.current) return;

        testimonials.forEach((_, index) => {
            const avatar = avataresRef.current[index];
            if (!avatar) return;

            let targetProgress = 0.5;
            let scale = 1.2;
            let opacity = 1;
            let grayscale = "0%";

            const diff = (index - activeIndex + testimonials.length) % testimonials.length;

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

    return {
        activeIndex,
        setActiveIndex,
        nextTestimonial,
        prevTestimonial,
        testimonials,
        containerRef,
        pathRef,
        avataresRef
    };
}