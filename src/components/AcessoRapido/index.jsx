import {StyleSheet, Text} from "react-native";
import ViewRow from "../ui/layouts/ViewRow";
import colors from "../../design/colors";
import CardShadow from "../ui/cards/CardShadow";
import ButtonIconRound from "./ButtonIconRound";
import spacings from "../../design/spacings";

export default ({ navigation, title }) => {
    return (
        <CardShadow>
            {title && <Text style={styles.titulo}>{title}</Text>}
            <ViewRow style={{flexWrap: "wrap"}} gap={10}>
                <ButtonIconRound
                    icon="cash-multiple"
                    title="Receitas"
                    press={() => navigation.navigate("Receitas")} />

                <ButtonIconRound
                    icon="currency-usd"
                    title="Depesas"
                    press={() => navigation.navigate("Despesas")} />

                <ButtonIconRound
                    icon="chart-box-outline"
                    title="Invest"
                    press={() => navigation.navigate("Investimentos")} />
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