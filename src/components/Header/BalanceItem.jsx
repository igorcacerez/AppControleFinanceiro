import IconProfileImage from "./User/IconProfileImage";
import {Text, View, StyleSheet} from "react-native";
import ViewRow from "../ui/layouts/ViewRow";
import colors from "../../design/colors";
import spacings from "../../design/spacings";
import {moneyFormat} from "../../utils/money";

export default ({icon, title, value}) => {
    return (
        <ViewRow justify={"flex-start"} gap={10}>
            <IconProfileImage icon={icon} />
            <View>
                <Text style={styles.titulo}>{title}</Text>
                <Text style={styles.valor}>R$ {moneyFormat(value)}</Text>
            </View>
        </ViewRow>
    )
}

const styles = StyleSheet.create({
    titulo: {
        color: colors.textLight,
        fontWeight: "light",
        fontSize: spacings.medium
    },
    valor: {
        color: colors.textLight,
        fontSize: spacings.large,
        fontWeight: "bold",
        marginTop: -3
    }
})