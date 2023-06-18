import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../Config/colors";
import AppText from "../AppText";

const ProfileCards = ({ name, title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.lightGrey,
        borderRadius: 10,
        marginVertical: 7,
        overflow: "hidden",
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.medium,
            padding: 20,
          }}
        >
          <MaterialCommunityIcons
            name={name}
            size={25}
            color={colors.primary}
          />
        </View>
        <AppText
          style={{ marginLeft: 10, fontWeight: "bold", color: colors.primary }}
        >
          {title}
        </AppText>
      </View>
      <MaterialCommunityIcons
        name="arrow-right"
        size={25}
        color={colors.primary}
        style={{ marginRight: 20 }}
      />
    </TouchableOpacity>
  );
};

export default ProfileCards;
