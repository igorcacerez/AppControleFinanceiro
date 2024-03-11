import {createContext, useRef} from "react";

const Modals = createContext();

function ModalProvider({children}) {

    const modalizeRef = useRef(null);

    const onOpen = () => modalizeRef.current?.open();
    const onClose = () => modalizeRef.current?.close();

    return (
        <Modals.Provider value={{onClose, onOpen, modalizeRef}}>
            {children}
        </Modals.Provider>
    )
}

export {Modals, ModalProvider}