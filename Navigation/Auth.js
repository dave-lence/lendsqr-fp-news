import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingScreen from "../Screens/LandingScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import LoginScreen from "../Screens/LoginScreen";
import Routes from "./Routes";

const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen}/>
      <Stack.Screen name={Routes.signUp} component={SignUpScreen} />
      <Stack.Screen name={Routes.logIn} component={LoginScreen}/>
    </Stack.Navigator>
  );
};

export default Auth;
