import React from "react";
import {Pressable, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {Finances} from "../context/FinanceContext";
import Container from "../components/ui/layouts/Container";
import colors from "../design/colors";
import Icons from "../adapters/Icons";
import Header from "../components/Header";

export default function Home({ navigation }) {
  let  profile = {
      name: "Igor C. Albino",
      slug: "IA",
      balance: 0,
      conta: "550126-4"
  }

  return (
    <Container>
        <Header navigation={navigation} profile={profile} />
    </Container>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        width: "100%",
        padding: 10,
        paddingTop: 40
    },
    iconHeaderPerfil: {
        backgroundColor: colors.bgLight,
        borderRadius: 50,
        width: 30,
        height: 30
    },
    iconHeaderPerfilText: {
        color: colors.primary,
        textAlign: "center",
        lineHeight: 30
    },
    logo: {
        fontSize: 30,
        color: colors.textLight,
        marginLeft: 20
    }
})
