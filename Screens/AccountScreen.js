import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { clearUser } from "../Redux/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

//custom files
import Screen from "../Config/Screen";
import AppText from "../Components/AppText";
import colors from "../Config/colors";
import ProfileCards from "../Components/Account/ProfileCards";
import Routes from "../Navigation/Routes";

const AccountScreen = ({navigation}) => {

  const dispatch = useDispatch()
 
  const logOut = () => {
     dispatch(clearUser())
     AsyncStorage.removeItem("user")
     navigation.navigate(Routes.logIn)
  }

  return (
    <Screen style={{ paddingHorizontal: 0 }}>
      {/* first part of account screen */}
      <View
        style={{
          backgroundColor: colors.primary,
          padding: 15,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          height: "35%",
        }}
      >
        {/* account header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="arrow-left-thin"
              size={27}
              color={"#fff"}
            />
            <AppText
              style={{
                marginLeft: 10,
                color: colors.white,
                fontWeight: "bold",
                fontSize: 17,
              }}
            >
              Account
            </AppText>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#000",
              opacity: 0.4,
              padding: 6,
              borderRadius: 5,
            }}
          >
            <AppText style={{ color: colors.white, fontWeight: "bold" }}>
              Edit Profile
            </AppText>
          </TouchableOpacity>
        </View>

        {/* image and name part */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <View
            style={{
              borderWidth: 4,
              borderColor: "#fff",
              width: 100,
              height: 100,
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../assets/landing4.jpg")}
              style={{ height: "100%", width: "100%", borderRadius: 30 }}
            />
          </View>
          <AppText
            style={{
              marginTop: 10,
              color: colors.white,
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            John Doe
          </AppText>
          <AppText style={{ marginTop: 5, color: colors.white, fontSize: 14 }}>
            www.JohnDoe@gmail.com
          </AppText>
        </View>
      </View>

      <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
        <ProfileCards name={"lock"} title={"Change Password"} />
        <ProfileCards name={"email"} title={"Email Address"} />
        <ProfileCards name={"phone"} title={"Support"} />
        <ProfileCards name={"logout"} title={"Logout"} onPress={logOut}/>
      </View>
    </Screen>
  );
};

export default AccountScreen;
