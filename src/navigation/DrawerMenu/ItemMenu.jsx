import ViewRow from "../../components/ui/layouts/ViewRow";
import Icons from "../../adapters/Icons";
import colors from "../../design/colors";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useContext} from "react";
import {Users} from "../../context/UserContext";

export default ({icon, text, screen, data = {}}) => {
    const navigation = useNavigation()
    const {addUser} = useContext(Users)

    async function handlePress() {
        if (text === "Sair") await addUser({})
        navigation.navigate(screen, data)
    }

    return (
        <TouchableOpacity onPress={handlePress} style={{marginBottom: 18}}>
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