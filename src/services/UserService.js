import {getUserLocal, setUserLocal} from "../storage/userStorage";
import {createUser, loginUser, updateUser} from "./request/UsersRequests";
import {addMaskPhone, removeMaskPhone} from "../utils/phone";
import {getFirebaseAuthErrorDescription} from "../utils/erros";

const loadUser = async (setUser) => {
    const user = await getUserLocal();
    setUser(user);
}

async function save(setUser, user) {
    if (user?.name === "" || user?.phone === "") throw new Error("Informe os campos obrigatórios");
    user.visibleSaldo = false;

    await setUserLocal(user);
    setUser(user);
}

async function update(setUser, user, campo, valor) {
    let userAux = {...user};
    userAux[campo] = valor;

    await setUserLocal(userAux);
    let phone = await removeMaskPhone(userAux.phone);

    await updateUser({displayName: userAux.name, phoneNumber: phone});

    setUser(userAux);
}

async function create(setUser, newUser) {
    if (newUser?.name === "" || newUser?.email === "" || newUser?.password === "") throw new Error("Informe os campos obrigatórios");
    newUser.visibleSaldo = false;

    let response = await createUser(newUser.email, newUser.password);
    if (response.type === "error") throw new Error(getFirebaseAuthErrorDescription(response.error.code));

    let phone = await removeMaskPhone(newUser.phone);
    await updateUser({displayName: newUser.name, phoneNumber: phone});

    newUser.uid = response.user.uid;
    newUser.stsTokenManager = response.user.stsTokenManager;

    await setUserLocal(newUser);
    setUser(newUser);
}

async function login(setUser, email, password) {
    let response = await loginUser(email, password);
    if (response.type === "error") {
        throw new Error(getFirebaseAuthErrorDescription(response.error.code));
    }

    let user = response.user;
    console.log(user);

    let userLocal = {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        phone: await addMaskPhone(user.phoneNumber),
        visibleSaldo: false,
        stsTokenManager: user.stsTokenManager
    }

    await setUserLocal(userLocal);
    setUser(userLocal);
}

export default {save, update, loadUser, create, login}