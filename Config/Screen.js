import { View, Text, StatusBar } from "react-native";
import Constants from "expo-constants";
import React from "react";



const Screen = ({style, children}) => {
  return (
    <View
      style={[{
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: 20,
        flex:1
      }, style]}
    >
      {children}
    </View>
  );
};

export default Screen;
