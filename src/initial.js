import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import EntryScreen from "./screens/entry"
import SignIn from "./screens/signIn"
// import SignUp from "./screens/signIn"
import NavigationBar from "./navigation"

const Initial = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            
            <Stack.Screen name="signIn" component={SignIn} />
            {/* <Stack.Screen name="signUp" component={SignUp} /> */}

            {/* ActionsTab */}
            <Stack.Screen name="Entry" component={EntryScreen} />
            {/* <Stack.Screen name="Shop" component={} />
            <Stack.Screen name="Wallet" component={} /> */}

            {/* BottomBar */}
            <Stack.Screen name="BottomBar" component={NavigationBar} />
        </Stack.Navigator>
    )
}

export default Initial;