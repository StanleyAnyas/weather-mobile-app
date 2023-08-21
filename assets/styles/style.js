import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export const CurrentWeatherStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    wrapper: {
      flex: 1,
    },
    tempp: {
      fontSize: 40,
      color: 'black',
    },
    feels: {
      fontSize: 30,
      color: 'black',
    },
    highLow: {
      fontSize: 20,
      color: 'black',
      marginRight: 20,
    },
    highLowWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '60%',
    },
    bodyWrapper: {
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
      paddingLeft: 20,
      marginBottom: 20,
    },
    description: {
      fontSize: 40,
      color: 'black',
    },
    message: {
      fontSize: 30,
      color: 'black',
    },
    icon: {
      paddingTop: 12,
    }
  });

  export const AppStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'skyblue',
    },
    wrapper: {
      flex: 1,
    }
  });

  export const UpComingWeatherStyles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

  export const RenderItemsStyles = StyleSheet.create({
    container: {
      fontSize: 20,
      paddingTop: 20,
      marginHorizontal: 20,
      flexDirection: 'row',
      marginVertical: 10,
      borderColor: 'black',
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 10,
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      alignItems: 'center',
    },
    date: {
      color: 'black',
    },
    temp: {
      fontSize: 20,
      color: 'black',
    },
    descrip: {
      fontSize: 20,
      color: 'black',
    },
  });
  export const backGroundImage = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: "cover",
      marginTop: StatusBar.currentHeight || 0,
    },
  });
  export const CityStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'skyblue',
      marginTop: StatusBar.currentHeight || 0,
    },
    image:{
      flex: 1,
      width: '100%',
      height: '100%',
    },
    cityName: {
      fontSize: 40,
      justifyContent: 'center',
      alignSelf: 'center',
      fontWeight: 'bold',
      color: 'white',
    },
    countryName: {
      fontSize: 30,
      justifyContent: 'center',
      alignSelf: 'center',
      fontWeight: 'bold',
      color: 'white',
    },
    population: {
      fontSize: 20,
      justifyContent: 'center',
      fontWeight: 'bold',
      color: 'white',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 30,
    },
    populationNumber: {
      fontSize: 40,
      marginLeft: 10,
      color: 'white',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    sunRiseWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 10,
      alignItems: 'center',
      alignSelf: 'center',
    },
    sunRiseText: {
      fontSize: 25,
      color: 'white',
      marginRight: 20,
    },
    sunSetText: {
      fontSize: 25,
      color: 'white',
    },
  });