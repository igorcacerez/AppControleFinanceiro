import {Text, View, StyleSheet} from "react-native";
import colors from "../../../design/colors";
import {Modalize} from "react-native-modalize";
import {useContext} from "react";
import {Modals} from "../../../context/ModalContext";

/**
 * Modal com drag
 * @param {string} title
 * @param children
 * @returns {JSX.Element}
 */
export default ({ title, children }) => {
    const modalContext = useContext(Modals)

    return (
        <Modalize ref={modalContext.modalizeRef} adjustToContentHeight={true}>
            {title && (
                <View style={styles.titleCard}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            )}

            {children}
        </Modalize>
    )
}

const styles = StyleSheet.create({
    titleCard: {
        backgroundColor: colors.primary,
        padding: 20,
        borderTopEndRadius: 12,
        borderTopStartRadius: 12
    },
    title: {
        color: colors.textLight,
        fontSize: 20
    }
})