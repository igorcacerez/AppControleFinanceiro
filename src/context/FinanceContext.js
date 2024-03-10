import {createContext, useState} from "react"
import FinanceService from "../services/FinanceService"

// Cria o contexto
const Finances = createContext();

const FinanceProvider = ({ children }) => {

    const [finance, setFinance] = useState([])

    const addFinance = (item) => FinanceService.add(setFinance, finance, item)
    const getFinance = (tipe) => FinanceService.get(finance, tipe)

    return(
        <Finances.Provider value={{addFinance, getFinance}}>
            {children}
        </Finances.Provider>
    )
}

export {Finances, FinanceProvider}