// react libraries
import { View, Text, Image } from "react-native";
import React from "react";

// custom files
import Screen from "../Config/Screen";
import colors from "../Config/colors";
import Button from "../Components/Button";
import AppText from "../Components/AppText";
import Routes from "../Navigation/Routes";

const LandingScreen = ({ navigation }) => {
  return (
    <Screen style={{ backgroundColor: colors.white }}>
      <Image
        source={require("../assets/landing5.jpg")}
        style={{
          width: "100%",
          height: "60%",
          borderRadius: 20,
        }}
      />
      <View
        style={{
          marginVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <AppText
          style={{
            fontWeight: "600",
            fontSize: 28,
            textAlign: "center",
          }}
        >
          News from around the world for you
        </AppText>
        <AppText
          style={{
            fontWeight: "400",
            fontSize: 12,
            textAlign: "center",
            color: colors.medium,
            marginTop: 10,
          }}
        >
          Best time to read, take your time to read a little more of this world
        </AppText>
      </View>

      <Button
        title={"Get Started"}
        onPress={() => navigation.navigate(Routes.signUp)}
      />
      <Button
        title={"Sign in"}
        backgroundColor="#000"
        onPress={() => navigation.navigate(Routes.logIn)}
      />
    </Screen>
  );
};

export default LandingScreen;
