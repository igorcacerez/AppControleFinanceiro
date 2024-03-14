import Container from "../../components/ui/layouts/Container";
import Header from "../../components/Header";
import ViewRow from "../../components/ui/layouts/ViewRow";
import BalanceItem from "../../components/Header/BalanceItem";
import colors from "../../design/colors";
import FloatButton from "../../components/ui/buttons/FloatButton";
import DragModal from "../../components/ui/modals/DragModal";
import {Modals} from "../../context/ModalContext";
import {useContext} from "react";
import ViewCenter from "../../components/ui/layouts/ViewCenter";
import { TextInput } from 'react-native-paper';
import {Finances} from "../../context/FinanceContext";
import ListAll from "./ListAll";

export default function({navigation, route}) {
  const { type } = route.params;

  const modalContext = useContext(Modals);
  const {getBalanceFinance, getFinance, removeFinance} = useContext(Finances)

  let title = type === "receita" ? "Minhas receitas" : "Minhas despesas"
  let text = type === "receita" ? "Não possui receitas cadastradas" : "Não possui despesas cadastradas"
  let balance = getBalanceFinance()

  return (
    <>
        <Container style={{backgroundColor: colors.bgLight, paddingBottom: 30}} scroll={false}>
            <Header navigation={navigation} full={false}>
                <ViewRow justify={"space-between"} style={{paddingVertical: 20}}>
                    <BalanceItem title={"Receitas"} value={balance.receitas} icon={"arrow-up"} />
                    <BalanceItem title={"Depesas"} value={balance.despesas} icon={"arrow-down"} />
                </ViewRow>
            </Header>

            <ListAll title={title}
                     data={getFinance(type)}
                     remove={removeFinance} not={text} />
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