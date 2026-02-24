'use server';

import { cookies } from 'next/headers';

export async function createNewOrder(id: string, quantity: number) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('user')?.value;

        if (!token) {
            throw new Error('Token not found');
        }

        const response = await fetch(
            'https://admin.eletrosystemti.com.br/api/orders',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    items: [
                        {
                            product: Number(id),
                            quantity: Number(quantity)
                        }
                    ],
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error('Erro da API:', data);
            throw new Error('Failed to create order');
        }

        console.log('Pedido criado com sucesso', data);

        return data;

    } catch (error) {
        console.log(error);
    }

}