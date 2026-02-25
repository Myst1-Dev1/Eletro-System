import { ProductResponse } from "@/@types/Product";
import { create } from "zustand";
import Cookies from "js-cookie";

interface ProductStore {
    products: ProductResponse[] | any;
    setProducts: (products: ProductResponse[]) => void;
    getProducts: () => Promise<void>;
    categories: string[] | any;
    setCategories: (categories: string[]) => void;
    getCategories: () => Promise<void>;
}

export const useProductsStore = create<ProductStore>((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    getProducts: async () => {
        const token = Cookies.get("user");

        const response = await fetch("https://admin.eletrosystemti.com.br/api/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            cache: 'no-store'
        });
        const data = await response.json();
        set({ products: data });
    },
    categories: [],
    setCategories: (categories) => set({ categories }),
    getCategories: async () => {
        const token = Cookies.get("user");

        const response = await fetch("https://admin.eletrosystemti.com.br/api/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            cache: 'no-store'
        });
        const data = await response.json();
        set({ categories: data });
    },
}));