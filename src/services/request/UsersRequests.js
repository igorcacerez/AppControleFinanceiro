import {auth} from "../../config/firebase";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";

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