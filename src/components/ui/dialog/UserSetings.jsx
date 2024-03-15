import * as React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Dialog from "../../../adapters/dialog/Dialog";
import Input from "../../../adapters/Input";
import {useContext, useState} from "react";
import {Users} from "../../../context/UserContext";
import ButtonLarge from "../buttons/ButtonLarge";

const UserSetings = ({visible, setVisible}) => {
    const {getUser, addUser} = useContext(Users)
    let user = getUser()

    const [name, setName] = useState(user.name)
    const [phone, setPhone] = useState(user.phone);
    const [email, setEmail] = useState(user.email);

    const handleUpdateUser = () => {
        try {
            addUser({name, phone, email})
            setVisible(false)
        } catch (e) {
            Alert.alert("Erro", e.message)
        }
    }

    const hideDialog = () => setVisible(false);

    return (
        <Dialog title={"Minhas informações"} styleTitle={styles.title} visible={visible} setVisible={setVisible}>
           <View style={{gap: 30}}>
               <Input label={"Seu Nome"}
                      value={name} change={setName}
                      placeholder={"Nome"} />

               <Input label={"Seu E-mail"}
                      value={email} change={setEmail}
                      placeholder={"E-mail"} />

               <Input label={"Seu Celular"}
                      keyboardType={"email-address"}
                      value={phone} change={setPhone}
                      placeholder={"Celular"} />

               <ButtonLarge press={handleUpdateUser} text={"Alterar Informações"} icon={""} />
           </View>
        </Dialog>
    );
};

const styles = StyleSheet.create({
    title: {
        paddingVertical: 20,
        textAlign: "center",
        fontSize: 25
    },
})

export default UserSetings;