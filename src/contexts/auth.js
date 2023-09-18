import React, { createContext, useState, useContext } from "react"

export const GlobalContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});



    const log = (nome, email) => {
        setUser({
            nome: nome,
            email: email,
        })
    }
    


    return (
        <GlobalContext.Provider value={{ log, user }}>
            {children}
        </GlobalContext.Provider>
    )

}

const  Auth = () => useContext(GlobalContext)

export default Auth