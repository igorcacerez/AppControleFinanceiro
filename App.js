import React from "react"
import AppNavigation from "./src/navigation/AppNavigation";
import {FinanceProvider} from "./src/context/FinanceContext";
import {StatusBar} from "react-native";
import colors from "./src/design/colors";

/**
 * Aplicação principal
 * @returns {JSX.Element}
 */
export default function() {
  return(
      <FinanceProvider>
          <AppNavigation />
          <StatusBar barStyle="light-content" backgroundColor={colors.primary} translucent={true} />
      </FinanceProvider>
  )
}