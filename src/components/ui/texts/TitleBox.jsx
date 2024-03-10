import {StyleSheet, Text} from "react-native";
import colors from "../../../design/colors";

export default ({style = {}, children}) => {
    return <Text style={[styles.title, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        color: colors.textGray,
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: colors.secundaryLight,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 5
    }
})