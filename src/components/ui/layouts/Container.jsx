import {View, StyleSheet} from "react-native";
import colors from "../../../design/colors";

export default function Container({children}) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgDefault,
        justifyContent: "flex-start",
        alignItems: "center"
    }
})