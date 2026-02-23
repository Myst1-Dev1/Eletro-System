'use server';

import { cookies } from "next/headers";

interface ActionResult {
    success: boolean;
    message?: string;
}

export async function signInAction(_: ActionResult, formData: FormData): Promise<ActionResult> {
    const phoneNumber = formData.get('phoneNumber');
    const password = formData.get('password');

    if (!phoneNumber || !password) {
        return { success: false, message: 'Preencha todos os campos' };
    }

    const cookieStore = await cookies();

    try {
        const response = await fetch('https://admin.eletrosystemti.com.br/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber,
                password,
            }),
        });

        const data = await response.json();

        if (data.status === 'success') {
            cookieStore.set('user', JSON.stringify(data.user));
            return { success: true, message: 'Login realizado com sucesso' };
        }

        return { success: false, message: data.message || 'Erro ao realizar login' };
    } catch (error: any) {
        console.error(error);
        return { success: false, message: error.message || 'Erro interno no servidor' };
    }
}
