import {TouchableOpacity} from "react-native";
import Icons from "../../adapters/Icons";
import colors from "../../design/colors";
import Logo from "../ui/utils/Logo";
import ViewRow from "../ui/layouts/ViewRow";
import IconProfile from "./User/IconProfile";

export default ({profile, navigation}) => {
    return (
        <ViewRow>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icons color={colors.textLight} name="menu" size={30} />
            </TouchableOpacity>

            <Logo />

            <ViewRow justify={"flex-end"} gap={15}>
                <Icons name={"bell-outline"} style={{opacity: 0.85}} color={colors.textLight} size={25} />
                {profile && <IconProfile profile={profile} />}
            </ViewRow>
        </ViewRow>
    )
}