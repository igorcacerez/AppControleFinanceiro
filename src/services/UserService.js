import {getUserLocal, setUserLocal} from "../storage/userStorage";

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
    setUser(userAux);
}

export default {save, update, loadUser}