export async function getReviews() {
    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!placeId || !apiKey) {
        console.error("Variáveis de ambiente ausentes!");
        return [];
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating&key=${apiKey}&language=pt-BR`;

    try {
        const res = await fetch(url, { next: { revalidate: 3600 } });
        const data = await res.json();
        console.log("Status da API Google:", data.status);

        if (data.status !== "OK") {
            console.error("Erro na API:", data.error_message || data.status);
            return [];
        }

        console.log("Reviews encontradas:", data.result.reviews?.length || 0);
        return data.result.reviews || [];
    } catch (error) {
        console.error("Erro ao buscar avaliações:", error);
        return [];
    }
}