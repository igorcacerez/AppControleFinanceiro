import {View, StyleSheet, ScrollView} from "react-native";
import colors from "../../../design/colors";

export default function Container({children, scroll = false, style = {}}) {
    return (
        {scroll} ? <ScrollView style={[{flex: 1, backgroundColor: colors.bgDefault}, style]}>{children}</ScrollView> :
            <View style={[styles.container, style]}>{children}</View>
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