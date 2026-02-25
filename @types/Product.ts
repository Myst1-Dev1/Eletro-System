export type ProductResponse = {
    data: Product[];
};

export type Product = {
    id: number;
    name: string;
    image: string;
    short_description: string;
    description: string;
    price: string;
    price_old: string | null;
    featured: boolean;
    published: boolean;
    quantity: number;
    category: Category;
};

export type Category = {
    id: number;
    name: string;
};