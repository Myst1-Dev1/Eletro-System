import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface CartItem {
    product: Product;
    quantity: number;
}

interface CartStore {
    cart: CartItem[];

    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    clearCart: () => void;

    getTotalPrice: () => number;
    getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cart: [],

            addToCart: (product) => {
                const existing = get().cart.find(
                    (item) => item.product.id === product.id
                );

                if (existing) {
                    set({
                        cart: get().cart.map((item) =>
                            item.product.id === product.id
                                ? { ...item, quantity: item.quantity + 1 }
                                : item
                        ),
                    });
                } else {
                    set({
                        cart: [...get().cart, { product, quantity: 1 }],
                    });
                }
            },

            removeFromCart: (productId) =>
                set({
                    cart: get().cart.filter(
                        (item) => item.product.id !== productId
                    ),
                }),

            decreaseQuantity: (productId) => {
                const existing = get().cart.find(
                    (item) => item.product.id === productId
                );

                if (!existing) return;

                if (existing.quantity === 1) {
                    set({
                        cart: get().cart.filter(
                            (item) => item.product.id !== productId
                        ),
                    });
                } else {
                    set({
                        cart: get().cart.map((item) =>
                            item.product.id === productId
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        ),
                    });
                }
            },

            clearCart: () => set({ cart: [] }),

            getTotalPrice: () =>
                get().cart.reduce(
                    (total, item) =>
                        total + item.product.price * item.quantity,
                    0
                ),

            getTotalItems: () =>
                get().cart.reduce(
                    (total, item) => total + item.quantity,
                    0
                ),
        }),
        {
            name: "cart-storage", // localStorage key
        }
    )
);