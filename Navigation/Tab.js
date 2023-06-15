import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingScreen from "../Screens/ListingScreen";
import colors from "../Config/colors";
import ListingNavigation from "./ListingNavigation";

const BottomTab = createBottomTabNavigator();
const Tab = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.medium,
        tabBarItemStyle: { paddingBottom: 10 },
        tabBarStyle: { height: 60 },
      }}
    >
      <BottomTab.Screen
        name="Listings"
        component={ListingNavigation}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          title: "Feeds",
          headerShown:false
        }}
      />
      <BottomTab.Screen
        name="ListScreen"
        component={ListingScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.white,
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="text-search"
                size={40}
                color={color}
              />
            </View>
          ),
          title: "Search",
          headerShown:false
        }}
      />
      <BottomTab.Screen
        name="Listing"
        component={ListingScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          title: "Account",
          headerShown:false
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tab;
