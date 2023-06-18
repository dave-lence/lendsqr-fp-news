import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";


import colors from "../../Config/colors";
import AppText from "../AppText";

const ListingsCard = ({ image, topic, title, author, date, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor: colors.lightGrey,
        borderRadius: 10,
        marginVertical: 10,
      }}
      onPress={onPress}
    >
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={{ width: "100%", height: 200, borderRadius: 10 }}
        />
        <View
          style={{
            position: "absolute",
            backgroundColor: colors.black,
            padding: 7,
            borderRadius: 10,
            bottom: 10,
            right: 10,
          }}
        >
          <AppText style={{ fontWeight: "bold", color: colors.white }}>
            {topic}
          </AppText>
        </View>
      </View>

      <View style={{ padding: 10 }}>
        <AppText
          style={{ fontWeight: "bold", fontSize: 20, color: colors.black }}
        >
          {title}
        </AppText>
        <AppText
          style={{ fontWeight: "500", fontSize: 15, color: colors.medium, marginVertical:7 }}
        >
          Posted on: {date}
        </AppText>
        <AppText
          style={{ fontWeight: "500", fontSize: 15, color: colors.medium }}
        >
         By:{author}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default ListingsCard;
