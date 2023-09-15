import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../../screens/home";
import SettingScreen from "../../screens/setting";
import BankScreen from "../../screens/bank"


const Tab = createMaterialBottomTabNavigator();

const BottomBar = () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#0f0f55"
        inactiveColor="#3e2465"
        barStyle={styles.tabNav}
      >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={24} />
          ),
        }}
      />

      <Tab.Screen
          name="Bank"
          component={BankScreen}
          options={{
            tabBarLabel: "Bank",
            tabBarIcon: ({ color }) => (
              <Feather name="dollar-sign" color={color} size={24} />
            ),
          }}
        />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" color={color} size={24} />
          ),
        }}
      />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#aa4488",
  },

  tabNav: {
    marginBottom: 25,
    right: 10,
    left: 10,
    height: 50,
  },
});

export default BottomBar;
