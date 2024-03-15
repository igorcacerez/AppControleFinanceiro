/**
 * Format a number to currency
 * @param {number} value
 * @returns {string}
 */
export function moneyFormat(value) {
    // Format to 2 decimal places
    let val = parseFloat(value).toFixed(2).replace(".", ",")

    // Add . to thousand
    val = val.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    return val
}

export function moneyFormatToNumber(value) {
    // Remove R$, . and replace , to .
    let newValue = value.replace("R$", "").replace(".", "").replace(",", ".").trim()
    return parseFloat(newValue)
}