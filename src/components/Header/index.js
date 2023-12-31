import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";
import Auth from "../../contexts/auth"

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 32
  : 80;

const Header = () => {

  const [show, setShow] = useState(false);
  const { user } = Auth();

  return (
    <View style={styles.container}>
      <MotiView 
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}  
      >
        <Text style={styles.title}>{user.nome}</Text>

        <View style={{flexDirection: "row"}}>  
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonEye} >
            <Feather name="eye-off" size={22} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser} >
            <Feather name="user" size={28} />
          </TouchableOpacity>
        </View>
        
      </MotiView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#aa4488",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },

  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },

  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "#aa4444",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 44 / 2,
  },

  buttonEye: {
    marginRight: 10,

    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
