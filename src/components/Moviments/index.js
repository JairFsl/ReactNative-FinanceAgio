import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Moviments = ({ data }) => {

  const [showValues, setShowValues] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => setShowValues(!showValues)}>
        <Text style={styles.date}>{data.date}</Text>

        <View style={styles.content}>
          <Text style={styles.label}>{data.label}</Text>

          { showValues ? ( 
            <Text 
            style={data.type === 1 ? styles.income : styles.outcome}
          >
            {data.type === 1 ? `R$ ${data.value}` : `- R$ ${data.value}`}
          </Text>
          ) : (
            <View style={styles.hidden}>
            </View>
          )}

          
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

  income: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },

  outcome: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
  },

  hidden: {
    backgroundColor: "#DADADA",
    width: 80,
    height: 15,
    
    borderRadius: 10
  }
});

export default Moviments;
