import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../containers/Login";
import Main from "../src/Main";

function Navigation() {
  const Stack = createStackNavigator();
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#000" }} />
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          style="light"
          translucent={false}
          networkActivityIndicatorVisible={true}
          hidden={false}
        />
        <NavigationContainer>
          <Stack.Navigator>
            <>
              <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login}
              />
              <Stack.Screen
                options={{ headerShown: false }}
                name="Main"
                component={Main}
              />
            </>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

export default Navigation;
