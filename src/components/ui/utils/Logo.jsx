import {StyleSheet, Text} from "react-native";
import colors from "../../../design/colors";

export default ({size = 30, color = colors.textLight, shadow = false}) => {
    let logo = {
        fontSize: size,
        fontWeight: "bold",
        letterSpacing: -2,
        color: color
    }

    if (shadow) {
        logo.textShadowColor = colors.shadow
        logo.textShadowOffset = {width: 1, height: 1}
        logo.textShadowRadius = 10
    }

    return <Text style={logo}>invest</Text>
}