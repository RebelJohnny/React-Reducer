import { createStore } from 'redux'
import reducers from './state-management/reducers/rootReducer'

let store = createStore(reducers)

export default store;