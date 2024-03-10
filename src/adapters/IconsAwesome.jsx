import Icon from "react-native-vector-icons/FontAwesome";

export default function IconsAwesome({name, size = 20, color = "#000", style}) {
    return <Icon name={name} color={color} style={style} size={size} />
}