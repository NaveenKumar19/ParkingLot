import ParkingService from '../service/ParkingService';
import { PARKING_SPACE, NO_PARKING, PARKED_SPACE } from '../../Constants'


export const fetchParkingLot = (vehicleType) => {
    return (dispatch) => {
        return ParkingService.getParkingDetails(vehicleType)
            .then((parkingDetails) => {
                success(dispatch, parkingDetails)
            })
            .catch((error) => failure(dispatch, error));
    };
};

export const bookParking = (vehicleType, item, vehicleNo) => {
    return (dispatch) => {
        return ParkingService.parkSlot(vehicleType, item, vehicleNo)
            .then((parkingDetails) => {
                success(dispatch, parkingDetails)
            })
            .catch((error) => failure(dispatch, error));
    };

}


const success = (dispatch, parkingDetails) => {
    dispatch({
        type: PARKING_SPACE,
        payload: parkingDetails
    });
};

const failure = (dispatch, error) => {
    dispatch({
        type: NO_PARKING,
        payload: error
    });
};

