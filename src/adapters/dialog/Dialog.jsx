import {Dialog, Portal} from "react-native-paper";
import * as React from "react";

/**
 * Componente de dialogo
 * @param {boolean} visible
 * @param {function} setVisible
 * @param {string} title
 * @param {Element} children
 * @param {Object} style
 * @param {Object} styleTitle
 * @returns {Element}
 */
export default ({visible, setVisible, title, children, style = {}, styleTitle = {}}) => {
    const hideDialog = () => setVisible(false);

    return (
        <Portal>
            <Dialog style={style} visible={visible} onDismiss={hideDialog}>
                {title && <Dialog.Title style={styleTitle}>{title}</Dialog.Title>}
                <Dialog.Content>
                    {children}
                </Dialog.Content>
            </Dialog>
        </Portal>
    )
}