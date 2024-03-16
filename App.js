import React from "react"
import AppNavigation from "./src/navigation/AppNavigation";
import {FinanceProvider} from "./src/context/FinanceContext";
import {StatusBar} from "react-native";
import colors from "./src/design/colors";
import {ModalProvider} from "./src/context/ModalContext";
import { Provider as PaperProvider } from 'react-native-paper';
import {UserProvider} from "./src/context/UserContext";

/**
 * Aplicação principal
 * @returns {JSX.Element}
 */
export default function App() {
  return(
      <PaperProvider>
          <FinanceProvider>
              <ModalProvider>
                  <UserProvider>
                      <AppNavigation />
                      <StatusBar barStyle="light-content" backgroundColor={colors.primary} translucent={true} />
                  </UserProvider>
              </ModalProvider>
          </FinanceProvider>
      </PaperProvider>
  )
}