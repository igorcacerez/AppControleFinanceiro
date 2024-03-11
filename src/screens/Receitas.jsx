import {Text, View} from "react-native"
import Container from "../components/ui/layouts/Container";
import Header from "../components/Header";
import ViewRow from "../components/ui/layouts/ViewRow";
import BalanceItem from "../components/Header/BalanceItem";
import Movimentacoes from "../components/Movimentacoes";
import movimentacoes from "../data/movimentacoes";
import colors from "../design/colors";
import FloatButton from "../components/ui/buttons/FloatButton";
import {Modalize} from "react-native-modalize";
import DragModal from "../components/ui/modals/DragModal";
import {Modals} from "../context/ModalContext";
import {useContext} from "react";
import ViewCenter from "../components/ui/layouts/ViewCenter";
import { TextInput } from 'react-native-paper';

export default function({navigation}) {
  const modalContext = useContext(Modals);

  return (
    <>
        <Container style={{backgroundColor: colors.bgLight}}>
            <Header navigation={navigation} full={false}>
                <ViewRow justify={"space-between"} style={{paddingVertical: 20}}>
                    <BalanceItem title={"Receitas"} value={3000} icon={"arrow-up"} />
                    <BalanceItem title={"Depesas"} value={3000} icon={"arrow-down"} />
                </ViewRow>
            </Header>

            <Movimentacoes pb={30} title={"Minhas receitas"} data={movimentacoes} />
        </Container>

        <DragModal title={"Adicinar receita"}>
            <ViewCenter>
                <TextInput
                    mode="outlined"
                    label="Outlined input"
                    placeholder="Type something"
                    textColor={colors.primary}
                />
            </ViewCenter>
        </DragModal>

        <FloatButton press={modalContext.onOpen} />
    </>
  )
}