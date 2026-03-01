'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const obj = { val: 0 };
        gsap.to(obj, {
            val: value,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: spanRef.current,
                start: "top 90%", // Inicia a animação quando o número aparece na tela
            },
            onUpdate: () => {
                if (spanRef.current) {
                    spanRef.current.innerText = Math.floor(obj.val).toString();
                }
            },
        });
    }, [value]);

    return <span ref={spanRef}>0</span>;
}