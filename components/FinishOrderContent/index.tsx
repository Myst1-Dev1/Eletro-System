'use client';

import React, { useRef, useState } from "react";
import Image from "next/image";
import { CaretRightIcon, EnvelopeSimpleIcon, PhoneIcon, UserIcon, TrashIcon } from "@phosphor-icons/react";
import { handlePhoneChange } from "@/utils/phoneMask";
import { useCartStore } from "@/stores/useCartStore";
import { Loading } from "@/components/Loading";
import { useLaptopRepair } from "../LaptopRepair";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function FinishOrderContent() {
    const { cart, removeFromCart, clearCart, getTotalPrice, increaseQuantity, decreaseQuantity } = useCartStore();
    const { WHATSAPP_URL } = useLaptopRepair();
    
    const [loading, setLoading] = useState(false);

    const formRef = useRef<HTMLFormElement | null>(null);

    const router = useRouter();

    const total = getTotalPrice();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());

            const nome = data.nome as string;
            const email = data.email as string;
            const telefone = data.telefone as string;
            
            const itemsList = cart.map((item) => {
                const itemTotal = item.product.price * item.quantity;
                const priceFormatted = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(itemTotal);
                return `• *${item.quantity}x* ${item.product.name} - ${priceFormatted}`;
            }).join('\n');

            const totalFormatted = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total);

            const message = 
                `*NOVO PEDIDO REALIZADO* 🛒

                *Dados do Cliente:*
                👤 *Nome:* ${nome}
                📧 *E-mail:* ${email}
                📞 *Telefone:* ${telefone}

                *Itens do Pedido:*
                ${itemsList}

                *Total:* ${totalFormatted}`;

                const encodedMessage = encodeURIComponent(message);

                const whatsappApiUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_URL}&text=${encodedMessage}`;

                window.open(whatsappApiUrl, '_blank');

                formRef.current?.reset();
                clearCart();
            } catch (error) {
                console.error("Erro ao enviar pedido via WhatsApp:", error);
            } finally {
                setLoading(false);
                toast.success("Pedido finalizado com sucesso!");
                router.push('/sucesso?success=true');
        }
    };

    return (
        <section className="py-12 md:py-24 max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-6 bg-[#0d0d0d] text-white p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
                    <h2 className="text-xl text-center font-semibold tracking-tighter">
                        Preencha os campos abaixo para prosseguir
                    </h2>
                    
                    <form ref={formRef} className="space-y-4 mt-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nome" className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 ml-1">
                                Seu Nome Completo
                            </label>
                            <div className="relative group">
                                <UserIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[#03A64A] transition-colors" />
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    required
                                    placeholder="Ex: John Doe"
                                    className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#03A64A]/50 focus:ring-1 focus:ring-[#03A64A]/50 transition-all placeholder:text-zinc-700"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 ml-1">
                                E-mail de Contato
                            </label>
                            <div className="relative group">
                                <EnvelopeSimpleIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[#03A64A] transition-colors" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#03A64A]/50 focus:ring-1 focus:ring-[#03A64A]/50 transition-all placeholder:text-zinc-700"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="telefone" className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 ml-1">
                                Telefone / WhatsApp
                            </label>
                            <div className="relative group">
                                <PhoneIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-[#03A64A] transition-colors" />
                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    required
                                    onInput={handlePhoneChange}
                                    maxLength={15}
                                    placeholder="(xx) xxxxx-xxxx"
                                    className="w-full bg-black/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-[#03A64A]/50 focus:ring-1 focus:ring-[#03A64A]/50 transition-all placeholder:text-zinc-700"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading || cart.length === 0}
                            className="cursor-pointer group flex items-center gap-3 justify-center w-full mt-6 py-5 bg-[#03A64A] hover:bg-[#028a3d] disabled:opacity-50 disabled:cursor-not-allowed text-black font-black uppercase tracking-widest rounded-2xl transition-all shadow-[0_15px_30px_rgba(3,166,74,0.2)] active:scale-95"
                        >
                            {loading ? <Loading /> : (
                                <>
                                    Enviar Pedido 
                                    <CaretRightIcon size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

                <div className="lg:col-span-6 bg-[#0d0d0d] text-white p-6 md:p-8 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between pb-4 border-b border-white/10">
                            <h2 className="text-xl font-semibold tracking-tighter">Itens no carrinho</h2>
                            {cart.length > 0 && (
                                <button 
                                    onClick={() => clearCart()} 
                                    className="text-xs text-zinc-500 hover:text-red-400 transition-colors cursor-pointer"
                                >
                                    Limpar tudo
                                </button>
                            )}
                        </div>

                        <div className="mt-6 space-y-4 max-h-95 overflow-y-auto pr-2">
                            {cart.length === 0 ? (
                                <p className="text-zinc-500 text-center py-8">Seu carrinho está vazio.</p>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.product.id} className="flex gap-4 items-center bg-black/30 p-3 rounded-2xl border border-white/5">
                                        <Image
                                            src={item.product.image}
                                            alt={item.product.name}
                                            width={80}
                                            height={80}
                                            className="w-16 h-16 bg-white/10 rounded-xl object-cover shrink-0"
                                        />

                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-sm truncate">{item.product.name}</p>
                                            <p className="text-xs text-[#03A64A] font-semibold mt-1">
                                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.product.price)}
                                            </p>

                                            <div className="flex items-center gap-2 mt-2">
                                                <button
                                                    type="button"
                                                    onClick={() => decreaseQuantity(item.product.id)}
                                                    className="w-6 h-6 bg-zinc-800 hover:bg-zinc-700 rounded flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                                                >
                                                    -
                                                </button>
                                                <span className="text-xs w-4 text-center">{item.quantity}</span>
                                                <button
                                                    type="button"
                                                    onClick={() => increaseQuantity(item.product.id)}
                                                    className="w-6 h-6 bg-zinc-800 hover:bg-zinc-700 rounded flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end justify-between self-stretch">
                                            <TrashIcon
                                                onClick={() => removeFromCart(item.product.id)}
                                                className="cursor-pointer text-zinc-500 hover:text-red-500 transition-colors"
                                                size={18}
                                            />
                                            <p className="font-semibold text-sm">
                                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.product.price * item.quantity)}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/10 space-y-2">
                        <div className="flex justify-between items-center text-zinc-400 text-sm">
                            <span>Subtotal</span>
                            <span>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold text-white">
                            <span>Total</span>
                            <span className="text-[#03A64A]">
                                {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}