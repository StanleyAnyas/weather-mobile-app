import { useState, useEffect } from 'react';
import { API_KEY } from '@env';
import * as Location from 'expo-location';

export const useGetWeather = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    let API_Weather_KEY = API_KEY;
    let API_URL = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';

    const getWeather = async (latitude, longitude) => {
    let url = API_URL.replace('{lat}', latitude).replace('{lon}', longitude).replace('{API key}', API_Weather_KEY);
    let response = await fetch(url);
    let json = await response.json();
    return json;
    }

    useEffect(() => {
    (async () => {
        try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg("Permission to access location was denied");
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;

        if(location) {
            getWeather(latitude, longitude).then((data) => {
            setWeatherData(data);
            setIsLoading(false);
            }).catch((error) => {
            setErrorMsg("Something went wrong. Please try again later. " + error);
            setIsLoading(true);
            });
        }
        } catch (error) {
        setErrorMsg("Something went wrong. Please try again later. " + error);
        } finally {
        setIsLoading(false);
        }
    })();
    return () => {
        setErrorMsg(null);
    }
    }, []);

    if (errorMsg) {
    console.log(errorMsg);
    }
    return [weatherData, isLoading, errorMsg];
}