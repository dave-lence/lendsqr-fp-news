import { NavigationContainer } from "@react-navigation/native";

import LandingScreen from "./Screens/LandingScreen";
import ListingDetailsScreen from "./Screens/ListingDetailsScreen";
import ListingScreen from "./Screens/ListingScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import Auth from "./Navigation/Auth";
import { myTheme } from "./Navigation/NavigationTheme";
import Tab from "./Navigation/Tab";

export default function App() {
  return (
    <NavigationContainer theme={myTheme}>
      <Tab/>
    </NavigationContainer>
  );
}
