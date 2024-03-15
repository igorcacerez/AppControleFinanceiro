import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Container from "../components/ui/layouts/Container";
import Header from "../components/Header";
import {useContext} from "react";
import {Users} from "../context/UserContext";
import ViewRow from "../components/ui/layouts/ViewRow";
import Icons from "../adapters/Icons";
import IconProfileImage from "../components/Header/User/IconProfileImage";
import colors from "../design/colors";

export default ({ navigation }) => {
    const {getUser, updateUser} = useContext(Users)
    let user = getUser()

    return (
        <Container>
            <Header profile={user} navigation={navigation} full={false}>
                <ViewRow style={{padding: 20}}>
                    <ViewRow gap={10} justify={"flex-start"}>
                        <IconProfileImage icon={"wallet-outline"} color={colors.primary} style={{backgroundColor: "#fff"}} />
                        <View>
                            <Text style={styles.textBar}>Total investido</Text>
                            <Text style={styles.valor}>R$ {user.visibleSaldo ? "3.450,00" : "********"}</Text>
                        </View>
                    </ViewRow>
                    <TouchableOpacity onPress={() => updateUser("visibleSaldo", !user.visibleSaldo )}>
                        <Icons name={user.visibleSaldo ? "eye" : "eye-off"} size={25} color={colors.textLight} />
                    </TouchableOpacity>
                </ViewRow>
            </Header>
        </Container>
    )
}

const styles = StyleSheet.create({
    textBar: {
        color: colors.textLight,
        fontSize: 12
    },
    valor: {
        color: colors.textLight,
        fontSize: 20,
        fontWeight: "bold"
    }
})