import React, { Component } from 'react';
import { FlatList, View, StyleSheet,SafeAreaView } from 'react-native';
import ParkItem from '../Component/ParkItem'


const ParkingListScreen = (props) => {

  let parkingSpace = props.parkingSpace;
    let {onClick} = props
    return (
        <SafeAreaView style={styles.listContainer}>
            <FlatList data={parkingSpace}
                numColumns={2}
                renderItem={({ item }) => (
                        <ParkItem
                            parkListItems={item}
                            onSelection={(items) => onClick(items)}
                        />  
                )}
                keyExtractor={(item, index) => index.toString()}
            />

        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    listContainer: {
     flex: 1,
    }

})
export default ParkingListScreen;