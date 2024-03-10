/**
 * Retorna os dados de acordo com o tipo
 * @param {Object} data
 * @param {string} tipe
 * @returns {Array}
 */
function get(data, tipe) {
    // Retorna os dados de acordo com o tipo
    return data.filter(item => item.tipe === tipe)
}

/**
 * Adiciona um item a lista de dados
 * @param {useState} setData
 * @param {useState} data
 * @param {Object} news
 */
function add(setData, data, news) {
    if (news?.nome === "" || news?.valor === 0)
        throw new Error("Os campos são obrigatórios")

    if(news?.tipe !== "receitas" && news?.tipe !== "despesas" )
        throw new Error("Tipo inválido")


    setData([...data, news])
}

export default {get, add}