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
    refreshUser: () => Promise<void>;
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

            const response = await fetch("https://admin.eletrosystemti.com.br/api/me", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${userCookie}`,
                },
                cache: 'no-store'
            });

            if (!response.ok) throw new Error("Não autenticado");

            const data = await response.json();

            set({
                user: data,
                isLogged: true,
                isLoading: false,
            });
        } catch (error) {
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

    refreshUser: async () => {
        try {
            set({
                isLoading: true
            });

            const userCookie = Cookies.get('user');

            if (!userCookie) {
                throw new Error('Usuário não autenticado');
            }

            const response = await fetch("https://admin.eletrosystemti.com.br/api/me", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${userCookie}`,
                },
                cache: 'no-store'
            });

            if (!response.ok) throw new Error("Não autenticado");

            const data = await response.json();

            set({
                user: data,
                isLogged: true,
                isLoading: false,
            });
        } catch (error) {
            set({
                user: null,
                isLogged: false,
                isLoading: false,
            });
        }
    },
}));