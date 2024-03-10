import {StyleSheet, Text} from "react-native";
import colors from "../../../design/colors";

export default () => <Text style={styles.logo}>bank</Text>

const styles = StyleSheet.create({
    logo: {
        fontSize: 30,
        fontWeight: "bold",
        letterSpacing: -2,
        color: colors.textLight,
        marginLeft: 20
    }
})