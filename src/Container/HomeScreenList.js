import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import {getHomeScreenData} from '../Config'
import HomeItem from '../Component/HomeItem'

const HomeScreenList = (props) => {
    const homeScreenData = getHomeScreenData();
    let {onClick} = props
    return (
        <View style={styles.listContainer}>
            <FlatList data={homeScreenData}
                horizontal={true}
                renderItem={({ item }) => (
                    <View>
                        {<HomeItem
                            parkListItems={item}
                            onSelection={(items) => onClick(items)}
                        />}
                    </View>
                )}
                keyExtractor={ParkingListData => ParkingListData.id.toString()}
            />

        </View>
    )

}
const styles = StyleSheet.create({
    listContainer: {
     flex: 1
    }

})
export default HomeScreenList;
