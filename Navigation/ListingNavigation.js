import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListingScreen from '../Screens/ListingScreen'
import ListingDetailsScreen from '../Screens/ListingDetailsScreen'


const Stack = createNativeStackNavigator()
const ListingNavigation = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name='ListingScreen' component={ListingScreen}/>
     <Stack.Screen name='ListingDetailsScreen' component={ListingDetailsScreen}/>
   </Stack.Navigator>
  )
}

export default ListingNavigation