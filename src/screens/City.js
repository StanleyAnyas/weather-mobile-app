/* eslint-disable no-undef */
import React from "react";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import { CityStyles } from '../../assets/styles/style';
import IconText from "../components/IconText";
// import { useNavigation } from '@react-navigation/native';

const City = () => {
    const { container, image, cityName, countryName, sunRiseWrapper, population, sunRiseText, sunSetText, populationNumber } = CityStyles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city.jpg')} style={image}>
                <View style={ {flex: 1}} >
                    <Text style={cityName}>Helsinki</Text>
                    <Text style={countryName}>Finland</Text>
                    <View style={population}>
                        <IconText IconName={"user"} IconColor={"red"} BodyText={"60000"} BodyStyle={populationNumber} />
                    </View>
                    <View style={sunRiseWrapper}>
                        <IconText IconName={"sunrise"} IconColor={"red"} BodyText={"9:43:21am"} BodyStyle={sunRiseText} />
                        <IconText IconName={"sunset"} IconColor={"red"} BodyText={"18:30:44pm"} BodyStyle={sunSetText} />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default City;