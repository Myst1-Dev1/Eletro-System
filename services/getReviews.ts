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

        if (data.status !== "OK") {
            return [];
        }

        return data.result.reviews || [];
    } catch (error) {
        console.error("Erro ao buscar avaliações:", error);
        return [];
    }
}