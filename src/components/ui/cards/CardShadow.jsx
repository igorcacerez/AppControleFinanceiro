import {StyleSheet, View} from "react-native";
import colors from "../../../design/colors";
import spacings from "../../../design/spacings";

export default ({style = {}, children}) => {
    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.bgLight,
        padding: spacings.large,
        borderRadius: spacings.small,
        marginVertical: spacings.small,
        elevation: 1,
        shadowColor: colors.secondary,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 3.84
    }
})