import {createContext, useEffect, useState} from "react";
import UserService from "../services/UserService";
import {getUserLocal} from "../storage/userStorage";

const Users = createContext(null)

function UserProvider({children}) {
    const [user, setUser] = useState({})

    useEffect(() => {
        UserService.loadUser(setUser)
    }, []);

    const getUser = () => user
    const addUser = (user) => UserService.save(setUser, user)
    const updateUser = (campo, valor) => UserService.update(setUser, user, campo, valor)

    return (
        <Users.Provider value={{getUser, addUser, updateUser}} >
            {children}
        </Users.Provider>
    )
}

export {Users, UserProvider}