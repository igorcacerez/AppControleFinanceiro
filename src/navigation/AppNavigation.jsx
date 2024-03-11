import React from "react"
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/Home"
import Despesas from "../screens/Despesas"
import Receitas from "../screens/Receitas"
import DrawerMenu from "./DrawerMenu";

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
                <Drawer.Screen name="Despesas" component={Despesas} />
                <Drawer.Screen name="Receitas" component={Receitas} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}