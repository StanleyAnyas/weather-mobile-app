import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from '@expo/vector-icons';
import CurrentWeather from '../screens/CurrentWeather';
import UpComingWeather from '../screens/UpComingWeather';
import City from '../screens/City';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CurrentWeatherStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={CurrentWeather} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

const UpComingWeatherStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={UpComingWeather} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const CityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" " component={City} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
    return (
        <Tab.Navigator 
          initialRouteName="CityStack"
          screenOptions={{
            tabBarActiveTintColor: 'tomato', // this is the color of the icon when it is active (focused)
            tabBarInactiveTintColor: 'grey', // this is the color of the icon when it is inactive (not focused)
            tabBarActiveBackgroundColor: 'white', // this is the background color of the tab bar
            tabBarStyle: { backgroundColor: 'lightblue' }, // this is the color of the tab bar
            headerStyle: { backgroundColor: 'lightblue' }, // this is the color of the header
            headerTitleStyle: { fontSize: 24, fontWeight: 'bold', color: 'tomato' }, // this is the color of the header title
          }}
        >
          <Tab.Screen name="Current Weather" component={CurrentWeatherStack} options={{ headerShown: true,
            tabBarIcon: ({ focused }) => <Feather name="sun" size={24} color={focused ? 'tomato' : 'grey'} />
            }}  
          />
          <Tab.Screen name="Up Coming Weather" component={UpComingWeatherStack} options={{ headerShown: true,
            tabBarIcon: ({ focused }) => <Feather name="clock" size={24} color={focused ? 'tomato' : 'grey'} />
            }}
          />
          <Tab.Screen name="City" component={CityStack} options={{ headerShown: true, 
            tabBarIcon: ({ focused }) => <Ionicons name="home" size={24} color={focused ? 'tomato' : 'grey'} />
            }}
          />
        </Tab.Navigator>
    );
}

export default TabNavigator;