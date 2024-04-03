import ViewCenter from "../../components/ui/layouts/ViewCenter";
import Input from "../../adapters/Input";
import ButtonLarge from "../../components/ui/buttons/ButtonLarge";
import DragModal from "../../components/ui/modals/DragModal";
import {useContext, useState} from "react";
import {Alert} from "react-native";
import * as React from "react";
import {Users} from "../../context/UserContext";

export default ( { saveUser, navigation }) => {
    const {createUser} = useContext(Users)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleAdd(){
        try {
            await createUser({name, email, password})
            navigation.navigate("DrawerStack")
        } catch (e) {
            Alert.alert("Erro", e.message)
        }
    }

    return (
        <DragModal title={"Crie sua conta"}>
            <ViewCenter style={{gap: 25, paddingBottom: 40}}>
                <Input label={"Seu nome"}
                       placeholder={"Nome completo"}
                       value={name} change={setName} />

                <Input label={"Seu e-mail"}
                       placeholder={"Ex: exemplo@email.com"}
                       keyboardType={"email-address"}
                       value={email} change={setEmail} />

                <Input
                    label={"Sua senha"}
                    placeholder={"Digite sua senha"}
                    secure={true}
                    value={password} change={setPassword} />
            </ViewCenter>

            <ButtonLarge press={handleAdd} text={"Realizar cadastro"} icon={"plus"} />
        </DragModal>
    )
}