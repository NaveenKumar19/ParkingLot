import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text
} from 'react-native';
import {splashScreenBackground} from '../resources/icons/index'
import AsyncStorage from '@react-native-community/async-storage';
import { getParkingLot,getHomeScreenData } from '../Config/index';
import { CAR_PARKING_STORAGE, BIKE_PARKING_STORAGE, OTHERS_PARKING_STORAGE, CAR, BIKE, OTHERS,FIND_YOUR_VEHICLE } from '../Constants';
import {dimens,strings,colors} from '../resources/index'


class SplashScreen extends React.Component {


    async componentDidMount(){
        let value = null;
        try {
          const result = await getParkingLot();
          const homeScreen = await getHomeScreenData();
          homeScreen.map(async (item) => {
            switch (item.name) {
              case CAR:
                value = await AsyncStorage.getItem(CAR_PARKING_STORAGE);
                value == null ? await AsyncStorage.setItem(CAR_PARKING_STORAGE, JSON.stringify(result)) : null
                break;
              case BIKE:
                value = await AsyncStorage.getItem(BIKE_PARKING_STORAGE);
                value == null ? await AsyncStorage.setItem(BIKE_PARKING_STORAGE, JSON.stringify(result)) : null
                break;
              case OTHERS:
                value = await AsyncStorage.getItem(OTHERS_PARKING_STORAGE);
                value == null ? await AsyncStorage.setItem(OTHERS_PARKING_STORAGE, JSON.stringify(result)) : null
                break;
            }
          })
          setTimeout(() =>{
                this.props.navigation.navigate(strings.homeNav)
          },2000)
        }
        catch (e) {

        }
    }

render() {
return (
        <ImageBackground
            source={splashScreenBackground}
            style={styles.containerStyle}
        >
            <Text style={styles.appNameStyle}> {strings.appName}</Text>
        </ImageBackground>
    );
};
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    appNameStyle: {
        fontSize: dimens.hugeText,
        fontWeight: 'bold',
        color: colors.black
    },
});

export default SplashScreen;