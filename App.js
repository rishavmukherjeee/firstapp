import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen.js';
//import LoginScreen from './screens/LoginScreen.js';
const Stack = createStackNavigator();


export default function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator  initialRouteName="LoginScreen">
    <Stack.Screen  name="LoginScreen" options={{headerShown: false}} component={LoginScreen} />
      
    <Stack.Screen  name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
     
    </Stack.Navigator>
  </NavigationContainer>);}

