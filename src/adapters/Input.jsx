import colors from "../design/colors";
import {TextInput} from "react-native-paper";

export default ({label, placeholder, value, change, keyboardType}) => {
    return (
        <TextInput
            mode="outlined"
            label={label}
            placeholder={placeholder}
            value={value}
            onChangeText={change}
            keyboardType={keyboardType}
            theme={{ colors: { text: colors.text, background: "#fff"  } }}
            activeOutlineColor={colors.primary}
            textColor={colors.primary}
        />
    )
}