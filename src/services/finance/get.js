import loadFinances from "./loadFinances";

/**
 * Retorna os dados de acordo com o tipo
 * @param {Object} data
 * @param {string} tipe
 * @returns {Array}
 */
export default function get(data, tipe = null) {
    // Retorna os dados de acordo com o tipo
    if (!tipe) return data
    return data.filter(item => item.type === tipe)
}