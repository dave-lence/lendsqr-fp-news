import { View, Text } from "react-native";
import React from "react";

const AppText = ({ style, children }) => {
  return (
    <>
      <Text
        style={[
          { 
            fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir",
          },
          style,
        ]}
      >
        {children}
      </Text>
    </>
  );
};

export default AppText;
