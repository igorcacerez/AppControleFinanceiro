import {setFinancesLocal} from "../../storage/financeStorage";

/**
 * Adiciona um item a lista de dados
 * @param {useState} setData
 * @param {useState} data
 * @param {Object} news
 */
export default function add(setData, data, news) {
    if (news?.title === "" || news?.value === 0 || news?.date === "")
        throw new Error("Os campos são obrigatórios")

    if(news?.type !== "receita" && news?.type !== "despesa" )
        throw new Error("Tipo inválido")

    setFinancesLocal([...data, news])
    setData([...data, news])
}