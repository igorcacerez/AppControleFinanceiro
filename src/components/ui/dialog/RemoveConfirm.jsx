import * as React from 'react';
import {Button, StyleSheet} from 'react-native';
import { Dialog, Portal, Text } from 'react-native-paper';
import ViewRow from "../layouts/ViewRow";
import colors from "../../../design/colors";

const RemoveConfirm = ({remove, text = "Você deseja realmente excluir este item?", visible, setVisible}) => {
    const hideDialog = () => setVisible(false);

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title style={styles.title}>{text}</Dialog.Title>
                <Dialog.Content>
                    <ViewRow justify={"center"} gap={20} style={{paddingTop: 20}}>
                        <Button title={"Cancelar"} color={colors.text} onPress={hideDialog} />
                        <Button title={"Deletar"} color={colors.danger} onPress={remove} />
                    </ViewRow>
                </Dialog.Content>
            </Dialog>
        </Portal>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
    },
})

export default RemoveConfirm;