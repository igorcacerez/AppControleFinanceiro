import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default ({renderRight, renderLeft, children}) => {
    return (
        <Swipeable renderRightActions={renderRight} renderLeftActions={renderLeft}>
            {children}
        </Swipeable>
    )
}