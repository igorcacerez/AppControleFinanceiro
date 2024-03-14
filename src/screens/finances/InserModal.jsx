import ViewCenter from "../../components/ui/layouts/ViewCenter";
import {Alert, Text, TouchableOpacity} from "react-native";
import DragModal from "../../components/ui/modals/DragModal";
import {useContext, useState} from "react";
import Input from "../../adapters/Input";
import ButtonLarge from "../../components/ui/buttons/ButtonLarge";
import {Modals} from "../../context/ModalContext";

export default ({type, addAction, id}) => {
    const modalContext = useContext(Modals)

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [value, setValue] = useState("");

    let title = type === "receita" ? "Adicionar receita" : "Adicionar despesa"

    const clear = () => {
        setName("")
        setDate("")
        setValue("")
    }

    const handleAdd = () => {
        try {
            addAction({
                id, date, type,
                title: name,
                value: parseFloat(value)
            })
            modalContext.onClose()
            clear()
        } catch (e) {
            Alert.alert("Erro", e.message)
        }
    }

    return (
        <DragModal title={title}>
            <ViewCenter style={{gap: 25, paddingBottom: 40}}>
                <Input label={"Nome da " + type}
                       placeholder={"Ex: Salário ou Aluguel"}
                       value={name} change={setName} />

                <Input label={"Data da " + type}
                          placeholder={"Ex: 01/01/2021"}
                          value={date} change={setDate} />

                <Input label={"Valor da " + type}
                        placeholder={"Ex: 300.00"}
                        keyboardType={"numeric"}
                        value={value} change={setValue} />
            </ViewCenter>

            <ButtonLarge press={handleAdd} text={"Cadastrar"} icon={"plus"} />
        </DragModal>
    )
}