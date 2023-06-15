import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import colors from "../Config/colors";

const Button = ({
  title,
  backgroundColor = colors.primary,
  onPress,
  width = "100%",
}) => {

 

  return (
    <TouchableOpacity
      style={{
        padding: 10,
        width: width,
        backgroundColor: backgroundColor,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={{ color: colors.white, fontWeight: "500", fontSize: 20 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
