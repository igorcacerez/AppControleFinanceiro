import React, {useContext, useState} from "react"
import {StyleSheet, View, Text, TextInput, Button, Modal, Pressable, Alert, ScrollView} from "react-native"
import Dados from "../context/FinanceContext"
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function({navigation}) {
  const {receitas, setReceitas} = useContext(Dados)

  const [nome, setNome] = useState("")
  const [valor, setValor] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  function cadastrar() {
    // Cria uma copia dos valores existente na receita
    let aux = [...receitas]

    if (nome === "" || valor === 0) {
      return Alert.alert("Os campos são obrigatórios")
    }

    // Adiciona mais um item a copia da receitas
    aux.push({
      nome: nome, 
      valor: valor
    })

    // Atualiza a receitas com o item adicionado
    setReceitas(aux)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "descricao_receita": nome,
      "valor": valor
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://10.92.3.84:5000/receita", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    // Manda para a home
    setModalVisible(!modalVisible)

    // Zera
    setNome("")
    setValor("")
  }

  function excluirReceita(index) {
    let aux = [...receitas];
    aux.splice(index, 1);
    setReceitas(aux);
  }

  return (
    <View style={css.container}>
      <View style={css.divTitulo}> 
        <Pressable style={{flexDirection: "row", gap: 5}} onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons name="chevron-left" size={30} color="#fff" />
          <Text style={css.titulo}>Receitas</Text>
        </Pressable>

        <Pressable
          style={[css.button, css.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={[css.textStyle, {color: "#000"}]}>+</Text>
        </Pressable>
      </View>

     <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={css.centeredView}>
          <View style={css.modalView}>
            <Text style={css.modalText}>Nova receita</Text>

            <View style={{width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "flex-start"}}>
              <Text style={{fontSize: 30, paddingLeft: 30, color: "#a39f9e"}}>R$</Text>
              <TextInput
                value={valor}
                onChangeText={(e) => setValor(e)}
                style={[css.input, {borderBottomWidth: 0, fontSize: 30}]}
                placeholder="00.00"
                keyboardType="numeric"
              />
            </View>

            <TextInput
              value={nome}
              onChangeText={(e) => setNome(e)}
              style={[css.input, {marginHorizontal: 30, width: "90%", borderTopWidth: 1}]}
              placeholder="Ex: Salário"
              keyboardType="default"
            />


            <Pressable
              style={[css.button, css.buttonClose]}
              onPress={cadastrar}>
              <Text style={css.textStyle}>Salvar Receita</Text>
            </Pressable>

            <Pressable
              style={[css.button, css.buttonClose, css.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={[css.textStyle, css.textStyleCancel]}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


      {receitas.length > 0 ? (
        <ScrollView style={css.tabela}>
          {receitas.map((dados, index) => (
            <View  key={dados.nome} style={css.card}>
              <View>
                <Text style={css.tituloCard}>{dados.nome}</Text>
                <Text style={css.valor}>R$ {parseFloat(dados.valor).toFixed(2)}</Text>
              </View>
              <Button
                title="Excluir"
                onPress={() => excluirReceita(index)}
                color="#bd3338"
              />
            </View>
          ))}
        </ScrollView>
      ) : (
        <Text style={css.valor}>Não possui receitas cadastradas.</Text>
      )}

  
    </View>
  )
}

const css = StyleSheet.create({
  tabela: {
    width: "100%",
  },
  card: {
    marginStart: "5%",
    marginBottom: 10,
    backgroundColor: 'white',
    width: "90%",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, 
  tituloCard: {
    fontSize: 15,
    color: "#a6a6a1",
    textTransform: "uppercase",
    paddingBottom: 6
  }, 
  valor: {
    fontSize: 19,
    fontWeight: "bold"
  },
  divTitulo: {
    backgroundColor: "#33bd86",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 50,
    paddingBottom: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "#edf2f2",
    gap: 30,
  },
  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  input: {
    height: 80,
    width: "100%",
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 20,
    borderColor: "#9e9d98"
  },

  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 37,
  },

  modalView: {
    marginTop: 30,
    width: "100%",
    flex: 1,
    backgroundColor: 'white',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#fff',
  },
  buttonClose: {
    backgroundColor: '#000',
    marginTop: 40,
    width: "90%"
  },
  buttonCancel: {
    backgroundColor: "#d6d6d4",
    marginTop: 20
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 5,
    fontSize: 15
  },
  textStyleCancel: {
    color: "#000"
  },
  modalText: {
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 27
  },
})