import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}        options={{
    tabBarIcon: ({ color, size }) => (
      <AntDesign name="home" size={24} color="black" />
    ),
  }}/>
        <Tab.Screen name="List" component={UserScreen}   options={{
    tabBarIcon: ({ color, size }) => (
      <Entypo name="list" size={24} color="black" />
    ),
  }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}