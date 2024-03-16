/** Retorna o balanço das receitas e despesas
 * @param {Array} data
 * @returns {{receitas: number, despesas: number}}
 */
export default function getBalance(data) {
    if (!data || data.length === 0) return {receitas: 0, despesas: 0, saldo: 0}

    let receitas = data.filter(item => item.type === "receita") || []
    let despesas = data.filter(item => item.type === "despesa") || []

    let totalReceitas = receitas.reduce((acc, item) => acc + item.value, 0) || 0
    let totalDespesas = despesas.reduce((acc, item) => acc + item.value, 0) || 0

    return {
        receitas: totalReceitas,
        despesas: totalDespesas,
        saldo: (totalReceitas - totalDespesas)
    }
}