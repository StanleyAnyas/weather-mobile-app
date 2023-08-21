/* eslint-disable no-undef */
import React from "react";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import { CityStyles } from '../../assets/styles/style';
import IconText from "../components/IconText";
import PropTypes from 'prop-types';

const City = (props) => {
    const { weatherData } = props;
    console.log(weatherData);
    
    const populationString = weatherData.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // get the time from sunrise
    const sunrise_time = new Date(weatherData.sunrise * 1000).toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
      });
    const sunset_time = new Date(weatherData.sunset * 1000).toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
    });
    const { container, image, cityName, countryName, sunRiseWrapper, population, sunRiseText, sunSetText, populationNumber } = CityStyles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={image}>
                <View style={ {flex: 1}} >
                    <Text style={cityName}> {weatherData.country} </Text>
                    <Text style={countryName}> {weatherData.name} </Text>	
                    <View style={population}>
                        <IconText IconName={"user"} IconColor={"red"} BodyText={ populationString } BodyStyle={populationNumber} />
                    </View>
                    <View style={sunRiseWrapper}>
                        <IconText IconName={"sunrise"} IconColor={"red"} BodyText={ sunrise_time } BodyStyle={sunRiseText} />
                        <IconText IconName={"sunset"} IconColor={"red"} BodyText={ sunset_time } BodyStyle={sunSetText} />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default City;

City.propTypes = {
    weatherData: PropTypes.object.isRequired,
};