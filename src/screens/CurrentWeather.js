/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { CurrentWeatherStyles }  from '../../assets/styles/style';
import { Feather } from '@expo/vector-icons';
import RoleText from '../components/RoleText';
// import { useNavigation } from '@react-navigation/native';
import { weatherType } from '../utilities/weatherType';

const CurrentWeather = () => {
  // const navigation = useNavigation();
  const { wrapper, container, icon, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = CurrentWeatherStyles;
  return (
    <SafeAreaView style={[wrapper, tw`bg-pink-300` ]}> 
      <View style={[container, tw`bg-pink-300` ]}>
        <Feather style={icon} name="sun" size={80} color="black" />
        <RoleText RoleStyles={temp} BodyText="10" />
        <RoleText RoleStyles={feels} BodyText="Feels like: 8" />
        <View style={highLowWrapper}>
            <RoleText RoleStyles={highLow} BodyText="High: 10" />
            <RoleText RoleStyles={highLow} BodyText="Low: 4" />
        </View>
      </View>
      <View style={[bodyWrapper, tw`bg-pink-300`]}>
        <RoleText RoleStyles={description} BodyText="Sunny" />
        <RoleText RoleStyles={message} BodyText={weatherType["Thunderstorm"].message} />
      </View>
    </SafeAreaView>
  );
}

export default CurrentWeather;