import ListItem from "../../components/ui/lists/ListDragButton";
import {FlatList, StyleSheet, View, Text} from "react-native";
import TitleBox from "../../components/ui/texts/TitleBox";
import colors from "../../design/colors";

export default ({title, data, not = "Você não possui movimentações", remove}) => {
    return (
        <View style={styles.card}>
            <TitleBox>{title}</TitleBox>

            {data.length > 0 ? (
                <FlatList data={data} keyExtractor={item => item.id}
                          renderItem={({ item }) => (
                              <ListItem item={item} onSwipeFromRight={() => remove(item.id)} />
                          )}
                />
            ) : ( <Text style={styles.text}>{not}</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.bgLight,
        paddingVertical: 20,
        alignItems: "center",
        flex: 1,
    },
    text: {
        color: colors.text,
        fontSize: 17,
        paddingTop: 20
    }
})