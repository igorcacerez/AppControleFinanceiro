import colors from "../../../design/colors";

export default function userBalanceStyle(exibir = true) {
    return {
        bg: {
            backgroundColor: colors.bgLight,
            borderRadius: 10,
            padding: 18,
            alignItems: "center",
            justifyContent: "center"
        },
        saldo: {
            fontSize: 18,
            fontWeight: "bold",
            color: colors.text,
            paddingRight: 12
        },
        rs: {
            fontSize: 15,
            fontWeight: "bold",
            color: exibir ? colors.primary : colors.secundaryLight
        },
        valor: {
            fontSize: 22,
            fontWeight: "bold",
            color: exibir ? colors.primary : colors.secundaryLight
        },
        exibe: {
            backgroundColor: exibir ? colors.bgLight : colors.secundaryLight,
            width: "70%",
            padding: 1,
            borderRadius: 5
        }
    }
}