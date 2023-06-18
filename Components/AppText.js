import { View, Text } from "react-native";
import React from "react";

const AppText = ({ style, children, numberOfLines }) => {
  return (
    <>
      <Text
        style={[
          {
            fontFamily: Platform.OS === "android" ? "sans-serif" : "Avenir",
          },
          style,
        ]}
        numberOfLines={numberOfLines}
      >
        {children}
      </Text>
    </>
  );
};

export default AppText;
