/* eslint-disable no-undef */
import React from 'react';
import { View, SafeAreaView, FlatList, ImageBackground } from 'react-native';
import { UpComingWeatherStyles, backGroundImage } from '../../assets/styles/style';
import RenderItems from '../components/ListItems';
import PropTypes from 'prop-types';

const UpComingWeather = (props) => {
    const { weatherData } = props;
    const list = weatherData.list;
  return (
    <SafeAreaView style={[UpComingWeatherStyles.container]}>
        <ImageBackground source={require("../../assets/sky.jpg")} resizeMode='cover' style={[backGroundImage.container]}>
            <View style={UpComingWeatherStyles.container}>
                <FlatList
                    ref={(ref) => { this.flatListRef = ref; }}
                    initialNumToRender={ 7 }
                    data={ list }
                    renderItem={ ({ item }) => <RenderItems { ...item } /> }
                    keyExtractor={ (item) => item.dt_txt }
                />
            </View>
        </ImageBackground>
    </SafeAreaView>
  );
};

export default UpComingWeather;


UpComingWeather.propTypes = {
    weatherData: PropTypes.object.isRequired,
};