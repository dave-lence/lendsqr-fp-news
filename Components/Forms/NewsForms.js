import { View, Text, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// custom files
import colors from "../../Config/colors";

const NewsForms = ({ onPress,iconName, password, eyeIcon, ...inputProps }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: colors.lightGrey,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        marginVertical: 10,
      }}
    >
      <MaterialCommunityIcons name={iconName} size={24} color={colors.medium} />
      <TextInput
        style={{ color: colors.medium, flex: 1, marginLeft: 10 }}
        {...inputProps}      
      />
      {password && (
        <MaterialCommunityIcons name={eyeIcon} size={24} color={colors.medium} onPress={onPress} />
      )}
    </View>

  );
};

export default NewsForms;
