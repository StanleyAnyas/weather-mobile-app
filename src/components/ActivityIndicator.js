import React from "react";
import { View, ActivityIndicator } from "react-native";

const ActivityIndicatorComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color="tomato" />
        </View>
    );
}

export default ActivityIndicatorComponent;