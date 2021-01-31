import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {dimens,colors} from '../resources/index';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.buttonTextStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};


const styles = {
  buttonStyle: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    width:'100%',
    borderRadius:10,
    borderWidth:1,
    borderColor:colors.black,
    margin:4
  },
  buttonTextStyle: {
    color: colors.lightblue,
    fontSize: dimens.largeText,
    fontWeight: '600',
    alignItems: 'center',
    padding: 10,

  }
};

export default Button;