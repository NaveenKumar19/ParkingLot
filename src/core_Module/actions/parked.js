import ParkedService from '../service/ParkedService';
import { PARKED_SPACE, NO_PARKING } from '../../Constants';

export const fetchparkedLot = () => {
    return (dispatch) => {
        return ParkedService.getParkedDetails()
            .then((parkedDetails) => {
                parked(dispatch, parkedDetails)
            })
            .catch((error) => failure(dispatch, error));
    };

}

export const unpark = (item) => {
    return (dispatch) => {
        return ParkedService.unpark(item)
            .then((parkedDetails) => {
                parked(dispatch, parkedDetails)
            })
            .catch((error) => failure(dispatch, error));
    };
}

const parked = (dispatch, parkedDetails) => {
    dispatch({
        type: PARKED_SPACE,
        payload: parkedDetails
    });
};

const failure = (dispatch, error) => {
    dispatch({
        type: NO_PARKING,
        payload: error
    });
};