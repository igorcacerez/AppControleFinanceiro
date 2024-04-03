import {doc, setDoc} from "firebase/firestore";
import {db} from "../../config/firebase";
import {useContext} from "react";
import {Users} from "../../context/UserContext";

export default async function updateDataBase(data, uid) {
    const financeRef = doc(db, "finances", uid);
    await setDoc(financeRef, {items: data});
}