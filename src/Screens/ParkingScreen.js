import React from 'react';
import { StyleSheet, Text, View, Alert, Modal } from 'react-native';
import { connect } from 'react-redux';
import { fetchParkingLot, bookParking } from '../core_Module/actions/parking';
import ParkingScreenList from '../Container/ParkingScreenList';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import TextInputModal from '../Component/TextInputModal';
import {  strings } from '../resources/index';

class ParkingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalvisible: false,
      vehicleNo: "",
      vehicleType: ""
    }
    this.selectedItem = {};
  }

  async componentDidMount() {
    this.setState({ vehicleType: this.props.route.params.items });
    this.props.fetchParkingLot(this.props.route.params.items);
  }

  onSelected = (items) => {
    this.selectedItem = items;
    !items.isparked ? this.setState({ modalvisible: true }) :
      Alert.alert(
        strings.unpark,
        strings.closethebook,
        [
          {
            text: strings.cancel,
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: strings.ok, onPress: () => this.props.bookParking(this.state.vehicleType, items, null) }
        ],
        { cancelable: false }
      );
  }

  modalVehicle = (vehicleNo) => {
    this.setState({
      modalvisible: false,
      vehicleNo
    })
    vehicleNo ? this.props.bookParking(this.state.vehicleType, this.selectedItem, vehicleNo) : null;

  }

  showModal() {
    return (
      <TextInputModal showModal={this.state.modalvisible} closeModal={this.modalVehicle} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ParkingScreenList
          parkingSpace={this.props.parkingList}
          onClick={this.onSelected}
        />
        <TouchableWithoutFeedback
          onPress={() => this.setState({ modalvisible: false })}
        >
          <Modal visible={this.state.modalvisible} transparent={true} style={styles.modalStyle}>
            {this.showModal()}
          </Modal>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => {
  const { parkingList, error } = state.parking;
  return { parkingList, error };
};

export default connect(mapStateToProps, { fetchParkingLot, bookParking })(ParkingScreen);

