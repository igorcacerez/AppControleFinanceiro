import {auth} from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

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