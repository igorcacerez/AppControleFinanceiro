import React from "react"
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/Home"
import DrawerMenu from "./DrawerMenu";
import FinanceScreen from "../screens/finances/FinanceScreen";

// Cria a navegação
const Drawer = createDrawerNavigator()

/**
 * Navegação da aplicação
 * @returns {JSX.Element}
 */
export default function() {
    return(
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <DrawerMenu {...props} />}
                screenOptions={{headerShown: false}}
                initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Finance" component={FinanceScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}