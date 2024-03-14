/**
 * Adiciona um item a lista de dados
 * @param {useState} setData
 * @param {useState} data
 * @param {Object} news
 */
export default function add(setData, data, news) {
    if (news?.nome === "" || news?.valor === 0)
        throw new Error("Os campos são obrigatórios")

    if(news?.tipe !== "receitas" && news?.tipe !== "despesas" )
        throw new Error("Tipo inválido")

    setData([...data, news])
}