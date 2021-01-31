import { PARKED_SPACE, NO_PARKING } from '../../Constants'

const INITIAL_STATE = {
    parkedList: [],
    error: '',
};

export default parkingLot = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PARKED_SPACE:
            return { ...state, parkedList: action.payload };
        case NO_PARKING:
            return { ...state, error: action.payload };
        default:
            return state;
    };
}