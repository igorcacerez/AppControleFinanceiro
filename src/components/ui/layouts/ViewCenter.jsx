import {View} from "react-native";
import spacings from "../../../design/spacings";

export default ({style = {}, children}) => {
    return (
        <View style={[style, {padding: spacings.default}]}>
            {children}
        </View>
    )
}