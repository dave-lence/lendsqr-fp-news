import { View, Text, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingScreen from "../Screens/ListingScreen";
import colors from "../Config/colors";
import ListingNavigation from "./ListingNavigation";
import AccountScreen from "../Screens/AccountScreen";
import SearchNavigation from "./SearchNavigation";
import Routes from "./Routes";

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
        name="ListingNavigator"
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
        name="Search"
        component={SearchNavigation}
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
                ...Platform.select({
                  ios: {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.5,
                    shadowRadius: 4,
                  },
                  android: {
                    elevation: 4,
                  },
                }),
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
        name="Account"
        component={AccountScreen}
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
