import { ProdutoContent } from "@/components/ProdutoContent";
import { getProductById } from "@/services/getProductById";

export default async function ProductPage({ params }: any) {
    const { id } = await params;

    const product = await getProductById(id);

    return (
        <>
            <ProdutoContent product={product} />
        </>
    );
}