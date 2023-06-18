import { View, Text, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";


// custom files
import colors from "../../Config/colors";


const SearchInput = ({onChangeText}) => {


  return (
    <View
      style={{
        backgroundColor: colors.lightGrey,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderRadius: 30,
        marginTop:30
      }}
    >
      <TextInput
        style={{ flex: 1, color: colors.medium }}
        placeholder="Search here"
        placeholderTextColor={colors.medium}
        onChangeText={onChangeText}
     
      />

      <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
    </View>
  );
};

export default SearchInput;
