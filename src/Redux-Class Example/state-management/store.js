import { createStore } from 'redux'
import reducers from './reducers/rootReducer'




let store = createStore(reducers)


export default store;