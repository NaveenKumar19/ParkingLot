import AsyncStorage from '@react-native-community/async-storage';
import { BIKE_PARKING_STORAGE, CAR_PARKING_STORAGE, OTHERS_PARKING_STORAGE, CAR, BIKE, OTHERS, FIND_YOUR_VEHICLE } from '../../Constants'




class ParkedService {

    async getParkedDetails() {
        let item = await AsyncStorage.getItem(FIND_YOUR_VEHICLE);
        let result = JSON.parse(item);
        return result;
    }

    async unpark(items) {
        try {
            let value = "";
            let result = "";
            let savedItem = await AsyncStorage.getItem(FIND_YOUR_VEHICLE);
            let savedResult = JSON.parse(savedItem);
            var filteredAry = savedResult.filter(e => e.vehicleNo !== items.vehicleNo);
            switch (items.vehicleType) {
                case CAR:
                    value = await AsyncStorage.getItem(CAR_PARKING_STORAGE);
                    result = await this.operation(JSON.parse(value), items)
                    await AsyncStorage.removeItem(CAR_PARKING_STORAGE);
                    await AsyncStorage.setItem(CAR_PARKING_STORAGE, JSON.stringify(result));
                    await AsyncStorage.removeItem(FIND_YOUR_VEHICLE);
                    await AsyncStorage.setItem(FIND_YOUR_VEHICLE, JSON.stringify(filteredAry));
                    return await this.getParkedDetails();
                case BIKE:
                    value = await AsyncStorage.getItem(BIKE_PARKING_STORAGE);
                    result = await this.operation(JSON.parse(value), items)
                    await AsyncStorage.removeItem(BIKE_PARKING_STORAGE);
                    await AsyncStorage.setItem(BIKE_PARKING_STORAGE, JSON.stringify(result));
                    await AsyncStorage.removeItem(FIND_YOUR_VEHICLE);
                    await AsyncStorage.setItem(FIND_YOUR_VEHICLE, JSON.stringify(filteredAry));
                    return await this.getParkedDetails();
                case OTHERS:
                    value = await AsyncStorage.getItem(OTHERS_PARKING_STORAGE);
                    result = await this.operation(JSON.parse(value), items)
                    await AsyncStorage.removeItem(OTHERS_PARKING_STORAGE);
                    await AsyncStorage.setItem(OTHERS_PARKING_STORAGE, JSON.stringify(result));
                    await AsyncStorage.removeItem(FIND_YOUR_VEHICLE);
                    await AsyncStorage.setItem(FIND_YOUR_VEHICLE, JSON.stringify(filteredAry));
                    return await this.getParkedDetails();
                default:
                    return null
            }
        } catch (e) {

        }
    }


    operation(result, items) {
        try {
            let newState = [];
            if (items.isparked) {
                newState = result.map(obj =>
                    obj.id === items.id ? { ...obj, isparked: false, vehicleNo: null, vehicleType: null } : obj
                );
            }
            return newState;
        } catch (e) {

        }
    }

}
export default new ParkedService();