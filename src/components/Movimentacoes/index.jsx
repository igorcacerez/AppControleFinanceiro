import {StyleSheet, Text, View} from "react-native";
import ViewCenter from "../ui/layouts/ViewCenter";
import ViewRow from "../ui/layouts/ViewRow";
import colors from "../../design/colors";
import Icons from "../../adapters/Icons";
import TitleBox from "../ui/texts/TitleBox";
import Item from "./Item";

export default ({ data }) => {
    return (
        <View style={styles.card}>
            <TitleBox>Últimas movimentações</TitleBox>

            <ViewCenter>
                { data.length > 0 ?
                    data.map((item, index) => <Item key={index} type={item.type} title={item.title} date={item.date} value={item.value} />)
                    : <Text style={styles.text}>Você não possui movimentações</Text>}
            </ViewCenter>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.bgLight,
        paddingVertical: 20,
        alignItems: "center",
    },
    text: {
        color: colors.text,
        fontSize: 17,
        paddingTop: 20
    }
})