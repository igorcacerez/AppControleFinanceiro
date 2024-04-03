import {StyleSheet, Text} from "react-native";
import ViewRow from "../ui/layouts/ViewRow";
import colors from "../../design/colors";
import CardShadow from "../ui/cards/CardShadow";
import ButtonIconRound from "./ButtonIconRound";
import spacings from "../../design/spacings";
import {useContext} from "react";
import {Users} from "../../context/UserContext";

export default ({ navigation, title }) => {
    const {addUser} = useContext(Users)

    const logout = async () => {
        await addUser({})
        navigation.navigate("Initial")
    }

    return (
        <CardShadow>
            {title && <Text style={styles.titulo}>{title}</Text>}
            <ViewRow style={{flexWrap: "wrap"}} gap={10}>
                <ButtonIconRound
                    icon="cash-multiple"
                    title="Receitas"
                    press={() => navigation.navigate("Finance", {type: "receita"})} />

                <ButtonIconRound
                    icon="currency-usd"
                    title="Depesas"
                    press={() => navigation.navigate("Finance", {type: "despesa"})} />

                {/*<ButtonIconRound*/}
                {/*    icon="chart-box-outline"*/}
                {/*    title="Invest"*/}
                {/*    press={() => navigation.navigate("Investments")} />*/}

                <ButtonIconRound
                    icon="login-variant"
                    title="Sair"
                    press={logout} />
            </ViewRow>
        </CardShadow>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.text,
        textAlign: "center",
        paddingBottom: spacings.xlarge
    }
})