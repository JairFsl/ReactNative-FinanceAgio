import React from "react";
import { View, Text, StyleSheet } from "react-native";


import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Header name="FinaceAgiotagens" />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  }
});

export default HomeScreen;
