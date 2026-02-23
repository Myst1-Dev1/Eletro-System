export const handlePhoneChange = (
    e: React.FormEvent<HTMLInputElement>
) => {
    const input = e.currentTarget;

    const cursorPosition = input.selectionStart || 0;

    let value = input.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length >= 7) {
        value = value.replace(
            /^(\d{2})(\d{5})(\d{0,4}).*/,
            "($1) $2-$3"
        );
    } else if (value.length >= 3) {
        value = value.replace(
            /^(\d{2})(\d{0,5})/,
            "($1) $2"
        );
    } else if (value.length > 0) {
        value = value.replace(
            /^(\d{0,2})/,
            "($1"
        );
    }

    input.value = value;

    // const newCursorPosition = cursorPosition + (value.length - input.value.length);
    // input.setSelectionRange(newCursorPosition, newCursorPosition);
};