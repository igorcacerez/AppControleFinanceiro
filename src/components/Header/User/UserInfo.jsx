import ViewRow from "../../ui/layouts/ViewRow";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "../../../design/colors";
import Icons from "../../../adapters/Icons";
import IconProfileImage from "./IconProfileImage";

export default ({ nome }) => {
    return (
        <ViewRow>
            <ViewRow justify={"flex-start"} gap={15}>
                <IconProfileImage />
                <View>
                    <Text style={styles.name}>{nome}</Text>
                    <Text style={styles.conta}>Controle suas despesas.</Text>
                </View>
            </ViewRow>
        </ViewRow>
    )
}

const styles = StyleSheet.create({
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