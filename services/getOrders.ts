import { cookies } from "next/headers";

export async function getAllOrders() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("user")?.value;

        const response = await fetch("https://admin.eletrosystemti.com.br/api/orders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            return [];
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Erro ao buscar produtos:", error);
        return [];
    }
}