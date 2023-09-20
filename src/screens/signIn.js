import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Auth from "../contexts/auth";

import { Formik } from "formik";

import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const { log } = Auth();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    log(nome, email);
    navigation.navigate("BottomBar");
  };

  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
