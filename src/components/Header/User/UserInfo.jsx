import ViewRow from "../../ui/layouts/ViewRow";
import IconsAwesome from "../../../adapters/IconsAwesome";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../../../design/colors";

export default ({nome, conta}) => {
    return (
        <ViewRow>
            <ViewRow justify={"flex-start"} gap={15}>
                <View style={styles.iconPerfil}>
                    <IconsAwesome color={colors.primary} name="user-circle-o" style={styles.opacity} size={25} />
                </View>
                <View>
                    <Text style={styles.name}>{nome}</Text>
                    <Text style={styles.conta}>Conta {conta}</Text>
                </View>
            </ViewRow>

            <TouchableOpacity>
                <IconsAwesome color={colors.textLight} style={styles.opacity} name="gear" size={25} />
            </TouchableOpacity>
        </ViewRow>
    )
}

const styles = StyleSheet.create({
    iconPerfil: {
        backgroundColor: colors.bgLight,
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.textLight,
        textTransform: "uppercase"
    },
    conta: {
        color: colors.textLight,
        fontSize: 14,
        opacity: 0.8
    },
    opacity: {
        opacity: 0.8
    }
})