import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { correctSize } from "../theme/index";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [securepass, setsecurepass] = useState(true);

  // When data is posted or fetched through API .. Redux(action, reducer, store) is used for that..
  // since there was no api so i just made a function here for verfication of credentials

  const checkLogin = (name, password) => {
    const username = "Fariha";
    const pasword = "password";
    if (!name || !password) {
      setErrorMessage("Username and password in required");
      username == name && pasword == password;
    } else if (username == name && pasword == password) {
      navigation.navigate("Main");
    } else {
      setErrorMessage("Username or Password is incorrect");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.transparent} />
      <View style={styles.container}>
        <View
          style={{ marginTop: correctSize(70), marginBottom: correctSize(40) }}
        >
          <Image style={styles.logo} source={require("../assets/reddit.jpg")} />
        </View>
        <View style={styles.emailcon}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Username"
            style={[styles.inputs, { width: correctSize(300) }]}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.emailcon}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={securepass}
            placeholder="Password"
            style={styles.inputs}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setsecurepass((prev) => !prev)}>
            <Image
              style={styles.secure}
              source={require("../assets/visibility_off-24px.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.error}> {errorMessage} </Text>
        <TouchableOpacity onPress={() => checkLogin(name, password)}>
          <View style={styles.button}>
            <Text style={styles.login}> Login </Text>
          </View>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: "center",
    marginHorizontal: 15,
    borderBottomColor: "red",
  },
  emailcon: {
    // height: 50,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: correctSize(4),
    borderWidth: StyleSheet.hairlineWidth,
    overflow: "hidden",
    flexDirection: "row",
  },
  inputs: {
    paddingLeft: correctSize(8),
    height: correctSize(44),
    width: correctSize(270),
  },
  button: {
    backgroundColor: "#add8e6",
    width: correctSize(300),

    borderRadius: correctSize(4),
    height: correctSize(44),
    justifyContent: "center",
  },
  logo: { height: correctSize(74), width: correctSize(74) },
  secure: {
    marginHorizontal: correctSize(8),
    marginTop: correctSize(16),
  },
  error: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: correctSize(26),
    marginBottom: correctSize(10),
    marginTop: correctSize(-8),
  },
  login: {
    alignSelf: "center",
    color: "#fff",
    fontSize: correctSize(16),
  },
});
