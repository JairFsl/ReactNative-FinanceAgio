import React from "react";
import { View, Text, StyleSheet } from "react-native";


import Header from "../components/Header";

import Auth from "../contexts/auth"


const SettingScreen = () => {

  
  const { user } = Auth();

  return (
    <View style={styles.container}>
        <Header name={user.nome} />

        <Text>email: {user.nome}</Text>
        <Text>senha: {user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  }
});

export default SettingScreen;
