import {StyleSheet, Text, TouchableOpacity} from "react-native";
import Icons from "../../../adapters/Icons";
import colors from "../../../design/colors";

export default function({text, icon, press}) {
    return (
        <TouchableOpacity onPress={press} style={styles.btn}>
            <Text style={styles.txtBtn}>{text}</Text>
            {icon && <Icons name={icon} size={20} color={colors.textGray} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.secundaryLight,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10
    },
    txtBtn: {
        color: colors.textGray,
        fontSize: 16,
        fontWeight: "500"
    }
})