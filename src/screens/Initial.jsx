import {ImageBackground, StyleSheet, Text, View} from "react-native";
import Logo from "../components/ui/utils/Logo";
import colors from "../design/colors";
import ButtonIcon from "../components/ui/buttons/ButtonIcon";
import {Users} from "../context/UserContext";
import {useContext} from "react";
import * as LocalAuthentication from 'expo-local-authentication';
import RegisterModal from "./initial/RegisterModal";
import {Modals} from "../context/ModalContext";

export default ({ navigation }) => {
    const {getUser, addUser} = useContext(Users)
    const modalContext = useContext(Modals)

    let user = getUser()

    async function login(){
        let result = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autentique',
            cancelLabel: 'Cancelar',
            disableDeviceFallback: true,
        });

        if (result.success) navigation.navigate("DrawerStack")
    }

    return (
        <>
            <View style={{flex: 1}}>
                <ImageBackground resizeMode="cover" source={require("../../assets/fundo.png")} style={styles.image}>
                    <Logo color={colors.primary} size={50} shadow={true} />
                    <Text style={styles.text}>O seu aplicativo de {"\n"} controle financeiro.</Text>

                    {user?.name ? (
                        <ButtonIcon
                            icon={"account"}
                            title={"Acessar sua conta"}
                            text={"Seja bem-vindo devolta."}
                            press={login} />
                    ) : (
                        <ButtonIcon
                            icon={"account-plus"}
                            title={"Criar uma conta"}
                            text={"Nosso app é totalmente grátis."}
                            press={() => modalContext.onOpen()} />
                    )}
                </ImageBackground>
            </View>
            <RegisterModal navigation={navigation} saveUser={addUser} />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 40
    },
    text: {
        color: colors.textLight,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 0,
        marginVertical: 30
    }
})