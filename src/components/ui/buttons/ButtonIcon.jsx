import ViewRow from "../layouts/ViewRow";
import IconProfileImage from "../../Header/User/IconProfileImage";
import colors from "../../../design/colors";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default ({press, icon, title, text}) => {
    return (
        <TouchableOpacity onPress={press} style={styles.btn}>
            <ViewRow gap={10}>
                <IconProfileImage icon={icon} style={{backgroundColor: "#0b92af"}} color={colors.textLight} />
                <View>
                    <Text style={styles.btnTitle}>{title}</Text>
                    <Text style={styles.btnTxt}>{text}</Text>
                </View>
            </ViewRow>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.blue,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 15
    },
    btnTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.textLight
    },
    btnTxt: {
        color: colors.textLight,
        fontSize: 12,
        opacity: 0.8,
        marginTop: -5
    },
})