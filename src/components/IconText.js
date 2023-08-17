import React from "react";
import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const IconText = (props) => {
    const { IconName, IconColor, BodyText, BodyStyle } = props;

    // const { } = CityStyles;
    return (
        <View style={{ alignItems: 'center' }}>
            <Feather name={IconName} size={44} color={IconColor} />
            <Text style={BodyStyle}>{BodyText}</Text>
        </View>
    );
}

export default IconText;

IconText.propTypes = {
    IconName: PropTypes.string.isRequired,
    IconColor: PropTypes.string.isRequired,
    BodyText: PropTypes.string.isRequired,
    BodyStyle: PropTypes.object.isRequired,
};


