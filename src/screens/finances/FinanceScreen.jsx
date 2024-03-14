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
import {TouchableOpacity} from "react-native";

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
                    <TouchableOpacity onPress={() => navigation.navigate("Finance", {type: "receita"})}>
                        <BalanceItem title={"Receitas"} value={balance.receitas} icon={"arrow-up"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Finance", {type: "despesa"})}>
                        <BalanceItem title={"Depesas"} value={balance.despesas} icon={"arrow-down"} />
                    </TouchableOpacity>
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
                    label="Nome da receita"
                    placeholder="Ex: Salário"
                    theme={{ colors: { text: colors.text } }}
                    activeOutlineColor={colors.primary}
                    textColor={colors.primary}
                />

                <TextInput
                    mode="outlined"
                    label="Data da receita"
                    placeholder="Ex: 01/01/2021"
                    theme={{ colors: { text: colors.text } }}
                    activeOutlineColor={colors.primary}
                    textColor={colors.primary}
                    mask="[00]/[00]/[0000]"
                />

                <TextInput
                    mode="outlined"
                    label="Valor da receita"
                    placeholder="Ex: 300,00"
                    theme={{ colors: { text: colors.text } }}
                    activeOutlineColor={colors.primary}
                    textColor={colors.primary}
                />
            </ViewCenter>
        </DragModal>

        <FloatButton press={modalContext.onOpen} />
    </>
  )
}