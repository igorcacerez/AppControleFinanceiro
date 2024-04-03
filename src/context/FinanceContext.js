import {createContext, useEffect, useState} from "react"
import FinanceService from "../services/FinanceService"
// Cria o contexto
const Finances = createContext();

const FinanceProvider = ({ children }) => {
    const [finance, setFinance] = useState([])

    const addFinance = (item, user) => FinanceService.add(setFinance, finance, item, user)
    const getFinance = (tipe) => FinanceService.get(finance, tipe)
    const removeFinance = (index, user) => FinanceService.remove(setFinance, finance, index, user)
    const getBalanceFinance = () => FinanceService.getBalance(finance)
    const loadFinances = (user) => FinanceService.loadFinances(setFinance, user)

    return(
        <Finances.Provider value={{addFinance, getFinance, removeFinance, getBalanceFinance, loadFinances}}>
            {children}
        </Finances.Provider>
    )
}

export {Finances, FinanceProvider}