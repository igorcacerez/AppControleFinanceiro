import {Text, StyleSheet, ScrollView, View} from "react-native";
import ViewRow from "../../components/ui/layouts/ViewRow";
import IconProfileImage from "../../components/Header/User/IconProfileImage";
import colors from "../../design/colors";
import ItemMenu from "./ItemMenu";
import {getSalutation} from "../../utils/salutation";
import {Users} from "../../context/UserContext";
import {useContext} from "react";

export default () => {
    const {getUser} = useContext(Users)
    let user = getUser()
    let fristName = user.name.split(" ")[0]

    return (
        <View style={{flex: 1}}>
            <ViewRow style={css.header} justify={"flex-start"} gap={10}>
                <IconProfileImage />
                <Text style={css.saudacao}>{getSalutation()}, {fristName}</Text>
            </ViewRow>

            <ScrollView style={css.scroll}>
                <ItemMenu screen={"Home"} icon={"view-dashboard"} text={"Dashboard"} />
                <ItemMenu screen={"Finance"} data={{type: "receita"}} icon={"cash-multiple"} text={"Minhas Receitas"} />
                <ItemMenu screen={"Finance"} data={{type: "despesa"}} icon={"currency-usd"} text={"Minhas Despesas"} />
                <ItemMenu screen={"Investments"} icon={"chart-box-outline"} text={"Investimentos"} />
                <ItemMenu screen={"Initial"} icon={"logout"} text={"Sair"} />
            </ScrollView>
        </View>
    )
}

const css = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        paddingTop: 50,
        paddingHorizontal: 10,
        paddingBottom: 10
    },
    saudacao: {
        color: colors.textLight,
        fontSize: 18
    },
    scroll: {
        flex: 1,
        padding: 15,
        paddingTop: 22
    }
})