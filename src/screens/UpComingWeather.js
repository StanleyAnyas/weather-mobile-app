/* eslint-disable no-undef */
import React from 'react';
import { View, SafeAreaView, FlatList, ImageBackground } from 'react-native';
import { UpComingWeatherStyles, backGroundImage } from '../../assets/styles/style';
import RenderItems from '../components/ListItems';
// import { useNavigation } from '@react-navigation/native';

const data = [
    {
        dt_txt: '2021-03-01 12:00:00',
        main: {
            temp: 15,
            feels_like: 15,
            temp_min: 10,
            temp_max: 19,
        },
        weather: [
            {
                description: 'Cloudy',
            },
        ]
    },
    {
        dt_txt: '2021-03-01 15:00:00',
        main: {
            temp: 13,
            feels_like: 19,
            temp_min: 7,
            temp_max: 15,
        },
        weather: [
            {
                description: 'Sunny',
            },
        ]
    },
    {
        dt_txt: '2021-03-01 18:00:00',
        main: {
            temp: 8,
            feels_like: 8,
            temp_min: 5,
            temp_max: 13,
        },
        weather: [
            {
                description: 'Rainy',
            },
        ]
    },
];
const UpComingWeather = () => {
    // const navigation = useNavigation();
  return (
    <SafeAreaView style={[UpComingWeatherStyles.container]}>
        <ImageBackground source={require("../../assets/sky.jpg")} resizeMode='cover' style={[backGroundImage.container]}>
            <View style={UpComingWeatherStyles.container}>
                <FlatList
                    data={ data }
                    renderItem={ ({ item }) => <RenderItems { ...item } /> }
                    keyExtractor={ (item) => item.dt_txt }
                />
            </View>
        </ImageBackground>
    </SafeAreaView>
  );
}

export default UpComingWeather;