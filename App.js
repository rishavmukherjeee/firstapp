/*import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}

>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell"
             color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Feed">
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{ drawerLabel: 'Updates' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
    </Drawer.Navigator>
  );
}
function DO(){
  return(<NavigationContainer>
    <MyDrawer/>
  </NavigationContainer>);
}
export default function App() {
  DO();
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}*/


import React from 'react';
import { Button, Image, View, Text ,StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import UserProfileView from './profile.js';
import './authen.js';
const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  img:{
   
    width: 660,
    height: 580,
  }
});
const Tab = createBottomTabNavigator();
function HomeScreen() {
  return (<Authen/>
    /*
    <Tab.Navigator
    
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName= "home";
   //  if (route.name === 'Welcome To Drone Detection Alert System') {
       // iconName = {focused? 'home ' : 'md-home'}
       if (route.name === 'About') {
        iconName = focused
        ? 'document-text-outline'
        : 'list-outline';
      }
return <Ionicons name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor:  '#f18a85',
      inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="Home" component={TabAScreen} options={{headerShown: false}} />
        <Tab.Screen name="About" component={TabBScreen}  />
    </Tab.Navigator>*/
  );
}
function AlertScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.titleText}>Alert !!   Drone Detected</Text>
      <Image style={styles.img}
        source={require('./drone.jpg')}
      />
      <Text  style={styles.titleText}>Location: </Text>
      <Text  style={styles.titleText}>Direction:  Preceding towards Cam3</Text>
    </View>
  );
}
function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>No New Notifications!</Text>
      <Button 
      onPress={() => navigation.goBack()}
      title="Go back home"
      />
    </View>
  );
}
function ProfileScreen({ navigation }) {
  return (<UserProfileView/>

    /*<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={styles.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png'}}
      />
      <Text>No New Notifications!</Text>
      <Button 
      //onPress={() => navigation.goBack()}
      title="Go back home"
      />
    </View>
    */
  );
}
const Stack = createStackNavigator();
function TabAScreen() {
  return (
    <Stack.Navigator style={ {flex:1, alignItems: 'center', justifyContent: 'center', }} >
      <Stack.Screen  name="A" component={TabADetailsScreen} options={{headerShown: false}}/>
      <Stack.Screen name="TabA Details" component={Details} />
    </Stack.Navigator>
  );
}
function TabADetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text style={styles.titleText}>
        Welcome to Drone Detection Alert System!
        
      </Text>
      <Button 
      onPress={() => navigation.navigate('TabA Details')}
      title="Expand"
      />
    </View>
  );
}

  
function Details() {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        TabA Details here!
      </Text>
    </View>
  );
}
function TabBScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Welcome to TabB page!
      </Text>
    </View>
  );
}
const Drawer = createDrawerNavigator();
export default  function App() {
  return ( 
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
      
        <Drawer.Screen name="Home" component={HomeScreen } options={{ drawerIcon: ({focused, size}) => (<Ionicons name="md-home" size={size} color={focused ? '#7cc' : '#ccc'}></Ionicons>)}}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{ drawerIcon: ({focused, size}) => (<Ionicons name="person" size={size} color={focused ? '#7cc' : '#ccc'}></Ionicons>)}}/>
        <Drawer.Screen name="Alert" component={AlertScreen} options={{ drawerIcon: ({focused, size}) => (<Ionicons name={focused?'alert':"notifications"} size={size} color={focused ? '#7cc' : '#ccc'}></Ionicons>)}}/>
        <Drawer.Screen name="Feed" component={FeedScreen} options={{ drawerIcon: ({focused, size}) => (<Ionicons name="eye-outline" size={size} color={focused ? '#7cc' : '#ccc'}></Ionicons>)}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
};
