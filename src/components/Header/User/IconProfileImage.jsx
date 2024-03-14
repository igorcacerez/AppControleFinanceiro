import Icons from "../../../adapters/Icons";
import colors from "../../../design/colors";
import {StyleSheet, View} from "react-native";

export default ({
    color = colors.primary,
    icon = "account-circle-outline",
    style = {}
}) => {
    return (
        <View style={[styles.iconPerfil, style]}>
            <Icons color={color} name={icon} style={styles.opacity} size={25} />
        </View>
    )
}

const styles = StyleSheet.create({
    iconPerfil: {
        backgroundColor: colors.bgLight,
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    }
})