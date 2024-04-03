import {setFinancesLocal} from "../../storage/financeStorage";
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import {db} from "../../config/firebase";
import {useContext} from "react";
import {Users} from "../../context/UserContext";

/**
 * Método responsável por adicionar um item de finanças no banco de dodos.
 * @param setFinance função para atualizar o estado finance
 * @param finance estado finance
 * @param news item de finanças a ser adicionado
 */
export default async function add(setFinance, finance, news, user) {
    if (news?.title === "" || news?.value === 0 || news?.date === "")
        throw new Error("Os campos são obrigatórios");

    if(news?.type !== "receita" && news?.type !== "despesa" )
        throw new Error("Tipo inválido");

    // Gera um id único para o item
    news.id = Date.now();

    const financeRef = doc(db, "finances", user.uid);

    try {
        // Tenta obter o documento
        const docSnap = await getDoc(financeRef);

        if (docSnap.exists()) {
            // Se o documento existe, atualiza o campo (assumindo que o campo que contém a lista é chamado "items")
            await updateDoc(financeRef, {
                items: arrayUnion(news)
            });
        } else {
            // Se o documento não existe, cria um novo com o array inicializado
            await setDoc(financeRef, { items: [news] });
        }

        console.log("Item adicionado com sucesso");

        // Atualiza o estado
        setFinance([...finance, news]);
    } catch (error) {
        // Trata possíveis erros
        console.error("Erro ao adicionar item:", error);
        throw new Error("Erro ao adicionar " + news.type);
    }
}
