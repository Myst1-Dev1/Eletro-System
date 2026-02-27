'use client';

import { createNewOrder } from "@/actions/ordersAction";
import { Loading } from "@/components/Loading";
import { useCartStore } from "@/stores/useCartStore";
import { TrashIcon, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

interface CartProps {
    isCartOpen: boolean;
    setIsCartOpen: (isCartOpen: boolean) => void;
}

export function Cart({ isCartOpen, setIsCartOpen }: CartProps) {
    const { cart, removeFromCart, clearCart, getTotalPrice, increaseQuantity, decreaseQuantity } = useCartStore();
    const [loading, setLoading] = useState(false);

    const total = getTotalPrice();

    const router = useRouter();

    const handleFinalizeOrder = async () => {
        setLoading(true);
        try {
            await Promise.all(
                cart.map((item: any) =>
                    createNewOrder(item.product.id, item.quantity)
                )
            );

            clearCart();
            setIsCartOpen(false);
            toast.success("Pedido finalizado com sucesso!");
            router.push('/sucesso?success=true');
        } catch (error) {
            console.error("Erro ao finalizar pedido:", error);
            toast.error("Houve um erro ao processar seu pedido.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsCartOpen(false)}
            />
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-[#0f0f0f] z-50 shadow-2xl transform transition-transform duration-300 flex flex-col ${isCartOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <h2 className="text-xl font-semibold">Seu Carrinho</h2>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="cursor-pointer p-2 rounded-lg hover:bg-white/10 transition"
                    >
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">

                    {cart?.map((item) => (
                        <div key={item.product.id} className="flex gap-4">
                            <Image
                                src={`https://admin.eletrosystemti.com.br/uploads/${item.product.image}`}
                                alt={item.product.name}
                                width={200}
                                height={200}
                                className="w-20 h-20 bg-white/10 rounded-lg object-cover"
                            />

                            <div className="flex flex-col justify-between flex-1">
                                <div>
                                    <p className="font-medium">{item.product.name}</p>
                                    <p className="text-sm text-gray-400">Qtd: {item.quantity}</p>
                                </div>

                                <div className="flex items-center py-2 gap-2">
                                    <button
                                        onClick={() => decreaseQuantity(item.product.id)}
                                        className="transition-all duration-500 hover:bg-green-600 w-5 h-5 bg-zinc-800 border border-zinc-700 flex items-center justify-center cursor-pointer"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => increaseQuantity(item.product.id)}
                                        className="transition-all duration-500 hover:bg-green-600 w-5 h-5 bg-zinc-800 border border-zinc-700 flex items-center justify-center cursor-pointer"
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="flex justify-between w-full">
                                    <p className="font-semibold text-[#03A64A]">
                                        {Intl.NumberFormat('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        }).format(Number(item.product.price * item.quantity))}
                                    </p>

                                    <TrashIcon
                                        onClick={() => removeFromCart(item.product.id)}
                                        className="cursor-pointer hover:scale-110 transition-transform"
                                        size={20}
                                        color="#E7000B"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <span onClick={() => clearCart()} className="px-6 text-gray-500 font-thin mb-3 cursor-pointer transition-all duration-500 hover:text-green-400">Limpar Carrinho</span>
                <div className="border-t border-white/10 p-6 space-y-4">

                    <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span className="text-[#03A64A]">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</span>
                    </div>

                    <button onClick={handleFinalizeOrder} className="cursor-pointer w-full py-4 rounded-xl bg-gradient-to-r from-[#33945E] to-[#03A64A] font-semibold hover:brightness-110 transition">
                        {loading ? <Loading /> : "Finalizar Pedido"}
                    </button>
                </div>
            </div>
        </>
    );
}