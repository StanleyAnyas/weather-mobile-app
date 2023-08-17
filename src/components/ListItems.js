import React from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types';
import { RenderItemsStyles } from '../../assets/styles/style';
import { Feather } from '@expo/vector-icons';

const RenderItems = (props) => {
    const { dt_txt, main, weather } = props;
    const { description } = weather[0];
    const { temp_min, temp_max } = main;

    const descriptionIcon = () => {
        switch (description) {
            case 'Cloudy':
                return <Feather name="cloud" size={50} color="black" />;
            case 'Sunny':
                return <Feather name="sun" size={50} color="black" />;
            case 'Rainy':
                return <Feather name="cloud-rain" size={50} color="black" />;
            default:
                return <Feather name="sun" size={50} color="black" />;
        }
    };
    const { container, date, temp, descrip } = RenderItemsStyles;
    return (
        <View style={container}>
            { descriptionIcon() }
            <Text style={date}>{ dt_txt }</Text>
            {/* <Text style={RenderItemsStyles.temp}>{ temp }</Text> */}
            {/* <Text style={RenderItemsStyles.temp}>{ feels_like }</Text> */}
            <Text style={temp}>{ temp_min }</Text>
            <Text style={temp}>{ temp_max }</Text>
            <Text style={descrip}>{ description }</Text>
        </View>
    );
}
export default RenderItems;

RenderItems.propTypes = {
    dt_txt: PropTypes.string.isRequired,
    main: PropTypes.shape({
        temp: PropTypes.number.isRequired,
        feels_like: PropTypes.number.isRequired,
        temp_min: PropTypes.number.isRequired,
        temp_max: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string.isRequired,
    })).isRequired,
};