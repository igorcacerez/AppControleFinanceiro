import {StyleSheet, View} from "react-native";
import colors from "../../design/colors";
import TopBar from "./TopBar";
import UserInfo from "./User/UserInfo";
import UserBalance from "./User/UserBalance";

export default ({profile, navigation}) => {
    return (
        <View style={styles.header}>
            <TopBar navigation={navigation} profile={profile.slug} />
            <View style={{padding: 20, paddingTop: 30, gap: 30}}>
                <UserInfo nome={profile.name} conta={profile.conta} />
                <UserBalance saldo={profile.balance} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.primary,
        width: "100%",
        padding: 10,
        paddingTop: 40
    }
})