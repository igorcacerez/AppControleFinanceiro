import Icons from "../../../adapters/Icons";
import colors from "../../../design/colors";
import {StyleSheet, View} from "react-native";

export default () => {
    return (
        <View style={styles.iconPerfil}>
            <Icons color={colors.primary} name="account-circle-outline" style={styles.opacity} size={25} />
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