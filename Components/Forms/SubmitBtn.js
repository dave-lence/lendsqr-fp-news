import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

import colors from "../../Config/colors";

const SubmitButton = ({
  title,
  backgroundColor = colors.primary,
  width = "100%",
}) => {

    const {handleSubmit, resetForm} = useFormikContext()


  return (
    <TouchableOpacity
      style={{
        padding: 10,
        width: width,
        backgroundColor: backgroundColor,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
      onPress={handleSubmit}
      activeOpacity={0.7}
    >
      <Text style={{ color: colors.white, fontWeight: "500", fontSize: 20 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
