import Container from "../../components/ui/layouts/Container";
import Header from "../../components/Header";
import ViewRow from "../../components/ui/layouts/ViewRow";
import BalanceItem from "../../components/Header/BalanceItem";
import colors from "../../design/colors";
import FloatButton from "../../components/ui/buttons/FloatButton";
import {Modals} from "../../context/ModalContext";
import {useContext} from "react";
import {Finances} from "../../context/FinanceContext";
import ListAll from "./ListAll";
import {Alert, TouchableOpacity} from "react-native";
import InserModal from "./InserModal";
import {Users} from "../../context/UserContext";

export default function({navigation, route}) {
  const { type } = route.params;

  const modalContext = useContext(Modals);
  const {addFinance, getBalanceFinance, getFinance, removeFinance} = useContext(Finances)
  const {getUser} = useContext(Users)

  let title = type === "receita" ? "Minhas receitas" : "Minhas despesas"
  let text = type === "receita" ? "Não possui receitas cadastradas" : "Não possui despesas cadastradas"
  let balance = getBalanceFinance()
  let user = getUser()

  const handleRemove = (id) => {
      Alert.alert("Atenção", "Deseja realmente excluir?", [
            {text: "Cancelar",  style: 'cancel'},
            {text: "Deletar", onPress: () => removeFinance(id, user)}
        ])
  }

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
                     remove={handleRemove} not={text} />
        </Container>

        <InserModal type={type} addAction={addFinance} user={user} />

        <FloatButton press={modalContext.onOpen} />
    </>
  )
}

