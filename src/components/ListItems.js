import React from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types';
import { RenderItemsStyles } from '../../assets/styles/style';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const RenderItems = (props) => {
    const { dt_txt, main, weather } = props;
    const { description } = weather[0];

    // change the temp to celsius
    const temp_celsius = (main.temp - 273.15).toFixed(0);

    // minimize the date
    const dt_txt_mini = dt_txt.split(' ')[1];
    // remove the seconds
    const dt_txt_mini_no_sec = dt_txt_mini.split(':').slice(0, 2).join(':');

    const [datePart, timePart] = dt_txt.split(" ");
    const [year, month, day] = datePart.split("-");
    const [incomingHour, incomingMinute] = timePart.split(":").slice(0, 2);

    let time = new Date();
    let today_date = time.getDate();
    let currentHour = time.getHours();
    let currentMinute = time.getMinutes();

    const isToday = Number(year) === time.getFullYear() &&
                    Number(month) === time.getMonth() + 1 &&
                    Number(day) === today_date;

    const isNow = isToday &&
                (Number(incomingHour) < currentHour ||
                (Number(incomingHour) === currentHour && Number(incomingMinute) <= currentMinute));

    const descriptionIcon = () => {
        switch (description) {
            case 'broken clouds':
                return <Feather name="cloud" size={50} color="black" />;
            case 'Clear':
                return <Feather name="sun" size={50} color="black" />;
            case 'Rain':
                return <Feather name="cloud-rain" size={50} color="black" />;
            case 'scattered clouds':
                return <Feather name="cloud" size={50} color="black" />;
            case 'overcast clouds':
                return <Feather name="cloud" size={50} color="black" />;
            case 'clear sky':
                return <Ionicons name="md-sunny" size={50} color="black" />;
            case 'light rain':
                return <Ionicons name="md-rainy" size={50} color="black" />;
            case 'few clouds':
                return <Ionicons name="md-cloudy" size={50} color="black" />;
            default:
                return <Feather name="sun" size={50} color="black" />;
        }
    };
    const { container, date, temp, descrip } = RenderItemsStyles;
    return (
        <View style={container}>
            { descriptionIcon() }
            <Text style={date}>{ isNow ? "Now" : dt_txt_mini_no_sec }</Text>
            <Text style={temp}>{`${temp_celsius}°C`}</Text>
            <Text style={descrip}>{ description }</Text>
        </View>
    );
};

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