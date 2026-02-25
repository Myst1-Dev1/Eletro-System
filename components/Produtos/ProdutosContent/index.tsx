'use client';

import { useState } from "react";
import { Filters } from "../Filters";
import { Pagination } from "../Pagination";
import { Products } from "../Products";

interface ProdutosContentProps {
    products: any;
    productsToDisplay: any;
    categoria: string;
}

export function ProdutosContent({ products, productsToDisplay, categoria }: ProdutosContentProps) {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState(categoria || 'todos');
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8;

    const filteredProducts = productsToDisplay?.data?.filter((product: any) => {
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());

        const matchesCategory = category === 'todos' || product.category.name === category;

        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredProducts.slice(startIndex, endIndex);

    const handleFilterChange = (newCategory: string) => {
        setCategory(newCategory);
        setCurrentPage(1);
    };

    return (
        <>

            <div>
                <div className="bg-[url(/images/home-banner.webp)] w-full min-h-[30dvh] lg:min-h-[50dvh] bg-cover bg-center flex justify-center items-center flex-col gap-4">
                    <h1 className="text-2xl lg:text-4xl font-bold">As Melhores Ofertas <br /> Você Encontra aqui</h1>
                    <p className="text-sm lg:text-lg max-w-md text-center px-4">Promoções exclusivas e cupoms para você aproveitar na sua loja online</p>
                </div>

                <div className="container py-12">
                    <Filters categories={products} search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
                    <Products products={currentItems} />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
            </div>
        </>
    )
}