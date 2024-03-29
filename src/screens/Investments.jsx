import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Container from "../components/ui/layouts/Container";
import Header from "../components/Header";
import {useContext} from "react";
import {Users} from "../context/UserContext";
import ViewRow from "../components/ui/layouts/ViewRow";
import Icons from "../adapters/Icons";
import IconProfileImage from "../components/Header/User/IconProfileImage";
import colors from "../design/colors";
import {ProgressChart} from "react-native-chart-kit";

export default ({ navigation }) => {
    const {getUser, updateUser} = useContext(Users)
    let user = getUser()

    const data = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.4, 0.6, 0.8]
    };

    const width = Dimensions.get('window').width

    return (
        <Container>
            <Header profile={user} navigation={navigation} full={false}>
                <ViewRow style={{padding: 20}}>
                    <ViewRow gap={10} justify={"flex-start"}>
                        <IconProfileImage icon={"wallet-outline"} color={colors.primary} style={{backgroundColor: "#fff"}} />
                        <View>
                            <Text style={styles.textHeader}>Total investido</Text>
                            <Text style={[styles.valor, {color: colors.textLight}]}>R$ {user.visibleSaldo ? "3.450,00" : "********"}</Text>
                        </View>
                    </ViewRow>
                    <TouchableOpacity onPress={() => updateUser("visibleSaldo", !user.visibleSaldo )}>
                        <Icons name={user.visibleSaldo ? "eye" : "eye-off"} size={25} color={colors.textLight} />
                    </TouchableOpacity>
                </ViewRow>
            </Header>

            <ProgressChart
                data={data}
                width={width}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={{
                    backgroundColor: colors.textLight,
                    backgroundGradientFrom: colors.secundaryLight,
                    backgroundGradientTo: colors.secundaryLight,
                    color: (opacity = 1) => `rgba(20, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                }}
                hideLegend={false}
            />

            <ViewRow style={{flexWrap: "wrap", padding: 20}} gap={10}>
                <TouchableOpacity style={styles.card}>
                    <Text style={styles.textBar}>Renda fixa</Text>
                    <Text style={styles.valor}>R$ 2.000,00</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.textBar}>Ações</Text>
                    <Text style={styles.valor}>R$ 1.450,00</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.new}>
                    <Icons name={"plus"} size={50} color={colors.textGray} />
                </TouchableOpacity>
            </ViewRow>
        </Container>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "47%",
        padding: 20,
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "flex-start",
        borderWidth: 3,
        borderColor: colors.secundaryLight,
    },
    textHeader: {
        color: colors.textLight,
        fontSize: 12
    },
    textBar: {
        color: colors.textGray,
        fontSize: 12,
        paddingBottom: 5
    },
    valor: {
        color: colors.textGray,
        fontSize: 20,
        fontWeight: "bold"
    },
    new: {
        width: "47%",
        padding: 10,
        paddingVertical: 20,
        margin: 5,
        borderRadius: 15,
        backgroundColor: colors.secundaryLight,
        justifyContent: "center",
        alignItems: "center",
    }
})