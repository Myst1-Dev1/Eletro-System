'use server';

import { ProdutosContent } from "@/components/Produtos/ProdutosContent";
import { getAllProducts } from "@/services/getProducts";
import { getProductsByCategory } from "@/services/getProductsByCategory";

export default async function Produtos({
    searchParams,
}: {
    searchParams: Promise<{ categoria?: string | any }>;
}) {
    const products = await getAllProducts();

    const { categoria } = await searchParams;
    const productsByCategory = await getProductsByCategory(categoria);

    const productsToDisplay = productsByCategory?.data?.length > 0 ? productsByCategory : products;

    return (
        <>
            <ProdutosContent products={products.data} productsToDisplay={productsToDisplay} categoria={categoria} />
        </>
    )
}