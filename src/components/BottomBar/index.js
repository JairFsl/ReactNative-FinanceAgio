import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../../screens/home";
import SettingScreen from "../../screens/Setting";

const homeName = "Home";
const settingName = "Setting";

const Tab = createMaterialBottomTabNavigator();

const BottomBar = () => {
  return (
    <NavigationContainer style={styles.container} independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#3e2465"
        inactiveColor="#f0edf6"
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
      </Tab.Navigator>
    </NavigationContainer>
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
    width: "80%",
    height: 50,
  },
});

export default BottomBar;
