import React from "react"
import AppNavigation from "./src/navigation/AppNavigation";
import {FinanceProvider} from "./src/context/FinanceContext";
import {StatusBar} from "react-native";
import colors from "./src/design/colors";
import {ModalProvider} from "./src/context/ModalContext";

import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';

/**
 * Aplicação principal
 * @returns {JSX.Element}
 */
export default function Main() {
  return(
      <PaperProvider>
          <FinanceProvider>
              <ModalProvider>
                  <AppNavigation />
                  <StatusBar barStyle="light-content" backgroundColor={colors.primary} translucent={true} />
              </ModalProvider>
          </FinanceProvider>
      </PaperProvider>
  )
}

AppRegistry.registerComponent(appName, () => Main);