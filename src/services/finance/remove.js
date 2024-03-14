/**
 * Remove um item da lista de dados
 * @param setData
 * @param data
 * @param itemId
 * @returns {Promise<void>}
 */
export default async function remove(setData, data, itemId) {
    // Encontrar o índice do item com o id fornecido
    const index = data.findIndex(item => item.id === itemId);

    // Se o item não for encontrado, lança um erro
    if (index === -1) throw new Error("Item não encontrado" + itemId);

    let aux = [...data];
    aux.splice(index, 1);
    setData(aux)
}