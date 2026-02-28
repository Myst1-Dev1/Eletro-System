export const handlePhoneChange = (
    e: React.FormEvent<HTMLInputElement>
) => {
    const input = e.currentTarget;
    let value = input.value.replace(/\D/g, ""); // Remove tudo que não é número

    // Se estiver vazio, limpa o campo e para a execução
    if (!value) {
        input.value = "";
        return;
    }

    if (value.length > 11) value = value.slice(0, 11);

    // Aplica a máscara dinamicamente conforme a quantidade de números
    if (value.length > 10) {
        // Celular: (XX) XXXXX-XXXX
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 6) {
        // Fixo ou Celular incompleto: (XX) XXXX-XXXX
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
        // (XX) XXXX
        value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
        // Apenas o DDD: (XX
        value = value.replace(/^(\d*)/, "($1");
    }

    input.value = value;
};