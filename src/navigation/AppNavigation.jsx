import React from "react"
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/Home"
import Despesas from "../screens/Despesas"
import Receitas from "../screens/Receitas"

// Cria a navegação
const Stack = createStackNavigator();

/**
 * Navegação da aplicação
 * @returns {JSX.Element}
 */
export default function() {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
                initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Despesas" component={Despesas} />
                <Stack.Screen name="Receitas" component={Receitas} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}