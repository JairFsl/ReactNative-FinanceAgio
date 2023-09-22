import React, { useState } from "react";
import {
    View, Text, TouchableOpacity, StyleSheet
} from "react-native";
import Auth from "../../../../contexts/auth";

const radioButton = ({ data }) => {
    const { checked, setChecked } = Auth();

    return(
        <View key={data.key} style={styles.container}>
            <Text style={styles.radioText}>{data.text}</Text>
            <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                    setChecked(data.key)
                }}
            >
                { checked == data.key ? <View style={styles.selectedRb} ></View> : <></> }
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
	container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
		justifyContent: 'space-between',
	},
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
	radioCircle: {
		height: 30,
		width: 30,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#3740ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRb: {
		width: 15,
		height: 15,
		borderRadius: 15/2,
		backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});

export default radioButton;
