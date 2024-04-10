import React, {useState} from "react";
import {Platform, Pressable, Text} from "react-native";
import Input from "./Input";
import DateTimePicker from "@react-native-community/datetimepicker";

export default ({label, placeholder, date, setDate}) => {
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); // No iOS, podemos querer manter o picker aberto
        setDate(currentDate);
        // Oculta o DateTimePicker após a seleção da data
        if (Platform.OS === 'android') setShow(false);
    };

    return (
        <>
            <Pressable onPress={() => setShow(true)}>
                <Input
                    label={label}
                    placeholder={placeholder}
                    value={date.toLocaleDateString()}
                    change={setDate}
                    secure={false}
                    keyboardType={"default"}
                    editable={false}
                />
            </Pressable>

            {show && (
                <DateTimePicker
                    textColor="red"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    onTouchCancel={() => setShow(false)}
                />
            )}
        </>
    )
}