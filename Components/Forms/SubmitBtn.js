import { View, Text, TouchableOpacity, Animated, ActivityIndicator } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import { useState } from "react";

import colors from "../../Config/colors";

const SubmitButton = ({
  title,
  backgroundColor = colors.primary,
  width = "100%",
}) => {
  const { handleSubmit, resetForm } = useFormikContext();
  const [loading, setLoading] = useState(false);

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
      onPress={() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false)
          handleSubmit();
        }, 3000);
      }}
      activeOpacity={0.7}
    >
      <Text style={{ color: colors.white, fontWeight: "500", fontSize: 20 }}>
        {loading ? (
          <ActivityIndicator color={"#fff"}/>
        ) : (
          title
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
