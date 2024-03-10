import React from "react"
import AppNavigation from "./src/navigation/AppNavigation";
import {FinanceProvider} from "./src/context/FinanceContext";

/**
 * Aplicação principal
 * @returns {JSX.Element}
 */
export default function() {
  return(
      <FinanceProvider>
          <AppNavigation />
      </FinanceProvider>
  )
}