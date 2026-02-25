'use server';

import { Order } from "@/@types/Order";
import { getAllOrders } from "@/services/getOrders";

export default async function Pedidos() {
    const orders: Order[] | any = await getAllOrders();

    return (

        <div className="container py-12">
            <h1 className="text-3xl font-bold mb-12">Meus Pedidos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {orders?.data?.map((order: any) => (
                    <div
                        key={order.id}
                        className="bg-zinc-900 lg:max-w-96 w-full rounded-3xl p-8 shadow-xl border border-zinc-800 hover:border-[#03A64A]/40 transition"
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8 border-b border-zinc-800 pb-6">
                            <div>
                                <h2 className="text-xl font-semibold">
                                    Pedido #{order.id}
                                </h2>
                                <p className="text-sm text-zinc-400">
                                    {new Date(order.createdAt).toLocaleDateString("pt-BR", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric",
                                    })}
                                </p>
                            </div>

                            <div className="text-2xl font-bold text-[#03A64A]">
                                R$ {Number(order.total_price).toFixed(2)}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                                Dados do Cliente
                            </h3>

                            <div className="bg-zinc-800 rounded-xl p-4 space-y-1 text-sm">
                                <p><strong>Nome:</strong> {order.user.name}</p>
                                <p><strong>Email:</strong> {order.user.email}</p>
                                <p><strong>Telefone:</strong> {order.user.phone}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
                                Produtos do Pedido
                            </h3>

                            <div className="space-y-4">
                                {order.orderProducts.map((item: any) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 bg-zinc-800 rounded-xl p-4"
                                    >
                                        <div>
                                            <p className="font-semibold">
                                                {item.product.name}
                                            </p>
                                            <p className="text-sm text-zinc-400">
                                                Quantidade: {item.quantity}
                                            </p>
                                        </div>

                                        <div className="text-sm font-semibold">
                                            R$ {Number(item.price).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-end">
                            <span className="text-lg font-bold text-[#03A64A]">
                                Total: R$ {Number(order.total_price).toFixed(2)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}