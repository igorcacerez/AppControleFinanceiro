import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Icons from "../../adapters/Icons";
import colors from "../../design/colors";

export default ({icon, title, press}) => {
    return (
        <TouchableOpacity onPress={press} style={{justifyContent: "center", alignItems: "center"}}>
            <View style={styles.iconRound}>
                <Icons name={icon} size={30} color={colors.secondary} />
            </View>
            <Text style={styles.textIcon}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconRound: {
        backgroundColor: colors.secundaryLight,
        borderRadius: 50,
        width: 70,
        height: 70,
        alignItems: "center",
        justifyContent: "center"
    },
    textIcon: {
        color: colors.text,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: 5
    }
})