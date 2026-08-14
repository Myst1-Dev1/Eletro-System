'use client';

import { useEffect, useRef, useState } from "react";

export function useLaptopRepair() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    const [playing, setPlaying] = useState<number | null>(null);
    const [open, setOpen] = useState<number | null>(null);
    const [activeVideo, setActiveVideo] = useState(0);

    const WHATSAPP_NUMBER = '5521989810973';
    const WHATSAPP_MSG = encodeURIComponent(
    'Olá! Vim pelo site e gostaria de solicitar um orçamento.'
    );
    const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

    const videos = [
        { src: '/videos/reparo-video.mp4', label: 'Reparo de Placas' },
        { src: '/videos/limpeza-video.mp4', label: 'Limpeza Profissional' },
        { src: '/videos/montagem-video.mp4', label: 'Montagem de PC' },
    ];

    function useCounter(target: number, active: boolean, duration = 1800) {
        const [value, setValue] = useState(0);
        useEffect(() => {
            if (!active) return;
            let start = 0;
            const step = target / (duration / 16);
            const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setValue(target);
                clearInterval(timer);
            } else {
                setValue(Math.floor(start));
            }
            }, 16);
            return () => clearInterval(timer);
        }, [active, target, duration]);
        return value;
    }

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            }
        },
        { threshold: 0.12 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return {
        WHATSAPP_URL,
        useCounter,
        ref,
        visible,
        playing,
        setPlaying,
        open, 
        setOpen,
        videos,
        activeVideo,
        setActiveVideo
    }
}