import { View, Text, Touchable, TouchableOpacity, Image } from "react-native";
import React from "react";
import AppText from "../AppText";
import colors from "../../Config/colors";

const SearchCards = ({ image, title, topic, author, date, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        width: "100%",
        overflow: "hidden",
        marginVertical: 7,
        backgroundColor: colors.lightGrey,
        borderRadius: 10,
        paddingRight: 5,
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <View
        style={{
          width: 100,
          height: 110,
          overflow: "hidden",
          borderRadius: 10,
          marginRight: 10,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View style={{ marginTop: 5 }}>
        <AppText style={{ color: colors.medium, fontWeight: "bold" }}>
          {topic}
        </AppText>
        <AppText
          numberOfLines={2}
          style={{
            textAlign: "left",
            maxWidth: "90%",
            fontWeight: "bold",
            fontSize: 19,
            marginVertical: 5,
          }}
        >
          {`${title.length > 40 ? `${title.substring(0, 45)}...` : `${title}`}`}
        </AppText>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AppText style={{ marginRight: 10 }}>By:{author} {"  "}-</AppText>
          <AppText>
            On: {date.slice(0,10)}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchCards;
