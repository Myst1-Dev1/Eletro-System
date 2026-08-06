'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  WhatsappLogoIcon,
  PhoneIcon,
  MapPinIcon,
  InstagramLogoIcon,
  ClockIcon,
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  CpuIcon,
  WrenchIcon,
  ArrowRightIcon,
  QuestionIcon,
  PlayIcon,
  ArrowUpRightIcon,
  LightningIcon,
  MedalIcon,
  ToolboxIcon,
  ThumbsUpIcon,
  SealCheckIcon,
  ClockClockwiseIcon,
  MonitorIcon,
  LaptopIcon,
  GameControllerIcon,
  VideoIcon,
} from '@phosphor-icons/react';

// ─── Constants ───────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '5521989810973';
const WHATSAPP_MSG = encodeURIComponent(
  'Olá! Vim pelo site e gostaria de solicitar um orçamento para conserto de notebook.'
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

// ─── Hooks ───────────────────────────────────────────────────────────────────
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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

  return { ref, visible };
}

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

// ─── Sub-components ──────────────────────────────────────────────────────────

function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-black/40'
        : 'bg-black/70 backdrop-blur-sm'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          width={160}
          height={48}
          alt="EletroSystem"
          className="w-40 h-18 lg:h-14 object-cover"
          priority
        />

        {/* Phone (hidden on mobile) */}
        {/* <a
          href="tel:+5521989810973"
          className="hidden md:flex items-center gap-2 text-gray-300 hover:text-[#0BD061] transition-colors text-sm font-medium"
        >
          <PhoneIcon size={18} className="text-[#0BD061]" />
          (21) 9 8981-0973
        </a> */}

        {/* CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="header-whatsapp-cta"
          className="flex items-center gap-2 bg-[#0BD061] hover:bg-[#03A64A] text-black font-bold px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 text-sm shadow-lg shadow-[#0BD061]/30"
        >
          <WhatsappLogoIcon size={20} weight="fill" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function HeroSection() {
  const videos = [
    { src: '/videos/reparo-video.mp4', label: 'Reparo de Placas' },
    { src: '/videos/limpeza-video.mp4', label: 'Limpeza Profissional' },
    { src: '/videos/montagem-video.mp4', label: 'Montagem de PC' },
  ];
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveVideo((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050f08] to-black" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0BD061]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#03A64A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* LEFT — Copy */}
        <div className="space-y-8 text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0BD061]/10 border border-[#0BD061]/30 text-[#0BD061] text-sm font-semibold uppercase tracking-wide">
            <SealCheckIcon size={16} weight="fill" />
            Especialistas em Reparo de Notebooks
          </div>

          {/* Headline — pain-oriented */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">
            Notebook não liga?{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#0BD061] via-[#03A64A] to-[#4ade80] bg-clip-text text-transparent">
              A gente resolve.
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0">
            Diagnóstico técnico especializado, reparo de placas com microscópio profissional e garantia em todos os serviços.{' '}
            <strong className="text-gray-200">Atendimento na Barra da Tijuca - RJ.</strong>
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-cta"
              className="group relative flex items-center justify-center gap-3 bg-[#0BD061] hover:bg-[#03A64A] text-black font-bold px-8 py-5 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#0BD061]/40 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <WhatsappLogoIcon size={26} weight="fill" />
              Solicitar Orçamento Grátis
              <ArrowRightIcon size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row gap-3 items-center lg:items-start justify-center lg:justify-start text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircleIcon size={16} className="text-[#0BD061]" weight="fill" />
              Diagnóstico mediante avaliação
            </span>
            <span className="hidden sm:block text-gray-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircleIcon size={16} className="text-[#0BD061]" weight="fill" />
              Atendimento com agendamento
            </span>
            <span className="hidden sm:block text-gray-600">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircleIcon size={16} className="text-[#0BD061]" weight="fill" />
              Resposta rápida pelo WhatsApp
            </span>
          </div>
        </div>

        {/* RIGHT — Video Carousel */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-white/10 shadow-2xl shadow-black/60 bg-black">
            {videos.map((v, i) => (
              <video
                key={v.src}
                src={v.src}
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === activeVideo ? 'opacity-100' : 'opacity-0'
                  }`}
              />
            ))}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            {/* Video label */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/10">
              <VideoIcon size={14} className="text-[#0BD061]" weight="fill" />
              {videos[activeVideo].label}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-4">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveVideo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeVideo ? 'w-8 bg-[#0BD061]' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
              />
            ))}
          </div>

          {/* Glow */}
          <div className="absolute -inset-4 bg-[#0BD061]/10 rounded-3xl blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
}

function SocialProofSection() {
  const { ref, visible } = useScrollReveal();
  const equipamentos = useCounter(500, visible);
  const clientes = useCounter(350, visible);
  const anos = useCounter(8, visible);

  const stats = [
    { value: `+${equipamentos}`, label: 'Equipamentos reparados', icon: <WrenchIcon size={28} weight="fill" /> },
    { value: `+${clientes}`, label: 'Clientes satisfeitos', icon: <ThumbsUpIcon size={28} weight="fill" /> },
    { value: `+${anos}`, label: 'Anos de experiência', icon: <MedalIcon size={28} weight="fill" /> },
    {
      value: (
        <span className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} size={28} weight="fill" className="text-[#0BD061]" />
          ))}
        </span>
      ),
      label: 'Avaliação Google',
      icon: <StarIcon size={28} weight="fill" />,
    },
  ];

  return (
    <section className="bg-[#050f08] border-y border-[#0BD061]/10 py-16">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white/3 border border-white/5 hover:border-[#0BD061]/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-[#0BD061]">{s.icon}</div>
            <div className="text-3xl lg:text-4xl font-extrabold text-white">{s.value}</div>
            <div className="text-sm text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, visible } = useScrollReveal();

  const services = [
    {
      image: '/images/manutencao-notebook.webp',
      icon: <LaptopIcon size={22} weight="fill" />,
      title: 'Reparo de Notebooks',
      description: 'Conserto especializado em qualquer marca e modelo. Não liga, tela quebrada, superaquecimento, teclado.',
      benefits: ['Diagnóstico eletrônico completo', 'Troca de tela e teclado', 'Reparo de placa-mãe', 'Limpeza e pasta térmica', 'Garantia de 90 dias'],
    },
    {
      image: '/images/manutencao-pc.webp',
      icon: <MonitorIcon size={22} weight="fill" />,
      title: 'Manutenção de Computadores',
      description: 'PC lento, travando, com vírus ou sem ligar? Diagnóstico e reparo rápido com garantia.',
      benefits: ['Formatação e reinstalação', 'Upgrade de hardware', 'Limpeza interna preventiva', 'Instalação de SSD', 'Otimização de performance'],
    },
    {
      image: '/images/montagem.webp',
      icon: <GameControllerIcon size={22} weight="fill" />,
      title: 'Montagem de PC Gamer',
      description: 'Montagem personalizada com as melhores peças do mercado. Setup completo e otimizado para alta performance.',
      benefits: ['Consultoria de peças', 'Montagem profissional', 'Gerenciamento de cabos', 'Instalação do sistema', 'Testes de estabilidade'],
    },
    {
      image: '/images/limpeza.webp',
      icon: <WrenchIcon size={22} weight="fill" />,
      title: 'Reparo de Placas (Nível III)',
      description: 'Soldagem SMD com microscópio profissional. Recuperamos placas que outros labs desistem.',
      benefits: ['Soldagem SMD avançada', 'Microscópio profissional', 'Diagnóstico por esquemático', 'Troca de componentes', 'Equipamentos calibrados'],
    },
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-sm font-semibold uppercase tracking-widest">O que fazemos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Serviços <span className="text-[#0BD061]">Especializados</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Cada equipamento é tratado com o cuidado de um especialista. Diagnóstico preciso, reparo eficiente.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative flex flex-col bg-[#0a0a0a] border border-white/8 rounded-2xl overflow-hidden hover:border-[#0BD061]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0BD061]/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={s.image}
                  fill
                  alt={s.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#0BD061]/20 border border-[#0BD061]/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-[#0BD061] text-sm font-semibold">
                  {s.icon}
                  {s.title}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>

                <ul className="space-y-2 flex-1">
                  {s.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <CheckCircleIcon size={16} weight="fill" className="text-[#0BD061] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 hover:bg-[#0BD061] hover:border-[#0BD061] text-white hover:text-black font-semibold rounded-xl transition-all duration-300 text-sm group/btn"
                >
                  <WhatsappLogoIcon size={18} weight="fill" />
                  Solicitar orçamento
                  <ArrowRightIcon size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyTrustSection() {
  const { ref, visible } = useScrollReveal();

  const items = [
    {
      icon: <ShieldCheckIcon size={32} weight="fill" />,
      title: 'Garantia em todos os serviços',
      desc: '90 dias de garantia em peças e mão de obra. Se o problema voltar, resolvemos sem custo adicional.',
    },
    {
      icon: <CpuIcon size={32} weight="fill" />,
      title: 'Equipamentos profissionais',
      desc: 'Microscópio, estação de solda, multímetros e ferramentas calibradas. Precisão cirúrgica no reparo.',
    },
    {
      icon: <LightningIcon size={32} weight="fill" />,
      title: 'Agilidade e transparência',
      desc: 'Orçamento enviado antes de qualquer reparo. Você decide se quer continuar. Sem surpresas na nota.',
    },
    {
      icon: <MedalIcon size={32} weight="fill" />,
      title: '+8 anos de experiência',
      desc: 'Técnicos especializados com vasta experiência em notebooks, computadores e placas-mãe.',
    },
    {
      icon: <ClockClockwiseIcon size={32} weight="fill" />,
      title: 'Diagnóstico rápido',
      desc: 'Maioria dos diagnósticos concluída em até 24h. Você sabe exatamente o que tem e quanto vai custar.',
    },
    {
      icon: <ToolboxIcon size={32} weight="fill" />,
      title: 'Peças de qualidade',
      desc: 'Trabalhamos com componentes originais e compatíveis de alta procedência. Durabilidade garantida.',
    },
  ];

  return (
    <section className="py-24 bg-[#050f08]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-sm font-semibold uppercase tracking-widest">Diferenciais</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Por que <span className="text-[#0BD061]">confiar</span> em nós?
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Mais do que conserto — entregamos tranquilidade e um equipamento funcionando como novo.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {items.map((item, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 80}ms` }}
              className="group p-7 rounded-2xl bg-black border border-white/8 hover:border-[#0BD061]/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0BD061]/10 transition-all duration-300"
            >
              <div className="text-[#0BD061] mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const { ref, visible } = useScrollReveal();

  const steps = [
    { num: '01', title: 'Recebemos o equipamento', desc: 'Traga ou envie seu dispositivo. Atendemos com agendamento.' },
    { num: '02', title: 'Diagnóstico técnico', desc: 'Avaliação completa em até 24h por técnico especializado.' },
    { num: '03', title: 'Orçamento transparente', desc: 'Enviamos o orçamento pelo WhatsApp. Sem surpresas.' },
    { num: '04', title: 'Aprovação', desc: 'Você decide se aprova o serviço. Só então iniciamos o reparo.' },
    { num: '05', title: 'Reparo profissional', desc: 'Nossos técnicos realizam o reparo com equipamentos profissionais.' },
    { num: '06', title: 'Testes rigorosos', desc: 'Testamos o equipamento exaustivamente antes de liberar.' },
    { num: '07', title: 'Entrega com garantia', desc: 'Equipamento entregue funcionando com garantia de 90 dias.' },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-sm font-semibold uppercase tracking-widest">Processo</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Como <span className="text-[#0BD061]">funciona</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Um processo claro, transparente e eficiente do início ao fim.
          </p>
        </div>

        <div
          ref={ref}
          className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#0BD061] via-[#03A64A]/40 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
              >
                {/* Content */}
                <div className={`sm:w-[calc(50%-3rem)] ${i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                  <div
                    className={`p-5 rounded-2xl bg-[#050f08] border border-white/8 hover:border-[#0BD061]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0BD061]/10`}
                  >
                    <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                      <span className="text-[#0BD061] text-xs font-bold tracking-widest">{step.num}</span>
                      <h3 className="text-white font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Circle */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#0BD061] text-black font-extrabold text-sm shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 shadow-lg shadow-[#0BD061]/50">
                  {i + 1}
                </div>

                {/* Empty space for alternate side */}
                <div className="hidden sm:block sm:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#03A64A] via-[#0BD061] to-[#33945E] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/home-banner.webp')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[80px]" />
      <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
          Seu notebook pode ser recuperado.
          <br />
          <span className="opacity-80">Não descarte antes de consultar.</span>
        </h2>
        <p className="text-black/80 text-lg max-w-xl mx-auto">
          Mais de 90% dos equipamentos que chegam até nós são recuperados. Fale com nosso time agora.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="mid-whatsapp-cta"
          className="inline-flex items-center gap-3 bg-black text-white font-bold px-10 py-5 rounded-2xl text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-2xl shadow-black/40"
        >
          <WhatsappLogoIcon size={26} weight="fill" className="text-[#0BD061]" />
          Falar agora pelo WhatsApp
          <ArrowRightIcon size={20} weight="bold" />
        </a>
        <p className="text-black/60 text-sm">Resposta rápida • Orçamento sem compromisso</p>
      </div>
    </section>
  );
}

function LabGallerySection() {
  const { ref, visible } = useScrollReveal();

  const videos = [
    { src: '/videos/reparo-video.mp4', title: 'Soldagem SMD — Reparo de Placa-mãe', thumb: '/images/manutencao-notebook.webp' },
    { src: '/videos/limpeza-video.mp4', title: 'Limpeza Profissional com Equipamentos Especializados', thumb: '/images/limpeza.webp' },
    { src: '/videos/montagem-video.mp4', title: 'Montagem de PC Gamer Personalizado', thumb: '/images/montagem.webp' },
  ];

  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#050f08]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-sm font-semibold uppercase tracking-widest">Laboratório</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Veja nosso <span className="text-[#0BD061]">trabalho</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Transparência em cada etapa. Nossas câmeras registram o processo completo.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {videos.map((v, i) => (
            <div
              key={i}
              className="group relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/8 hover:border-[#0BD061]/40 cursor-pointer hover:shadow-xl hover:shadow-[#0BD061]/10 transition-all duration-300"
              onClick={() => setPlaying(playing === i ? null : i)}
            >
              {playing === i ? (
                <video
                  src={v.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <Image src={v.thumb} fill alt={v.title} className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-[#0BD061]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0BD061]/40">
                      <PlayIcon size={22} weight="fill" className="text-black ml-1" />
                    </div>
                    <span className="text-white text-xs font-medium px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full">Assistir</span>
                  </div>
                </>
              )}
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-xs font-medium bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-xl line-clamp-2">
                  {v.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection() {
  const { ref, visible } = useScrollReveal();

  const cases = [
    {
      icon: <LaptopIcon size={24} weight="fill" />,
      device: 'Notebook Dell Inspiron',
      problem: 'Não ligava — fusível queimado na placa de energia',
      solution: 'Diagnóstico por esquemático + reparo SMD',
      result: 'Funcionando como novo com garantia de 90 dias',
    },
    {
      icon: <LaptopIcon size={24} weight="fill" />,
      device: 'Notebook Lenovo IdeaPad',
      problem: 'Superaquecimento crítico — desligava sozinho',
      solution: 'Limpeza profunda + troca de pasta térmica',
      result: 'Temperatura normalizada, performance restaurada',
    },
    {
      icon: <MonitorIcon size={24} weight="fill" />,
      device: 'PC Gamer Personalizado',
      problem: 'Cliente queria montar setup do zero',
      solution: 'Consultoria de peças + montagem profissional',
      result: 'Setup 144hz entregue testado e funcionando',
    },
    {
      icon: <LaptopIcon size={24} weight="fill" />,
      device: 'MacBook Pro 2019',
      problem: 'Liquid damage — derramamento de líquido',
      solution: 'Ultrassom + reparo de componentes afetados',
      result: 'Placa recuperada, data preservada',
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-sm font-semibold uppercase tracking-widest">Casos Reais</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Antes & <span className="text-[#0BD061]">Depois</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Equipamentos que chegaram danificados e saíram funcionando. Veja alguns dos nossos casos.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid sm:grid-cols-2 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {cases.map((c, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl bg-[#050f08] border border-white/8 hover:border-[#0BD061]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0BD061]/10"
            >
              {/* Device header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-[#0BD061]/10 text-[#0BD061]">{c.icon}</div>
                <h3 className="text-white font-bold">{c.device}</h3>
              </div>

              {/* Flow */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-20 text-xs font-semibold text-red-400 uppercase shrink-0 pt-0.5">Problema</span>
                  <p className="text-gray-300 text-sm">{c.problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-20 text-xs font-semibold text-yellow-400 uppercase shrink-0 pt-0.5">Solução</span>
                  <p className="text-gray-300 text-sm">{c.solution}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-20 text-xs font-semibold text-[#0BD061] uppercase shrink-0 pt-0.5">Resultado</span>
                  <p className="text-gray-300 text-sm">{c.result}</p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#0BD061]">
                <CheckCircleIcon size={14} weight="fill" />
                Equipamento entregue com garantia
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, visible } = useScrollReveal();

  const testimonials = [
    {
      name: 'Carlos Mendes',
      role: 'Designer Freelancer',
      avatar: '/images/user1.jpg',
      text: 'Meu notebook caiu e a tela quebrou. Trouxe para a EletroSystem, foram super rápidos — em 2 dias já estava pronto. Preço justo e garantia. Recomendo!',
      stars: 5,
    },
    {
      name: 'Ana Beatriz',
      role: 'Estudante de Medicina',
      avatar: '/images/user2.jpg',
      text: 'Notebook travando o tempo todo e com vírus. Me ajudaram com tudo, formação, upgrade de SSD e limpeza interna. Agora está voando!',
      stars: 5,
    },
    {
      name: 'Renato Costa',
      role: 'Empreendedor',
      avatar: '/images/user3.jpg',
      text: 'Procurei vários técnicos e todos disseram que minha placa-mãe estava perdida. A EletroSystem recuperou! Trabalho incrível, muito profissionais.',
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#050f08]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-sm font-semibold uppercase tracking-widest">Depoimentos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            O que dizem nossos <span className="text-[#0BD061]">clientes</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-black border border-white/8 hover:border-[#0BD061]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <StarIcon key={j} size={16} weight="fill" className="text-[#0BD061]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <Image
                  src={t.avatar}
                  width={40}
                  height={40}
                  alt={t.name}
                  className="rounded-full object-cover w-10 h-10"
                />
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const { ref, visible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Quanto tempo leva o diagnóstico?',
      a: 'O diagnóstico é realizado em até 24h úteis após o recebimento do equipamento. Para casos mais complexos (reparo de placa), pode levar até 48h.',
    },
    {
      q: 'Vocês oferecem garantia nos serviços?',
      a: 'Sim! Todos os nossos serviços têm garantia de 90 dias em peças e mão de obra. Se o problema voltar nesse período, resolvemos sem custo.',
    },
    {
      q: 'Preciso agendar para trazer meu equipamento?',
      a: 'Sim, trabalhamos com atendimento mediante agendamento para garantir atenção exclusiva ao seu equipamento. Entre em contato pelo WhatsApp para agendar.',
    },
    {
      q: 'Como funciona o orçamento?',
      a: 'Após o diagnóstico, enviamos o orçamento pelo WhatsApp. Você aprova antes de qualquer serviço ser realizado. Se não quiser fazer o reparo, cobramos apenas a taxa de diagnóstico.',
    },
    {
      q: 'Quais formas de pagamento são aceitas?',
      a: 'Aceitamos PIX, cartão de débito e crédito (à vista e parcelado), e dinheiro. Consulte as condições de parcelamento pelo WhatsApp.',
    },
    {
      q: 'Vocês atendem empresas?',
      a: 'Sim! Oferecemos contratos de manutenção preventiva e suporte para empresas. Entre em contato para saber mais sobre nossos planos corporativos.',
    },
    {
      q: 'E se meu notebook não tiver conserto?',
      a: 'Se o reparo não for viável economicamente, informamos você antes de qualquer custo. Podemos orientar sobre as melhores opções como reaproveitamento de peças ou descarte adequado.',
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#0BD061] text-sm font-semibold uppercase tracking-widest">Dúvidas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Perguntas <span className="text-[#0BD061]">frequentes</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`space-y-3 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/8 overflow-hidden hover:border-[#0BD061]/30 transition-colors duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-[#050f08] hover:bg-[#0a150d] transition-colors"
              >
                <span className="text-white font-medium text-sm">{faq.q}</span>
                <QuestionIcon
                  size={20}
                  className={`text-[#0BD061] shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 bg-[#050f08] text-gray-400 text-sm leading-relaxed border-t border-white/5">
                  <div className="pt-4">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LandingFooter() {
  return (
    <footer className="bg-[#050f08] border-t border-[#0BD061]/10">
      <div className="max-w-6xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Image
            src="/images/logo.png"
            width={180}
            height={54}
            alt="EletroSystem"
            className="h-12 w-auto object-contain mb-5"
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Especialistas em reparo de notebooks, computadores e placas eletrônicas na Barra da Tijuca - RJ.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.instagram.com/eletrosystemti/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 rounded-xl hover:bg-[#0BD061] hover:text-black transition-all duration-300 text-gray-300"
            >
              <InstagramLogoIcon size={18} />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 rounded-xl hover:bg-[#0BD061] hover:text-black transition-all duration-300 text-gray-300"
            >
              <WhatsappLogoIcon size={18} />
            </a>
            <a
              href="tel:+5521989810973"
              className="p-2.5 bg-white/5 rounded-xl hover:bg-[#0BD061] hover:text-black transition-all duration-300 text-gray-300"
            >
              <PhoneIcon size={18} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-5">Serviços</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {['Reparo de Notebooks', 'Manutenção de Computadores', 'Montagem PC Gamer', 'Reparo de Placas (Nível III)', 'Limpeza Profissional'].map((s) => (
              <li key={s}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0BD061] transition-colors flex items-center gap-2"
                >
                  <ArrowRightIcon size={12} />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-5">Contato</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPinIcon size={18} className="text-[#0BD061] shrink-0 mt-0.5" />
              <span>Barra da Tijuca<br />Rio de Janeiro - RJ</span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon size={18} className="text-[#0BD061] shrink-0" />
              <a href="tel:+5521989810973" className="hover:text-[#0BD061] transition-colors">(21) 9 8981-0973</a>
            </li>
            <li className="flex items-center gap-3">
              <WhatsappLogoIcon size={18} className="text-[#0BD061] shrink-0" />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#0BD061] transition-colors">WhatsApp</a>
            </li>
          </ul>
        </div>

        {/* Hours + CTA */}
        <div>
          <h4 className="text-white font-semibold mb-5">Horário</h4>
          <ul className="space-y-2 text-sm text-gray-400 mb-6">
            <li className="flex items-center gap-3">
              <ClockIcon size={16} className="text-[#0BD061]" />
              Seg – Sex: 09h às 18h
            </li>
            <li className="flex items-center gap-3">
              <ClockIcon size={16} className="text-[#0BD061]" />
              Sábado: 09h às 12h
            </li>
          </ul>
          <Link
            href="/#servicos"
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#0BD061]/40 text-[#0BD061] text-sm font-semibold rounded-xl hover:bg-[#0BD061] hover:text-black transition-all duration-300"
          >
            <ArrowUpRightIcon size={16} />
            Todos os serviços
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© 2026 EletroSystem. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Desenvolvido por</span>
            <a href="https://www.mystdev.com.br/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/myst-logo.webp" width={80} height={24} alt="MystDev" className="h-6 w-auto object-contain" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ConsertoNotebookPage() {
  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ServicesSection />
        <WhyTrustSection />
        <HowItWorksSection />
        <CtaBanner />
        <LabGallerySection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <LandingFooter />
    </>
  );
}