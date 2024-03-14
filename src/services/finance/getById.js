/**
 * Retorna os dados de acordo com o id
 * @param data
 * @param id
 * @returns {*}
 */
export default function getById(data, id) {
    // Retorna os dados de acordo com o tipo
    return data.filter(item => item.id === id)
}