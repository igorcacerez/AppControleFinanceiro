import {createContext, useEffect, useState} from "react";
import UserService from "../services/UserService";

const Users = createContext(null)

function UserProvider({children}) {
    const [user, setUser] = useState({})

    useEffect(() => {
        UserService.loadUser(setUser)
    }, []);

    const getUser = () => user
    const addUser = (user) => UserService.save(setUser, user)
    const updateUser = (campo, valor) => UserService.update(setUser, user, campo, valor)
    const createUser = (newUser) => UserService.create(setUser, newUser)
    const login = (email, password) => UserService.login(setUser, email, password)

    return (
        <Users.Provider value={{getUser, addUser, updateUser, createUser, login}} >
            {children}
        </Users.Provider>
    )
}

export {Users, UserProvider}