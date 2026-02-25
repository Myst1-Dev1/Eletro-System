'use client';

import { useProductsStore } from "@/stores/useProductsStore";
import { useEffect } from "react";

export default function ProductProvider({ children }: { children: React.ReactNode }) {
    const { getProducts, getCategories } = useProductsStore();

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    return <>{children}</>;
}