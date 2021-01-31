import AsyncStorage from '@react-native-community/async-storage';
import { BIKE_PARKING_STORAGE, CAR_PARKING_STORAGE, OTHERS_PARKING_STORAGE, CAR, BIKE, OTHERS, FIND_YOUR_VEHICLE } from '../../Constants'


class ParkingService {
    async getParkingDetails(vehicleType) {
        let value = "";
        let result = "";
        try {
            switch (vehicleType) {
                case CAR:
                    value = await AsyncStorage.getItem(CAR_PARKING_STORAGE);
                    result = JSON.parse(value);
                    return result;
                case BIKE:
                    value = await AsyncStorage.getItem(BIKE_PARKING_STORAGE);
                    result = JSON.parse(value);
                    return result;
                case OTHERS:
                    value = await AsyncStorage.getItem(OTHERS_PARKING_STORAGE);
                    result = JSON.parse(value);
                    return result;
                default:
                    return null
            }
        }
        catch (e) {
        }
    }

    async parkSlot(vehicleType, items, vehicleNo) {
        let value = "";
        let result = '';
        try {
            switch (vehicleType) {
                case CAR:
                    value = await AsyncStorage.getItem(CAR_PARKING_STORAGE);
                    result = await this.operation(JSON.parse(value), items, vehicleNo, vehicleType)
                    await AsyncStorage.removeItem(CAR_PARKING_STORAGE);
                    await AsyncStorage.setItem(CAR_PARKING_STORAGE, JSON.stringify(result));
                    await this.savedData()
                    return await this.getParkingDetails(vehicleType);
                case BIKE:
                    value = await AsyncStorage.getItem(BIKE_PARKING_STORAGE);
                    result = await this.operation(JSON.parse(value), items, vehicleNo, vehicleType)
                    await AsyncStorage.removeItem(BIKE_PARKING_STORAGE);
                    await AsyncStorage.setItem(BIKE_PARKING_STORAGE, JSON.stringify(result));
                    await this.savedData()
                    return await this.getParkingDetails(vehicleType);
                case OTHERS:
                    value = await AsyncStorage.getItem(OTHERS_PARKING_STORAGE);
                    result = await this.operation(JSON.parse(value), items, vehicleNo, vehicleType)
                    await AsyncStorage.removeItem(OTHERS_PARKING_STORAGE);
                    await AsyncStorage.setItem(OTHERS_PARKING_STORAGE, JSON.stringify(result));
                    await this.savedData()
                    return await this.getParkingDetails(vehicleType);
                default:
                    return null
            }


        }
        catch (e) {

        }
    }

    async getParkedDetails() {
        let item = await AsyncStorage.getItem(FIND_YOUR_VEHICLE);
        let result = JSON.parse(item);
        return result;
    }

    async unpark(items) {

        try {
            let item = await AsyncStorage.getItem(FIND_YOUR_VEHICLE);
            var filteredAry = item.filter(e => e !== items.vehicleType);
            return filteredAry;
        } catch (e) {

        }
    }

    operation(result, items, vehicleNo, vehicleType) {
        try {
            let newState = [];
            if (items.isparked) {
                newState = result.map(obj =>
                    obj.id === items.id ? { ...obj, isparked: false, vehicleNo: vehicleNo, vehicleType: vehicleType } : obj
                );
            } else {
                newState = result.map(obj =>
                    obj.id === items.id ? { ...obj, isparked: true, vehicleNo: vehicleNo, vehicleType: vehicleType } : obj
                );
            }
            return newState;
        } catch (e) {

        }
    }


    async savedData() {
        let savedItem = [];
        await AsyncStorage.getAllKeys(async (err, keys) => {
            await AsyncStorage.multiGet([CAR_PARKING_STORAGE, BIKE_PARKING_STORAGE, OTHERS_PARKING_STORAGE], (err, stores) => {
                stores.map((result, i, store) => {
                    let key = store[i][0];
                    let val = store[i][1];
                    let getResult = JSON.parse(val);
                    let check = getResult.filter((val) => {
                        val.isparked ? savedItem.push(val) : null
                    })
                })
            })
            try {
                await AsyncStorage.setItem(FIND_YOUR_VEHICLE, JSON.stringify(savedItem))
            } catch (e) {
            }
        })
    }
}
export default new ParkingService();