import React from "react"
import AppNavigation from "./src/navigation/AppNavigation";
import {FinanceProvider} from "./src/context/FinanceContext";
import {StatusBar} from "react-native";
import colors from "./src/design/colors";
import {ModalProvider} from "./src/context/ModalContext";

/**
 * Aplicação principal
 * @returns {JSX.Element}
 */
export default function() {
  return(
      <FinanceProvider>
          <ModalProvider>
              <AppNavigation />
              <StatusBar barStyle="light-content" backgroundColor={colors.primary} translucent={true} />
          </ModalProvider>
      </FinanceProvider>
  )
}