import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface CartItem {
    product: Product | any;
    quantity: number;
}

interface CartStore {
    cart: CartItem[];
    isOpen: boolean;

    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;

    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    clearCart: () => void;

    getTotalPrice: () => number;
    getTotalItems: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cart: [],
            isOpen: false,

            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),
            toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

            addToCart: (product, quantity = 1) => {
                const currentCart = get().cart;
                const existingIndex = currentCart.findIndex(
                    (item) => item.product.id === product.id
                );

                if (existingIndex > -1) {
                    const updatedCart = [...currentCart];
                    updatedCart[existingIndex].quantity += quantity;
                    set({ cart: updatedCart, isOpen: true });
                } else {
                    set({
                        cart: [...currentCart, { product, quantity }],
                        isOpen: true,
                    });
                }
            },

            removeFromCart: (productId) =>
                set({
                    cart: get().cart.filter(
                        (item) => item.product.id !== productId
                    ),
                }),

            increaseQuantity: (productId) => {
                const existing = get().cart.find(
                    (item) => item.product.id === productId
                );

                if (!existing) return;

                set({
                    cart: get().cart.map((item) =>
                        item.product.id === productId
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                });
            },

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