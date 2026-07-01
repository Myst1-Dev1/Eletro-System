'use client';

import { useState } from "react";
import { Filters } from "../Filters";
import { Pagination } from "../Pagination";
import { Products } from "../Products";
import { SparkleIcon } from "@phosphor-icons/react";
import { ProductBox } from "@/components/ProductBox";
import { div } from "framer-motion/client";

interface ProdutosContentProps {
    products: any;
    productsToDisplay: any;
    categoria: string;
}

export function ProdutosContent({ products, productsToDisplay, categoria }: ProdutosContentProps) {
    // const [search, setSearch] = useState('');
    // const [category, setCategory] = useState(categoria || 'todos');
    // const [currentPage, setCurrentPage] = useState(1);

    // const itemsPerPage = 8;

    // const filteredProducts = productsToDisplay?.data?.filter((product: any) => {
    //     const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());

    //     const matchesCategory = category === 'todos' || product.category.name === category;

    //     return matchesSearch && matchesCategory;
    // });

    // const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    // const startIndex = (currentPage - 1) * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const currentItems = filteredProducts.slice(startIndex, endIndex);

    const produtosDestaque = [
        {
            id: 1,
            name: 'teste',
            price: 100,
            image: '/images/produto.webp',
        },
        {
            id: 2,
            name: 'teste',
            price: 100,
            image: '/images/produto.webp',

        },
        {
            id: 3,
            name: 'teste',
            price: 100,
            image: '/images/produto.webp',
        },
        {
            id: 4,
            name: 'teste',
            price: 100,
            image: '/images/produto.webp',
        }
    ]

    return (
        <>

            <div>
                <div className="bg-[url(/images/home-banner.webp)] w-full min-h-[30dvh] lg:min-h-[50dvh] bg-cover bg-center flex justify-center items-center flex-col gap-4">
                    <h1 className="text-2xl lg:text-4xl font-bold">As Melhores Ofertas <br /> Você Encontra aqui</h1>
                    <p className="text-xs lg:text-lg max-w-md text-center px-4">Promoções exclusivas e cupoms para você aproveitar na sua loja online</p>
                </div>

                <div className="py-12 container">
                    <div className="flex flex-col items-center mx-auto w-full">
                        <div className="flex items-center gap-2 text-[#03A64A] font-bold text-sm uppercase tracking-tighter mb-4">
                            <SparkleIcon size={20} weight="fill" />
                            <span>Destaques</span>
                        </div>
                        <h2 className="text-2xl text-center md:text-4xl font-black text-white leading-tight">
                            Tecnologia de ponta <br />
                            <span className="text-[#03A64A]">em cada detalhe.</span>
                        </h2>
                    </div>

                </div>

                {/* <div className="container py-12">
                    <Filters categories={products} search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
                    <Products products={currentItems} />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div> */}
            </div>
        </>
    )
}