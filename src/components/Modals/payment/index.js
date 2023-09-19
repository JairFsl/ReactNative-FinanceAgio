import React, { useState } from "react";
import {
    View, Text, TouchableOpacity, StyleSheet, Button
} from "react-native"


import { Modalize } from "react-native-modalize";

import { Feather } from "@expo/vector-icons";


const PayModal = ({ modalizeRef }) => {
    const [isSelected, setSelection] = useState(false)

    return (
        <Modalize 
            ref={modalizeRef}
            modalHeight={500}
            panGestureEnabled={false}
            style={styles.container}
        >
            <View style={styles.contentContainer}>
                <Text style={styles.title}>
                    Selecione o método de pagamento:
                </Text>

                <Button
                    style={styles.button}
                    title="PIX"
                />
                <Button
                    style={styles.button}
                    title="Cartão"
                />
                <Button
                    style={styles.button}
                    title="Dinheiro"
                />

            </View>
        </Modalize>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DADADA",
        justifyContent: "center",
        alignItems: "center",
    },

    contentContainer: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 28,
        fontWeight: "bold"
    },

    button: {
        margin: 5,
    }
})

export default PayModal;