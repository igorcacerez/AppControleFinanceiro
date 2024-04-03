import {db} from "../../config/firebase";
import {doc, getDoc} from "firebase/firestore";

export default async function loadFinances(setFinance, user) {
    const financeRef = doc(db, "finances", user.uid);
    const docSnap = await getDoc(financeRef);

    if (docSnap.exists()) {
        console.log("loadFinances", docSnap.data().items);
        setFinance(docSnap.data().items);
        return docSnap.data().items
    }

    setFinance([]);
    return true
}