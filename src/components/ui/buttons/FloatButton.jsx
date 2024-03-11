import colors from "../../../design/colors";
import {FAB} from "react-native-paper";
import {StyleSheet} from "react-native";

export default ({
    icon = "plus",
    color = colors.textLight,
    bg = colors.primary,
    press
}) => {
    let fab = {
        position: 'absolute',
        backgroundColor: bg,
        margin: 16, right: 0, bottom: 0
    }
    return <FAB icon={icon} color={color} style={fab} onPress={press} />
}