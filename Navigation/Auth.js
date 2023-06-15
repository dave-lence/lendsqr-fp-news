import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import LandingScreen from "../Screens/LandingScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import LoginScreen from "../Screens/LoginScreen";

const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default Auth;
