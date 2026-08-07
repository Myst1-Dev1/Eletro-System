'use client';

import { QuestionIcon } from "@phosphor-icons/react";
import { useLaptopRepair } from "..";

export function FaqSection() {
  const { ref, visible, open, setOpen } = useLaptopRepair();

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