import React from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types';

const RoleText = (props) => {
    const { BodyText, RoleStyles } = props;
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={RoleStyles}>{BodyText}</Text>
        </View>
    );
}

export default RoleText;

RoleText.propTypes = {
    BodyText: PropTypes.string.isRequired,
    RoleStyles: PropTypes.object.isRequired,
};