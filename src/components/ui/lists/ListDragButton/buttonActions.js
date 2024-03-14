import {Animated, StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import colors from "../../../../design/colors";

export const renderButtonDelete = (progress, dragX, onPress) => {
    const scale = dragX.interpolate({
        inputRange: [-100, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.deleteButton}>
                <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
                    Deletar
                </Animated.Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    deleteButton: {
        backgroundColor: colors.danger,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: '100%'
    },
    actionText: {
        color: colors.textLight,
        fontWeight: '600'
    },
});