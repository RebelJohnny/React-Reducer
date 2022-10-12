import { studentReducer } from "./studentReducer";
import {combineReducers} from 'redux'

export default combineReducers({
    studentState:studentReducer
})