import { PARKING_SPACE, NO_PARKING } from '../../Constants'

const INITIAL_STATE = {
    parkingList: [],
    error: '',
};

export default parkingLot = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PARKING_SPACE:
            return { ...state, parkingList: action.payload };
        case NO_PARKING:
            return { ...state, error: action.payload };
        default:
            return state;
    };
}