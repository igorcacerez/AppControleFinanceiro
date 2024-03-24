import {View, Text, ImageBackground, StyleSheet, TouchableOpacity, Alert} from "react-native";
import React, {useContext, useState} from "react";
import Input from "../adapters/Input";
import Logo from "../components/ui/utils/Logo";
import colors from "../design/colors";
import {Users} from "../context/UserContext";

export default ({ navigation }) => {
    const {login} = useContext(Users)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            await login(email, password)
            navigation.navigate("DrawerStack")
        } catch (e) {
            Alert.alert("Erro", e.message)
        }
    }
    
    return (
        <View style={{flex: 1}}>
            <ImageBackground resizeMode="cover" source={require("../../assets/login.png")} style={styles.image}>
                <Logo color={colors.primary} size={50} shadow={true} />

                <View style={styles.form}>
                    <Text style={styles.text}>Informe seus dados de login</Text>
                    <Input
                        label={"Seu e-mail"}
                        placeholder={"Ex: email@email.com"}
                        keyboardType={"email-address"}
                        value={email} change={setEmail} />

                    <Input
                        label={"Sua senha"}
                        placeholder={"Digite sua senha"}
                        secure={true}
                        value={password} change={setPassword} />

                    <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                        <Text style={{color: colors.textLight, textAlign: "right", fontSize: 18, fontWeight: "bold"}}>
                            Acessar conta
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate("Initial")}>
                        <Text style={{color: colors.textGray, textAlign: "center", fontSize: 16, marginTop: 20}}>
                            Já possui uma conta? <Text style={{color: colors.primary, fontWeight: "bold"}}>Clique aqui</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        width: "100%",
        gap: 20,
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding: 30,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: 30,
    },
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    text: {
        color: colors.textGray,
        fontSize: 19,
        textAlign: "center",
        letterSpacing: 0,
    },
    btn: {
        backgroundColor: colors.primary,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    }
})