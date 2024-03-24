export async function removeMaskPhone(phone) {
    return await phone.replace(/[^0-9]/g, "")
}

export async function addMaskPhone(phone) {
    if (phone === "" || phone === null || phone === undefined) return phone;

    let phoneAux = await phone.replace(/[^0-9]/g, "")
    if (phoneAux.length < 11) return phoneAux;

    return phoneAux.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3")
}