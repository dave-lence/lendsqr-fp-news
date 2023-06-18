import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//custom files
import Screen from "../Config/Screen";
import colors from "../Config/colors";
import AppText from "../Components/AppText";

const ListingDetailsScreen = ({ navigation, route }) => {
  const item = route.params;

  // console.log(item)
  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      <ScrollView>
        {/* heading */}
        <View>
          <Image
            source={{uri:item.media}}
            style={{ height: 450, width: "100%" }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: colors.white,
              position: "absolute",
              top: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
              left: 10,
            }}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <MaterialCommunityIcons
              name="arrow-left-thin"
              size={24}
              color={"#000"}
            />
          </TouchableOpacity>

          <View
            style={{ position: "absolute", top: 220, paddingHorizontal: 30 }}
          >
            <View
              style={{
                backgroundColor: colors.medium,
                opacity: 0.9,
                padding: 10,
                borderRadius: 15,
                position: "absolute",
                top: -40,
                left: 30,
              }}
            >
              <AppText style={{ color: colors.white, fontWeight: "bold" }}>
                {item.topic}
              </AppText>
            </View>

            <AppText
              style={{ color: colors.white, fontWeight: "bold", fontSize: 25 }}
            >
              {item.title}
            </AppText>
            <AppText
              style={{
                color: colors.lightGrey,
                fontWeight: "500",
                fontSize: 16,
              }}
            >
             {item.summary.slice(0, 75)}
            </AppText>
          </View>
        </View>

        {/*  article */}
        <View
          style={{
            marginTop: -40,
            backgroundColor: colors.white,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            padding: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colors.black,
                padding: 6,
                borderRadius: 20,
              }}
            >
              <Image
                style={{ width: 30, height: 30, borderRadius: 25 }}
                source={{uri:item.media_content[4]}}
              />
              <AppText
                style={{
                  fontSize: 17,
                  marginLeft: 10,
                  fontWeight: "500",
                  color: colors.white,
                }}
              >
                {item.author}
              </AppText>
            </View>
            <AppText style={{ color: colors.medium }}>{item.published_date}</AppText>
          </View>

          <View style={{ marginTop: 30 }}>
            <AppText
              style={{
                color: colors.medium,
                fontWeight: "600",
              }}
            >
              {item.summary}
            </AppText>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ListingDetailsScreen;
