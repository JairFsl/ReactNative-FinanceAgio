import React, { createContext, useState } from "react"
import { useNavigation } from "@react-navigation/native"

const AuthContext = createContext({});
const navigation = useNavigation();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});

    const signIn = (email, password) => {
        
        if (email !== "" && password !== "") {
            setUser({
                email: email,
                status: 1
            })
    
            navigation.navigate("Home")
    
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, user }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider