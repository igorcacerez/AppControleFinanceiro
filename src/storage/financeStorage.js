import AsyncStorage from "@react-native-async-storage/async-storage";

export const setFinancesLocal = async (finances) => {
    try {
        await AsyncStorage.setItem('finances', JSON.stringify(finances));
    } catch (e) {
        console.log(e);
    }
};

export const getFinancesLocal = async () => {
    try {
        const user = await AsyncStorage.getItem('finances');
        return user ? JSON.parse(user) : null;
    } catch (e) {
        console.log(e);
    }
}