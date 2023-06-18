import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListingScreen from '../Screens/ListingScreen'
import ListingDetailsScreen from '../Screens/ListingDetailsScreen'
import Routes from './Routes'


const Stack = createNativeStackNavigator()
const ListingNavigation = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name={Routes.listings} component={ListingScreen}/>
     <Stack.Screen name={Routes.listingsDetails} component={ListingDetailsScreen}/>
   </Stack.Navigator>
  )
}

export default ListingNavigation