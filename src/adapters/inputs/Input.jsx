import colors from "../../design/colors";
import {TextInput} from "react-native-paper";

export default ({
                    label,
                    placeholder,
                    value,
                    change,
                    keyboardType="default",
                    render,
                    secure,
                    editable
}) => {
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
            secureTextEntry={secure}
            render={render}
            editable={editable}
        />
    )
}