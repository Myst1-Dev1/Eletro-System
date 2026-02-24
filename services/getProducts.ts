import { cookies } from "next/headers";

export async function getAllProducts() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("user")?.value;

        const response = await fetch("https://admin.eletrosystemti.com.br/api/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar produtos");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Erro ao buscar produtos:", error);
        return [];
    }
}