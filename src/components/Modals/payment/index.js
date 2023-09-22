import React, { useState, useRef } from "react";
import { Content, Title, Press, Footer, PressPay, ScanText } from "./styles";

import { Text, StyleSheet, FlatList, View, TouchableOpacity } from "react-native";

import { Picker } from "@react-native-picker/picker";

import { Modalize } from "react-native-modalize";
import { Feather } from "@expo/vector-icons";
import RadioButton from "./components/radio";

import Auth from "../../../contexts/auth";

import { Camera } from "expo-camera";

const PayModal = ({ modalizeRef }) => {
  const pickerRef = useRef();
  const { checked } = Auth();

  const radios = [
    {
      key: "PIX",
      text: "PIX",
    },
    {
      key: "CARTAO",
      text: "CARTÃO",
    },
    {
      key: "BOLETO",
      text: "BOLETO",
    },
  ];

  return (
    <Modalize
      modalStyle={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#DADADA",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
      }}
      ref={modalizeRef}
      modalHeight={650}
      panGestureEnabled={true}
      openAnimationConfig={{
        timing: { duration: 400 },
        spring: { speed: 20, bounciness: 10 },
      }}
      closeAnimationConfig={{
        timing: { duration: 400 },
        spring: { speed: 20, bounciness: 10 },
      }}
      HeaderComponent={
        <Footer>
          <Press title="" onPress={() => modalizeRef.current.close()}>
            <Feather name="arrow-down" size={30} color={"#000"} />
          </Press>
        </Footer>
      }
    >
      <Content>
        <Title>Selecione o método de pagamento:</Title>

        <FlatList
          style={styles.list}
          data={radios}
          keyExtractor={(item) => String(item.key)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <RadioButton data={item} /> }
        />

        {checked == "BOLETO" ?
        <View style={{ alignItems: "center", marginTop: 50, justifyContent: "center" }}>
            <TouchableOpacity>
                <ScanText>ESCANEAR CÓDIGO DE BARRAS</ScanText>
            </TouchableOpacity>
        </View>
        :
        <View style={{ alignItems: "center", marginTop: 50, justifyContent: "center" }}>
        </View>
        }

        <PressPay>
          <Text>PAGAR</Text>
        </PressPay>
      </Content>
    </Modalize>
  );
};

const styles = StyleSheet.create({

  list: {
    marginStart: 14,
    marginEnd: 14,
    padding: 20,
  },
})


export default PayModal;
