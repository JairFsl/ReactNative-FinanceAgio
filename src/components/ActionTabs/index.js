import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons";

import { Routes } from "../routes"


 const ActionTabs = ({ modalizeRef }) => {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                    <TouchableOpacity 
                        style={styles.buttonTabs}
                        onPress={() => Routes(navigation, "Entry")}
                    >
                        <View style={styles.actionButton}>
                            <Feather name="folder-plus" size={38} color={"#0f0f55"} />
                        </View>
                        <Text style={styles.desc}>Entradas</Text>
                    </TouchableOpacity>


                    <TouchableOpacity 
                        style={styles.buttonTabs}
                        // onPress={() => Routes(navigation, "")}
                    >
                        <View style={styles.actionButton}>
                            <Feather name="shopping-cart" size={38} color={"#0f0f55"} />
                        </View>
                        <Text style={styles.desc}>Compras</Text>
                    </TouchableOpacity>


                    <TouchableOpacity 
                        style={styles.buttonTabs}
                    >

                        <View style={styles.actionButton}>
                            <Feather name="credit-card" size={38} color={"#0f0f55"} />
                        </View>
                        
                        <Text style={styles.desc}>Carteira</Text>
                        
                    </TouchableOpacity>


                    <TouchableOpacity 
                        style={styles.buttonTabs}
                    >

                        <View style={styles.actionButton}>
                            <Feather name="trending-up" size={38} color={"#0f0f55"} />
                        </View>
                        
                        <Text style={styles.desc}>Investimentos</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonTabs}
                        onPress={() => modalizeRef.current?.open()}
                    >
                        <View style={styles.actionButton}>
                            <Feather style={styles.icon} name="align-justify" size={38} color={"#0f0f55"} />
                        </View>
                        
                        <Text style={styles.desc}>Pagamentos</Text>
                        
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonTabs}
                    >

                        <View style={styles.actionButton}>
                            <Feather name="shield" size={38} color={"#0f0f55"} />
                        </View>
                        
                        <Text style={styles.desc}>Proteção</Text>
                        
                    </TouchableOpacity>

                    

            </ScrollView>

        </View>

            
    )
 }

 const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        paddingStart: 14,
        paddingEnd: 14,

        maxHeight: 90,
    },

    actionButton: {
        backgroundColor: "#DADADA",
        width: 64,
        height: 64,

        borderRadius: 64/2,
        
        alignItems: "center",
        justifyContent: "center"
    },

    buttonTabs: {
        marginRight: 19,
    },

    desc: {
        marginTop: 5,
        fontWeight: "bold",
        fontSize: 14,
        textAlign: "center",
    },

    icon: {
        transform: [{ rotate: "90deg" }]
    }

})

 export default ActionTabs;