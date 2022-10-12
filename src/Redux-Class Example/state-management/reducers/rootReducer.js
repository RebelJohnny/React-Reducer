import {combineReducers} from 'redux'
import {countReducer} from './countReducer'
import {bookReducer} from './bookReducer'
import authReducer from './authReducer'

export default combineReducers({
    countState:countReducer,
    bookState:bookReducer,
    authState:authReducer
})