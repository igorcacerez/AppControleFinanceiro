import {createContext, useEffect, useState} from "react"
import FinanceService from "../services/FinanceService"
// Cria o contexto
const Finances = createContext();

const FinanceProvider = ({ children }) => {

    const [finance, setFinance] = useState([])

    useEffect(() => {
        FinanceService.loadFinances(setFinance)
    }, []);

    const addFinance = (item) => FinanceService.add(setFinance, finance, item)
    const getFinance = (tipe) => FinanceService.get(finance, tipe)
    const removeFinance = (index) => FinanceService.remove(setFinance, finance, index)
    const getBalanceFinance = () => FinanceService.getBalance(finance)

    return(
        <Finances.Provider value={{addFinance, getFinance, removeFinance, getBalanceFinance}}>
            {children}
        </Finances.Provider>
    )
}

export {Finances, FinanceProvider}