import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../../screens/home";
import SettingScreen from "../../screens/setting";

const homeName = "Home";
const settingName = "Settings";

const Tab = createMaterialBottomTabNavigator();

const BottomBar = () => {
  return (
      <Tab.Navigator
        initialRouteName={homeName}
        activeColor="#3e2465"
        inactiveColor="#000f55"
        barStyle={styles.tabNav}
      >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: homeName,
          tabBarIcon: ({ color }) => (
            <Feather name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: settingName,
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
