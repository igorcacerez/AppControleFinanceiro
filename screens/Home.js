import React, {useContext} from "react"
import {StyleSheet, View, Text, TouchableOpacity, Image, ScrollView} from "react-native"
import Dados from "../context/DadosContext"

export default function({ navigation }) {
  const {receitas, despesas, investimentos} = useContext(Dados)

  let totalDespesas = despesas.reduce((soma, item) => soma + parseInt(item.valor), 0)
  let totalReceitas = receitas.reduce((soma, item) => soma + parseInt(item.valor), 0)

  return(
    <View style={css.container}>
      <View style={css.cardGeral}>
        <View style={css.geral}>
          <Text style={css.textoGeral}>Saldo total</Text>
          <Text style={css.valorGeral}>
            R$ {parseFloat(totalReceitas - totalDespesas).toFixed(2)}
          </Text>
        </View>

        <View style={css.valores}>
          <View style={css.card}>
            <Image style={{width: 25, height: 25}} source={require('../assets/baixo.png')} />
            <View>
              <Text style={css.cardText}>Despesas</Text>
              <Text style={[css.cardValor, {color: "#c41f10"}]}>
                R$ {totalDespesas.toFixed(2)}
              </Text>
            </View>
          </View>

          <View style={css.card}>
            <Image style={{width: 25, height: 25}} source={require('../assets/cima.png')} />
            <View>
              <Text style={css.cardText}>Receitas</Text>
              <Text style={[css.cardValor, {color: "#10c452"}]}>
                R$ {totalReceitas.toFixed(2)}
              </Text>
            </View>
          </View>

        </View>
      </View>


      <View style={css.divBtns}>
        <TouchableOpacity
          style={{backgroundColor: "#bd3338", padding: 20, borderRadius: 20}} 
          onPress={() => navigation.navigate("Despesas")}>
            <Text style={css.txtBtn}>Minhas Despesas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{backgroundColor: "#33bd86", padding: 20, borderRadius: 20}}
          onPress={() => navigation.navigate("Receitas")}>
            <Text style={css.txtBtn}>Minhas Receitas</Text>
        </TouchableOpacity>
      </View>

      <View style={{width: "90%", flex: 1, marginTop: 20}}>
        <Text style={css.tituloInvestimentos}>
          Investimentos
        </Text>

        <ScrollView style={{gap: 20}} horizontal={true} showsHorizontalScrollIndicator={false}>
          {investimentos.map((item, index) => (
              <TouchableOpacity key={index} style={css.cardInvestimento}>
                <Text style={{color: "#828e94", fontSize: 12, paddingBottom: 5}}>{item.nome}</Text>
                <Text style={{color: "#2c2b2b", fontSize: 20, fontWeight: "bold"}}>R$ {parseFloat(item.valor).toFixed(2)}</Text>
              </TouchableOpacity>
           ))
          }

          <TouchableOpacity style={css.addInvestimento}>
            <Text style={css.txtAddInvestimento}>+</Text>
          </TouchableOpacity>


        </ScrollView>
      </View>

      <View style={{width: "100%", flex: 1, justifyContent: "flex-end"}}>
        <Image style={{width: "100%", height: 200}} source={require('../assets/bg.png')} />
      </View>

    </View>
  )
}

const css = StyleSheet.create({
  cardInvestimento: {
    backgroundColor: "#fff",
    height: 80,
    borderRadius: 20,
    marginRight: 15,
    padding: 13,
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  tituloInvestimentos: {
    color: "#828e94",
    fontSize: 17,
    textAlign: "left",
    paddingBottom: 15
  },
  addInvestimento: {
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#828e94",
    borderRadius: 20,
    width: 100,
    height: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  txtAddInvestimento: {
    color: "#828e94",
    fontSize: 40
  },
  txtBtn: {
    color: "#fff"
  },
  divBtns: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 18
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 30,
    backgroundColor: "#edf2f2",
  },
  cardGeral: {
    backgroundColor: "#fff",
    width: "100%",
    paddingTop: 30,
    borderRadius: 30
  },
  geral: {
    alignItems: "center",
    paddingTop: 40
  }, 
  valores: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  card: {
    textAlign: "center",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  cardText: {
    color: "#828e94",
    fontSize: 13
  },
  cardValor: {
    color: "#000",
    fontSize: 22
  }, 
  textoGeral: {
    color: "#000",
    fontSize: 14
  },
  valorGeral: {
    fontSize: 32
  }
})