import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Keyboard } from "react-native";
import Auth from "../contexts/auth";

import { Formik } from "formik";

import { loginValidation } from "../contexts/services/schema";

import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const { log } = Auth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const defaultValues = {
    name: "Jair",
    email: "Jair@hh.com",
    password: "123",
  }

  const submit = (e) => {
    console.log(e)
    log(name, email);
    navigation.navigate("BottomBar");
  }

  return (
    <View style={styles.container}>
      <Formik
        style={styles.form}
        initialValues={defaultValues}
        onSubmit={(values) => {Keyboard.dismiss(), submit(values)}}
        validationSchema={loginValidation}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.content}>
            <Text>Nome:</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu nome..."
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              autoCorrect={true}
              value={values.name}
            />
            {touched.name && errors.name ? <Text style={styles.error}>{errors.name}</Text> : "" }
            <Text>Email:</Text>
            <TextInput
              style={styles.input}
              placeholder="Seu email..."
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              autoCorrect={true}
              value={values.email}
            />
            {touched.email && errors.email ? <Text style={styles.error}>{errors.email}</Text> : "" }
            <Text>Senha:</Text>
            <TextInput
              style={styles.input}
              placeholder="Sua senha..."
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.password && errors.password ? <Text style={styles.error}>{errors.password}</Text> : "" }
            
            <Button onPress={handleSubmit} title="Acessar" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DADADA"
  },

  form: {
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    width:  "80%",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 1,
    width: "80%",

    padding: 10,
    margin: 5
  },

  error: {
    color: "#ff0000"
  }
})

export default SignIn;
