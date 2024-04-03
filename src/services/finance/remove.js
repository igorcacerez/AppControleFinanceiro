import {setFinancesLocal} from "../../storage/financeStorage";
import updateDataBase from "./updateDataBase";

/**
 * Remove um item da lista de dados
 * @param setData
 * @param data
 * @param itemId
 * @param user
 * @returns {Promise<void>}
 */
export default async function remove(setData, data, itemId, user) {
    // Encontrar o índice do item com o id fornecido
    const index = data.findIndex(item => item.id === itemId);

    // Se o item não for encontrado, lança um erro
    if (index === -1) throw new Error("Item não encontrado" + itemId);

    let aux = [...data];
    aux.splice(index, 1);

    await updateDataBase(aux, user.uid)
    setData(aux)
}