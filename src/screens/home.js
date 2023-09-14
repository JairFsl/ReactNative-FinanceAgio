import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from "../components/Header"
import Balance from "../components/Balance"
import Moviments from "../components/Moviments"



const HomeScreen = () => {

    const fakeDaddy = [
        {
            id: 1,
            label: "Pix devedor 1",
            value: "2.333,00",
            date: "11/09/2023",
            type: 1
        },
    
        {
            id: 2,
            label: "Remuneração",
            value: "30.000,00",
            date: "12/09/2023",
            type: 1
        },
    
        {
            id: 3,
            label: "Pix devedor 2",
            value: "400,00",
            date: "13/09/2023",
            type: 1
        },
    
        {
            id: 4,
            label: "Pix mamãe",
            value: "100,00",
            date: "09/09/2023",
            type: 1
        },
    ]


    return (
        <View>
            <Header name="FinaceAgiotagens" />

            <Balance saldo={3000} gastos={500} />
            <Text style={styles.title}>
                Movimentações recentes:
            </Text>

            <FlatList 
                style={styles.list}
                data={fakeDaddy}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={ ({ item }) => <Moviments data={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
        marginBottom: 10,
    },

    list: {
        marginStart: 14,
        marginEnd: 14,
    }
})

export default HomeScreen;