import React, {useState} from "react"
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home"
import Despesas from "./screens/Despesas"
import Receitas from "./screens/Receitas"
import Dados from "./context/DadosContext"

// Cria a navegação
const Stack = createStackNavigator();

export default function() {
  const [receitas, setReceitas] = useState([])
  const [despesas, setDespesas] = useState([])
  const [investimentos, setInvestimentos] = useState([
        {nome: "Poupança", valor: 1000},
        {nome: "CDB", valor: 500},
        {nome: "Tesouro Direto", valor: 2000},
        {nome: "Ações", valor: 3000},
        {nome: "FII", valor: 1000},
  ])

  return(
    <Dados.Provider value={{receitas, setReceitas, despesas, setDespesas, investimentos, setInvestimentos}}>
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
    </Dados.Provider>
  )
}