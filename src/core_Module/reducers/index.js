import { combineReducers } from 'redux'
import parking from './parkingLot'
import parked from './parkedLot'

const parkingApp = combineReducers({
    parking,
    parked
})

export default parkingApp