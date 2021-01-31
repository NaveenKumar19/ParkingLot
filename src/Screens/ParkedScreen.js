import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { fetchparkedLot, unpark } from '../core_Module/actions/parked';
import ParkingScreenList from '../Container/ParkingScreenList';
import { strings } from '../resources/index';

class ParkedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleNo: "",
      vehicleType: ""
    }
    this.selectedItem = {};
  }

  async componentDidMount() {

    this.props.fetchparkedLot();
  }

  onSelected = (items) => {
    this.selectedItem = items;
    items ?
      Alert.alert(
        strings.unpark,
        strings.closethebook,
        [{
          text: strings.cancel,
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: strings.ok, onPress: () => this.props.unpark(items) }
        ],
        { cancelable: false }
      ) : null
  }

  render() {
    return (
      <View style={styles.container}>
        <ParkingScreenList
          parkingSpace={this.props.parkedList}
          onClick={this.onSelected}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const mapStateToProps = (state) => {
  const { parkedList, error } = state.parked;
  return { parkedList, error };
};

export default connect(mapStateToProps, { fetchparkedLot, unpark })(ParkedScreen);

