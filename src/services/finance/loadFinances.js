import {getFinancesLocal} from "../../storage/financeStorage";

export default async function loadFinances(setFinance) {
    const finances = await getFinancesLocal();
    let save =  finances || [];
    setFinance(save);
}