import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  View
} from "react-native";
import {dimens,colors,strings} from '../resources/index';
import {deviceHeight, deviceWidth} from '../utils/index'


const TextInputModal = (props) => {
  const [modalVisible, setModalVisible] = useState(props.showModal);
  const [vehicleNo, setVehicleNo] = useState(null);
  
  return (
    <View style={styles.centeredView}>
        <View style={styles.itemView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{strings.parkingConfirmed}</Text>
            <Text> {strings.entervehicle}</Text>
            <TextInput style={styles.textInputStyle}
            value ={vehicleNo}
            onChangeText={(vehicleNo) =>{setVehicleNo(vehicleNo)}}
            />
            <View style={styles.buttonDivider}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: colors.buttonColor}}
              onPress={() => {
                props.closeModal(null)
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>{strings.cancel}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: colors.buttonColor }}
              onPress={() => {
                props.closeModal(vehicleNo)
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>{strings.proceed}</Text>
            </TouchableHighlight>
            </View>
          </View>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
   flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  itemView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  modalView: {
    height:deviceHeight*0.35,
    width:deviceWidth*0.7,
    margin: 20,
    backgroundColor: colors.white,
    borderRadius: dimens.veryLargeText,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin:5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textInputStyle:{
     borderColor: 'grey', 
     borderWidth: 1,
     height:deviceHeight*0.05,
     width:deviceWidth*0.45,
     margin:10
  },
  buttonDivider:{
    flexDirection:'row',
    margin:10
  }
});

export default TextInputModal;