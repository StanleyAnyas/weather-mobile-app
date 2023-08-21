import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/components/Tabs';
import ActivityIndicatorComponent from './src/components/ActivityIndicator';
import { useGetWeather } from './src/hooks/useGetWeather';

export default function App() {
  const [weatherData, isLoading, errorMsg] = useGetWeather();

  // console.log(weatherData);
  // console.log(isLoading);
  // console.log(errorMsg);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {isLoading ? (
        <ActivityIndicatorComponent />
      ) : (
        weatherData && <TabNavigator weather={weatherData} />
      )}
    </NavigationContainer>
  );
}
