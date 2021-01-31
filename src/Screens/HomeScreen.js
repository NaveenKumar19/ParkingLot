import React from 'react';
import { StyleSheet, Text, View, BackHandler } from 'react-native';
import HomeScreenList from '../Container/HomeScreenList';
import AsyncStorage from '@react-native-community/async-storage';
import { FIND_YOUR_VEHICLE } from '../Constants'
import Button from '../Component/Button'
import { dimens, strings, colors } from '../resources/index';
import { deviceHeight } from '../utils/index'

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this._unsubscribeSiFocus = this.props.navigation.addListener('focus', e => {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    });
    this._unsubscribeSiBlur = this.props.navigation.addListener('blur', e => {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    });
  }

  componentWillUnmount() {
    this._unsubscribeSiFocus();
    this._unsubscribeSiBlur();
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  handleBackButton() {
    BackHandler.exitApp();
  }


  onSelected = (items) => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    this.props.navigation.navigate(strings.parkingNav, { items })
  }

  findVehicle = async () => {
    let item = await AsyncStorage.getItem(FIND_YOUR_VEHICLE)
    item ? this.props.navigation.navigate(strings.parkedNav) : null
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer} >
          <Text style={styles.textStyle} >{strings.parkingMadeEasy} </Text>
        </View>
        <View style={styles.listContainer}>
          <HomeScreenList
            onClick={this.onSelected} />
        </View>
        <View style={styles.findContainer}>
          <Button onPress={this.findVehicle}>{strings.findMyVehicle}</Button>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"

  },
  textContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: dimens.veryHugeText
  },
  listContainer: {
    flex: 2
  },
  findContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: deviceHeight * 0.05,
  }


})

export default HomeScreen;