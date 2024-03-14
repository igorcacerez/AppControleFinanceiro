import React, {useContext} from "react";
import Container from "../components/ui/layouts/Container";
import Header from "../components/Header";
import ViewCenter from "../components/ui/layouts/ViewCenter";
import AcessoRapido from "../components/AcessoRapido";
import Movimentacoes from "../components/Movimentacoes";
import {Finances} from "../context/FinanceContext";
import {Users} from "../context/UserContext";

export default function Home({ navigation }) {
  const {getBalanceFinance, getFinance} = useContext(Finances)
  const {getUser} = useContext(Users)

  let balance = getBalanceFinance()
  let lastItems = getFinance()
  let profile = getUser()

  profile.balance = balance.saldo

  return (
    <Container scroll={true}>
        <Header navigation={navigation} profile={profile} />

        <ViewCenter>
            <AcessoRapido title={"Acesso rápido"} navigation={navigation} />
        </ViewCenter>

        <Movimentacoes title={"Últimas movimentações"} limit={4} data={lastItems} />
    </Container>
  )
}
