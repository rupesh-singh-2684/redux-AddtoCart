import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {screen}from '../navigator/screenNames'
import ProductList from '../screens/home'
import FavouriteList from '../screens/favourite'
import CartList from '../screens/cart'

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name={screen.Home}
      component={ProductList}
      options={{headerShown:false}}/>
      <Stack.Screen 
      name={screen.Fav}
      component={FavouriteList}
      options={{headerShown:false}}/>
      <Stack.Screen 
      name={screen.Cart}
      component={CartList}
      options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default StackNavigation