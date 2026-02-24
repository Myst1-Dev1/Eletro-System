import { create } from "zustand";
import Cookies from 'js-cookie';

interface User {
    id: number;
    name: string;
    phone: string;
    email: string;
}

interface UserState {
    user: User | null;
    isLogged: boolean;
    isLoading: boolean;
    fetchUser: () => Promise<void>;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    user: null,
    isLogged: false,
    isLoading: true,

    fetchUser: async () => {
        try {
            const userCookie = Cookies.get('user');

            if (!userCookie) {
                throw new Error('Usuário não autenticado');
            }

            const parsedUser = JSON.parse(userCookie);

            const response = await fetch("https://admin.eletrosystemti.com.br/api/me", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${parsedUser.token}`,
                },
                cache: 'no-store'
            });

            if (!response.ok) throw new Error("Não autenticado");

            const data = await response.json();

            console.log('data', data)

            set({
                user: data,
                isLogged: true,
                isLoading: false,
            });
        } catch (error) {
            console.log('Tivemos um erro ao pegar os dados', error)
            set({
                user: null,
                isLogged: false,
                isLoading: false,
            });
        }
    },

    logout: async () => {
        Cookies.remove('user');
        set({
            user: null,
            isLogged: false,
        });
    },
}));