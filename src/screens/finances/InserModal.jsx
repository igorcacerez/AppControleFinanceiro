import ViewCenter from "../../components/ui/layouts/ViewCenter";
import {Alert, Text, TouchableOpacity} from "react-native";
import DragModal from "../../components/ui/modals/DragModal";
import {useContext, useRef, useState} from "react";
import Input from "../../adapters/inputs/Input";
import ButtonLarge from "../../components/ui/buttons/ButtonLarge";
import {Modals} from "../../context/ModalContext";
import {TextInputMask} from "react-native-masked-text";
import * as React from "react";
import {moneyFormatToNumber} from "../../utils/money";
import InputDate from "../../adapters/inputs/InputDate";

export default ({type, addAction, user}) => {
    const modalContext = useContext(Modals)
    const ref = useRef()

    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date());
    const [value, setValue] = useState("");

    let title = type === "receita" ? "Adicionar receita" : "Adicionar despesa"

    const clear = () => {
        setName("")
        setDate(new Date())
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

                <InputDate
                    label={"Data da " + type}
                    date={date}
                    setDate={setDate}
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
                               ref={ref}
                               onChangeText={(text) => setValue(text)}
                           />
                        )}
                />
            </ViewCenter>

            <ButtonLarge press={handleAdd} text={"Cadastrar"} icon={"plus"} />
        </DragModal>
    )
}