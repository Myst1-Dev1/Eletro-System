'use client';

import { useProductsStore } from "@/stores/useProductsStore";
import { useUserStore } from "@/stores/useUserStore";
import { useEffect } from "react";

export default function ProductProvider({ children }: { children: React.ReactNode }) {
    const { getProducts, getCategories } = useProductsStore();
    const { isLogged } = useUserStore();

    useEffect(() => {
        getProducts();
        getCategories();
    }, [isLogged]);

    return <>{children}</>;
}