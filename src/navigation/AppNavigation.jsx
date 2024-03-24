import React from "react"
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "../screens/Home"
import DrawerMenu from "./DrawerMenu";
import FinanceScreen from "../screens/finances/FinanceScreen";
import Initial from "../screens/Initial";
import {CardStyleInterpolators, createStackNavigator} from "@react-navigation/stack";
import Investments from "../screens/Investments";
import Login from "../screens/Login";

// Cria a navegação
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()


const DrawerStack = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerMenu {...props} />}
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Finance" component={FinanceScreen} />
            <Drawer.Screen name={"Investments"} component={Investments} />
        </Drawer.Navigator>
    )
}

export default function() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }} initialRouteName="Initial">
                <Stack.Screen name={"Initial"} component={Initial} />
                <Stack.Screen name={"Login"} component={Login} />
                <Stack.Screen name={"DrawerStack"} component={DrawerStack} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}