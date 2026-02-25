export type Order = {
    data: [
        {
            id: number;
            total_price: string;
            createdAt: string;
            user: {
                name: string;
                email: string;
                phone: string;
            };
            orderProducts: {
                id: number;
                quantity: number;
                price: string;
                product: {
                    name: string;
                    price: string;
                };
            };
        }
    ]
}