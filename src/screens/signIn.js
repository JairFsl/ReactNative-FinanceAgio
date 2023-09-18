import React, { useState } from "react";
import {
    View, Text, TextInput, Button
} from "react-native";
import Auth from "../contexts/auth";

import { useNavigation } from "@react-navigation/native";

const SignIn = () => {

    const { log }  = Auth();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const handleLogin = () => {
        log(nome, email)
        navigation.navigate("BottomBar")
    }

    return (

        <View style={{backgroundColor: "#DADADA", justifyContent: "center", alignItems: "center", marginTop: "50%"}}>
            <Text>
                Nome:
            </Text>
            <TextInput 
                name='nome'
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome..."
            />
            <Text>
                E-mail:
            </Text>
            <TextInput
                name='email'    
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail..."
            />

            <Button
                title="Acessar"
                onPress={handleLogin}
            >

            </Button>

        </View>
    )
}

export default SignIn;