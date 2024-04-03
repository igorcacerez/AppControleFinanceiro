import {ScrollView, StyleSheet, Text, View} from "react-native";
import ViewCenter from "../ui/layouts/ViewCenter";
import ViewRow from "../ui/layouts/ViewRow";
import colors from "../../design/colors";
import Icons from "../../adapters/Icons";
import TitleBox from "../ui/texts/TitleBox";
import Item from "./Item";

export default ({ data, title, pb = 0, limit}) => {

    const listaItem = () => {
        // Verifica se existe movimentações
        if (data.length <= 0 || !Array.isArray(data)) return <Text style={styles.text}>Você não possui movimentações</Text>

        // Limita a quantidade de itens a serem exibidos
        if (limit) data = data.slice(0, limit)
        return data.map((item, index) => <Item key={index} type={item.type} title={item.title} date={item.date} value={item.value} />)
    }

    return (
        <View style={[styles.card, {paddingBottom: pb}]}>
            {title && <TitleBox>{title}</TitleBox>}
            <ViewCenter>{listaItem()}</ViewCenter>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.bgLight,
        paddingVertical: 20,
        alignItems: "center",
        flex: 1
    },
    text: {
        color: colors.text,
        fontSize: 17,
        paddingTop: 20
    }
})