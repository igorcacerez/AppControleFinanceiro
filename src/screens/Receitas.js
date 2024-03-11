import React, {useContext, useState} from "react"
import {StyleSheet, View, Text, TextInput, Button, Modal, Pressable, Alert, ScrollView} from "react-native"


export default function({navigation}) {

  return (
    <View style={css.container}>
      <Text style={{color: "#000", fontSize: 30}}>TESTANDO</Text>
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff",
    gap: 30,
  }
})