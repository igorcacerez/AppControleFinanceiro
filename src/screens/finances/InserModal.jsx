import ViewCenter from "../../components/ui/layouts/ViewCenter";
import {Alert, Text, TouchableOpacity} from "react-native";
import DragModal from "../../components/ui/modals/DragModal";
import {useContext, useRef, useState} from "react";
import Input from "../../adapters/Input";
import ButtonLarge from "../../components/ui/buttons/ButtonLarge";
import {Modals} from "../../context/ModalContext";
import {TextInputMask} from "react-native-masked-text";
import * as React from "react";
import {moneyFormatToNumber} from "../../utils/money";

export default ({type, addAction, user}) => {
    const modalContext = useContext(Modals)

    const ref = useRef()
    const ref2 = useRef()

    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date().toLocaleDateString());
    const [value, setValue] = useState("");

    let title = type === "receita" ? "Adicionar receita" : "Adicionar despesa"

    const clear = () => {
        setName("")
        setDate("")
        setValue("")
    }

    const handleAdd = () => {
        try {
            let limparValor = moneyFormatToNumber(value)

            addAction({
                title: name,
                value: limparValor,
                type: type,
                date: date
            }, user)

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
                           value={date}
                           keyboardType={"numeric"}
                           render={(props) => (
                               <TextInputMask
                                   {...props}
                                   value={date}
                                   type="datetime"
                                   ref={ref}
                                   onChangeText={(text) => setDate(text)}
                               />
                           )}
                    />

                <Input label={"Valor da " + type}
                        placeholder={"Ex: 300.00"}
                        keyboardType={"numeric"}
                        value={value}
                        render={(props) => (
                           <TextInputMask
                               {...props}
                               value={value}
                               type="money"
                               ref={ref2}
                               onChangeText={(text) => setValue(text)}
                           />
                        )}
                />
            </ViewCenter>

            <ButtonLarge press={handleAdd} text={"Cadastrar"} icon={"plus"} />
        </DragModal>
    )
}