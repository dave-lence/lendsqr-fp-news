import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import colors from "../../Config/colors";

const Topics = ({ topic, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.lightGrey,
        padding: 10,
        borderRadius: 10,
        marginRight: 10,
        height: 40,
        marginVertical: 20,
        backgroundColor: onPress ? "#000" : colors.lightGrey,
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text style={{ color: onPress ? colors.white : colors.black }}>
        {topic}
      </Text>
    </TouchableOpacity>
  );
};

export default Topics;
