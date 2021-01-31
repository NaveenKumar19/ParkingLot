import React from 'react';
import { StyleSheet,Text,Pressable,Image} from 'react-native';
import {car,bike,others} from '../resources/icons/index'
import {dimens,colors} from '../resources/index';
import {deviceHeight, deviceWidth} from '../utils/index'

const HomeItem = (props) =>{
  let items = props.parkListItems

  let getImage = (image) => {

    switch (image) {
        case "car":
            return car
        case "bike":
            return bike
            break;
        case "others":
            return others
        default:
            return null

    }
}
    return(
        <Pressable onPress={() => props.onSelection(items.name)} style={styles.itemContainer}>
            <Image source={getImage(items.image)} style={styles.imageView}/>
            <Text style={styles.textContainer}>{items.name} </Text>
        </Pressable>
    )

}

const styles = StyleSheet.create({
    itemContainer:{
        flexDirection:'column',
        alignItems:'center',
        width:deviceWidth*0.25,
        height:deviceHeight*0.15,
        borderRadius:dimens.tinyText,
        borderWidth:1,
        borderColor:colors.black,
        margin:8
    },
    imageView:{
        width:'80%',
        height:'50%',
        marginTop:10
        },
     textContainer:{
        color:colors.black,
        fontSize:dimens.mediumText,
        padding:20
     }   
})

export default HomeItem;