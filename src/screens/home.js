import React, { useRef } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";


import Header from "../components/Header";
import Balance from "../components/Balance";
import Moviments from "../components/Moviments";
import ActionTabs from "../components/ActionTabs";

import Auth from "../contexts/auth"

import { Modals } from "../components/Modals/Portal";
import PayModal from "../components/Modals/payment";



const HomeScreen = () => {

  const { user } = Auth();
  const actionTabsRef = useRef(null);


  const fakeDaddy = [
    {
      id: 1,
      label: "Deb auto Agio",
      desc: "Débito automático para o agiota",
      value: "2.333,00",
      date: "13/09/2023",
      type: 0,
    },

    {
      id: 2,
      label: "Empre Agio",
      desc: "Crédito adicionado via Empréstimo com o Agiota",
      value: "30.000,00",
      date: "12/09/2023",
      type: 1,
    },

    {
      id: 3,
      label: "Deb auto Agio",
      desc: "Débito automático para o agiota",
      value: "400,00",
      date: "11/09/2023",
      type: 0,
    },

    {
      id: 4,
      label: "Pix mamãe",
      desc: "Crédito adicionado via Pix",
      value: "100,00",
      date: "09/09/2023",
      type: 1,
    },
  ];

  return (
    <View style={styles.container}>
        <Header name={user.name} />

        <Balance saldo={3000} gastos={500} />

        <ActionTabs modalizeRef={actionTabsRef} />

        <Text style={styles.title}>Movimentações recentes:</Text>
        <FlatList
          style={styles.list}
          data={fakeDaddy}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Moviments data={item} />}
        />


        <Modals>
          <PayModal modalizeRef={actionTabsRef} />
        </Modals>
          

          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 14,

    color: "#aa4488",
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});

export default HomeScreen;
