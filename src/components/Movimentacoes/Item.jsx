import ViewRow from "../ui/layouts/ViewRow";
import {StyleSheet, Text, View} from "react-native";
import colors from "../../design/colors";
import Icons from "../../adapters/Icons";
import {moneyFormat} from "../../utils/money";

export default function Item({type, date, value, title, icon = true, style = {}}) {

    let color = type === "despesa" ? colors.primary : colors.secondary;
    let colorSecundary = type === "despesa" ? colors.primaryLight : colors.secundaryLight;
    let iconType = type === "despesa" ? "chevron-double-down" : "chevron-double-up";

    return (
        <ViewRow style={[styles.cardItem, style]}>
            <ViewRow gap={10}>
                {icon && (
                    <View style={[styles.iconCardRound, {backgroundColor: colorSecundary}]}>
                        <Icons name={iconType} size={25} color={color} />
                    </View>
                )}
                <View>
                    <Text style={styles.cardTitle}>{title}</Text>
                    <Text style={styles.cardTitleTime}>{date}</Text>
                </View>
            </ViewRow>

            <Text style={[styles.cardValor, {color: color}]}>R$ {moneyFormat(value)}</Text>
        </ViewRow>
    )
}

const styles = StyleSheet.create({
    iconCardRound: {
        backgroundColor: colors.primaryLight,
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    cardItem: {
        padding: 15,
        backgroundColor: colors.bgLight,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderColor: colors.secundaryLight,
        width: "100%",
        marginVertical: 5
    },
    cardTitle: {
        color: colors.text,
        fontSize: 16,
        fontWeight: "500",
        textAlign: "left"
    },
    cardTitleTime: {
        color: colors.textGray,
        fontSize: 10,
        textAlign: "left"
    },
    cardValor: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: "500",
    }
})