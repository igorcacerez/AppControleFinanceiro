import ViewRow from "../../components/ui/layouts/ViewRow";
import Icons from "../../adapters/Icons";
import colors from "../../design/colors";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default ({icon, text, screen, data = {}}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate(screen, data)} style={{marginBottom: 18}}>
            <ViewRow justify={"flex-start"} gap={15}>
                <Icons name={icon} size={32} color={colors.text} />
                <Text style={styles.textItem}>{text}</Text>
            </ViewRow>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textItem: {
        color: colors.text,
        fontSize: 15,
        fontWeight: "light"
    }
})