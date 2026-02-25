'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

interface ActionResult {
    success: boolean;
    message?: string;
}

export async function signInAction(_: ActionResult, formData: FormData): Promise<ActionResult> {
    const phone = formData.get('phone');
    const password = formData.get('password');

    if (!phone || !password) {
        return { success: false, message: 'Preencha todos os campos' };
    }

    try {
        const response = await fetch('https://admin.eletrosystemti.com.br/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone,
                password,
            }),
        });

        const data = await response.json();

        const cookieStore = await cookies();
        cookieStore.set({
            name: "user",
            value: data.token,
            path: "/",
            maxAge: 60 * 60 * 24 * 1
        });

        revalidatePath('/', 'page');
        return { success: true, message: 'Login realizado com sucesso' };
    } catch (error: any) {
        console.log('tivemos um erro ao fazer o login:', error);
        return { success: false, message: error.message || 'Erro interno no servidor' };
    }
}
