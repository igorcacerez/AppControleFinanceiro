import ViewCenter from "../../components/ui/layouts/ViewCenter";
import Input from "../../adapters/Input";
import ButtonLarge from "../../components/ui/buttons/ButtonLarge";
import DragModal from "../../components/ui/modals/DragModal";
import {useContext, useRef, useState} from "react";
import {Alert} from "react-native";
import {TextInputMask} from "react-native-masked-text";
import * as React from "react";
import {Users} from "../../context/UserContext";

export default ( { saveUser, navigation }) => {
    const {createUser} = useContext(Users)
    const ref = useRef();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleAdd(){
        try {
            await createUser({name, phone, email, password})
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

                <Input label={"Seu telefone"}
                       placeholder={"Ex: (11) 99999-9999"}
                       render={(props) => (
                           <TextInputMask
                               {...props}
                               value={phone}
                               type="cel-phone"
                               ref={ref}
                               onChangeText={(text) => setPhone(text)}
                           />
                       )}
                       value={phone}  keyboardType={"numeric"} />

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