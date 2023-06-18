import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ListingDetailsScreen from '../Screens/ListingDetailsScreen'
import SearchScreen from '../Screens/SearchScreen'


const Stack = createNativeStackNavigator()
const SearchNavigation = () => {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
     <Stack.Screen name='SearchScreen' component={SearchScreen}/>
     <Stack.Screen name='ListingDetailsScreen' component={ListingDetailsScreen}/>
   </Stack.Navigator>
  )
}

export default SearchNavigation