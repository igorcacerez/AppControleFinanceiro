import {auth, db} from "../../config/firebase";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";

export const createUser = async (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                return {type: "success", user: user}
            })
            .catch((error) => {
                console.log(error)
                return {type: "error", error: error}
            });
}

export const updateUser = async (newValues) => {
    return updateProfile(auth.currentUser, newValues)
            .then(() => {
                return {type: "success"}
            })
            .catch((error) => {
                console.log(error)
                return {type: "error", error: error}
            });
}

export const loginUser = async (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                return {type: "success", user: user}
            })
            .catch((error) => {
                console.log(error)
                return {type: "error", error: error}
            });
}

export const getInfoDataUser = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await docRef.get();

    if (docSnap.exists()) return docSnap.data()
    throw new Error("Documento não encontrado.");
}

export const setInfoDataUser = async (uid, data) => {
    const docRef = doc(db, "users", uid);
    await setDoc(docRef, data);
}