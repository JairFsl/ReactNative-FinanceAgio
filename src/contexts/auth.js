import React, { createContext, useState, useContext } from "react"

export const GlobalContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [checked, setChecked] = useState();


    const log = (nome, email) => {
        setUser({
            nome: nome,
            email: email,
        })
    }

    const set = (value) => {
        setChecked(value)
    }

    const stateReturn = {
        checked, setChecked
    }

    return (
        <GlobalContext.Provider value={{ log, user, ...stateReturn }}>
            {children}
        </GlobalContext.Provider>
    )

}

const  Auth = () => useContext(GlobalContext)

export default Auth