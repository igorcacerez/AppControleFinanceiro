/**
 * Format a number to currency
 * @param {number} value
 * @returns {string}
 */
export function moneyFormat(value) {
    return parseFloat(value).toFixed(2).replace(".", ",")
}

export function moneyFormatToNumber(value) {
    return parseFloat(value.replace("R$", "").replace(",", ".").trim())
}