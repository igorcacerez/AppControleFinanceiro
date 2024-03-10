/**
 * Format a number to currency
 * @param {number} value
 * @returns {string}
 */
export function moneyFormat(value) {
    return parseFloat(value)
        .toLocaleString(
        'pt-BR',
        {style: 'currency', currency: 'BRL'}
        );
}