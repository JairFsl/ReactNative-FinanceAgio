import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Moviments = ({ data }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.content}>
          <Text style={styles.label}>{data.label}</Text>
          <Text style={styles.value}>R$ {data.value}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dadada",
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  date: {
    fontSize: 16,
    color: "#DADADA",
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
  },

  value: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },

  expenses: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },
});

export default Moviments;
