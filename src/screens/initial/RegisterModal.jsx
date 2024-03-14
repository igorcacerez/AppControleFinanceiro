import ViewCenter from "../../components/ui/layouts/ViewCenter";
import Input from "../../adapters/Input";
import ButtonLarge from "../../components/ui/buttons/ButtonLarge";
import DragModal from "../../components/ui/modals/DragModal";
import {useState} from "react";
import {Alert} from "react-native";

export default ( { saveUser, navigation }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const handleAdd = () => {
        try {
            saveUser({name, phone, email})
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
                       value={phone} change={setPhone} keyboardType={"numeric"} />

                <Input label={"Seu e-mail"}
                       placeholder={"Ex: exemplo@email.com"}
                       keyboardType={"email-address"}
                       value={email} change={setEmail} />
            </ViewCenter>

            <ButtonLarge press={handleAdd} text={"Realizar cadastro"} icon={"plus"} />
        </DragModal>
    )
}