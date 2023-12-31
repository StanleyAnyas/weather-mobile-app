/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { CurrentWeatherStyles }  from '../../assets/styles/style';
// import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import RoleText from '../components/RoleText';
// import { useNavigation } from '@react-navigation/native';
import { weatherType } from '../utilities/weatherType';
import PropTypes from 'prop-types';

const CurrentWeather = (props) => {
  const { weatherData } = props
  // console.log("weatherData", weatherData);

  const temp = weatherData.main.temp;
  const feels_like = weatherData.main.feels_like;
  const temp_min = weatherData.main.temp_min;
  const temp_max = weatherData.main.temp_max;

  const temp_celsius = (temp - 273.15).toFixed(0);
  const feels_like_celsius = (feels_like - 273.15).toFixed(0);
  const temp_min_celsius = (temp_min - 273.15).toFixed(0);
  const temp_max_celsius = (temp_max - 273.15).toFixed(0);

  let weatherTypedes = weatherData.weather[0].description;
  if (weatherTypedes === 'broken clouds') {
    weatherTypedes = 'BrokenClouds'
  }
  let des = weatherData.weather[0].description;
  const capitalisedDescription = des.charAt(0).toUpperCase() + des.slice(1);
  
  const iconNames = weatherType[weatherTypedes].iconName;
  const background = weatherType[weatherTypedes].background;

  const { wrapper, container, icon, tempp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = CurrentWeatherStyles;
  return (
    <SafeAreaView style={[wrapper, tw`bg-pink-300`, { backgroundColor: background }]}>
      <View style={[container, tw`bg-pink-300`, { backgroundColor: background }]}>
        <Ionicons name={iconNames} style={icon} size={80} color="black" />
        <RoleText RoleStyles={tempp} BodyText={`${temp_celsius}°C`} />
        <RoleText RoleStyles={feels} BodyText={`Feels like ${feels_like_celsius}°C`} />
        <View style={highLowWrapper}>
            <RoleText RoleStyles={highLow} BodyText={`High: ${temp_max_celsius}°C`} />
            <RoleText RoleStyles={highLow} BodyText={`Low: ${temp_min_celsius}°C`} />
        </View>
      </View>
      <View style={[bodyWrapper, tw`bg-pink-300`, { backgroundColor: background }]}>
        <RoleText RoleStyles={description} BodyText={capitalisedDescription} />
        <RoleText RoleStyles={message} BodyText={weatherType[weatherTypedes].message} />
      </View>
    </SafeAreaView>
  );
}

export default CurrentWeather;

CurrentWeather.propTypes = {
  weatherData: PropTypes.object.isRequired,
};