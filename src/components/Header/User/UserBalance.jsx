import ViewRow from "../../ui/layouts/ViewRow";
import {Text, TouchableOpacity} from "react-native";
import Icons from "../../../adapters/Icons";
import colors from "../../../design/colors";
import {useContext, useEffect, useState} from "react";
import userBalanceStyle from "./UserBalanceStyle";
import {moneyFormat} from "../../../utils/money";
import {Users} from "../../../context/UserContext";

export default ({saldo}) => {
    const { getUser, updateUser } = useContext(Users)
    let user = getUser()

    let styles = userBalanceStyle(user.visibleSaldo)

    return (
        <ViewRow style={styles.bg}>
            <ViewRow justify={"flex-start"}>
                <Text style={styles.saldo}>Saldo</Text>
                <ViewRow gap={5} justify={"flex-start"} style={styles.exibe}>
                    <Text style={styles.rs}>R$</Text>
                    <Text style={styles.valor}>{moneyFormat(saldo)}</Text>
                </ViewRow>
            </ViewRow>

            <TouchableOpacity onPress={() => updateUser("visibleSaldo", !user.visibleSaldo)}>
                {user.visibleSaldo ?
                    <Icons name="eye-outline" size={20} color={colors.secondary} /> :
                    <Icons name="eye-off-outline" size={20} color={colors.secondary} />}
            </TouchableOpacity>
        </ViewRow>
    )
}