import React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { car, bike, others } from '../resources/icons/index'
import { CAR, BIKE, OTHERS } from '../Constants'
import { dimens, colors } from '../resources/index';
import { deviceHeight, deviceWidth } from '../utils/index'

const parkCell = (props) => {
    let items = props.parkListItems
    let getImage = (image) => {
        switch (image) {
            case CAR:
                return car
            case BIKE:
                return bike
            case OTHERS:
                return others
            default:
                return null
        }
    }
    return (
        <View style={styles.itemContainer}>
            <Pressable style={styles.subitemContainer} onPress={() => props.onSelection(items)} >
                {items.isparked ? <Image source={getImage(items.vehicleType)} style={styles.imageView} /> : null}
                <Text style={styles.textStyle}>
                    {items.block}
                </Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({

    itemContainer: {
        flex: 1,
    },
    subitemContainer: {
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        margin: 20,
        borderColor: colors.black,
        width: deviceWidth * 0.4,
        height: deviceHeight * 0.15,
        alignItems: 'center',
    },
    textStyle: {
        fontSize: dimens.largeText
    },
    imageView: {
        width: '80%',
        height: '50%',
        marginTop: 5
    }
})

export default parkCell;