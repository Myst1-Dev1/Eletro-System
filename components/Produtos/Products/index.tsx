'use client';

import { ProductBox } from "@/components/ProductBox";

interface ProductsProps {
    products: any;
}

export function Products({ products }: ProductsProps) {

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                {products?.map((product: any) => (
                    <ProductBox
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        priceOld={product.oldPrice}
                        discount={product.discount}
                        image={product.image}
                        length={products.length}
                    />
                ))}
            </div>
        </>
    )
}