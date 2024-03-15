import {TouchableOpacity} from "react-native";
import Icons from "../../adapters/Icons";
import colors from "../../design/colors";
import Logo from "../ui/utils/Logo";
import ViewRow from "../ui/layouts/ViewRow";
import IconProfile from "./User/IconProfile";
import {useState} from "react";
import UserSetings from "../ui/dialog/UserSetings";

export default ({navigation}) => {
    const [exibe, setExibe] = useState(false)

    return (
        <ViewRow>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icons color={colors.textLight} name="menu" size={30} />
            </TouchableOpacity>

            <Logo />

            <ViewRow justify={"flex-end"} gap={15}>
                <TouchableOpacity onPress={() => setExibe(true)}>
                    <Icons color={colors.textLight} style={{opacity: 0.85}} name="cog-outline" size={25} />
                </TouchableOpacity>
                <UserSetings visible={exibe} setVisible={setExibe} />
            </ViewRow>
        </ViewRow>
    )
}