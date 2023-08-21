import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/components/Tabs';
import ActivityIndicatorComponent from './src/components/ActivityIndicator';
import { useGetWeather } from './src/hooks/useGetWeather';

export default function App() {
  const [weatherData, isLoading] = useGetWeather();
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
