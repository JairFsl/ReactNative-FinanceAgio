import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Balance = ({ saldo, gastos }) => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>
                    Saldo
                </Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>
                    Gastos
                </Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>
                        R$
                    </Text>
                    <Text style={styles.expense}>{gastos}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        paddingBottom: 22,
        justifyContent: "space-between",
        
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 22,
        paddingBottom: 22,

        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,

        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

        zIndex: 99,

    },

    itemTitle: {
        fontSize: 20,
        color: "#DADADA",


    },

    content: {
        flexDirection: "row",
        alignItems: "center",
    },

    currencySymbol: {
        color: "#DADADA",
        marginRight: 6,
    },

    balance: {
        fontSize: 32,
        color: "#2ecc71",
    },

    expense: {
        fontSize: 32,
        color: "#e74c3c",
    }
})

export default Balance;