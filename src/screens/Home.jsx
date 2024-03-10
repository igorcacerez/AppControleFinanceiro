import React from "react";
import {Finances} from "../context/FinanceContext";
import Container from "../components/ui/layouts/Container";
import Header from "../components/Header";
import ViewCenter from "../components/ui/layouts/ViewCenter";
import AcessoRapido from "../components/AcessoRapido";
import Movimentacoes from "../components/Movimentacoes";
import movimentacoes from "../data/movimentacoes";
import profile from "../data/profile";

export default function Home({ navigation }) {
  return (
    <Container scroll={true}>
        <Header navigation={navigation} profile={profile} />

        <ViewCenter>
            <AcessoRapido title={"Acesso rápido"} navigation={navigation} />
        </ViewCenter>

        <Movimentacoes data={movimentacoes} />
    </Container>
  )
}
