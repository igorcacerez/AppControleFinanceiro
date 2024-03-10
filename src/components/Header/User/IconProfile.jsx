import {StyleSheet, Text, TouchableOpacity} from "react-native";
import colors from "../../../design/colors";

export default ({profile}) => {
    return (
        <TouchableOpacity style={styles.iconHeaderPerfil}>
            <Text style={styles.iconHeaderPerfilText}>{profile}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconHeaderPerfil: {
        backgroundColor: colors.bgLight,
        borderRadius: 50,
        width: 30,
        height: 30
    },
    iconHeaderPerfilText: {
        color: colors.primary,
        textAlign: "center",
        lineHeight: 30
    },
})