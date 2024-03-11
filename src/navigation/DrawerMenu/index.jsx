import {Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import ViewRow from "../../components/ui/layouts/ViewRow";
import IconProfileImage from "../../components/Header/User/IconProfileImage";
import Container from "../../components/ui/layouts/Container";
import colors from "../../design/colors";
import ItemMenu from "./ItemMenu";
import {getSalutation} from "../../utils/salutation";

export default () => {
    return (
        <Container>
            <ViewRow style={css.header} justify={"flex-start"} gap={10}>
                <IconProfileImage />
                <Text style={css.saudacao}>{getSalutation()}, Igor</Text>
            </ViewRow>

            <ScrollView style={css.scroll}>
                <ItemMenu screen={"Home"} icon={"view-dashboard"} text={"Dashboard"} />
                <ItemMenu screen={"Receitas"} icon={"cash-multiple"} text={"Minhas Receitas"} />
                <ItemMenu screen={"Despesas"} icon={"currency-usd"} text={"Minhas Despesas"} />
                <ItemMenu screen={"Investimentos"} icon={"chart-box-outline"} text={"Investimentos"} />
            </ScrollView>
        </Container>
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