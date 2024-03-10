import {View} from "react-native";

export default ({
    justify = "space-between",
    align = "center",
    gap = 0,
    style = {},
    children
}) => {
    return (
        <View style={[style, {flexDirection: "row", justifyContent: justify, gap: gap, alignItems: align}]}>
            {children}
        </View>
    )
}