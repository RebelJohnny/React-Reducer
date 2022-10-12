import {ADD_BOOK, GET_ALL_BOOK, REMOVE_BOOK} from '../actions/actionTypes'

const init = [
    {id:1, title:'React Learning', price:50},
    {id:2, title:'Angular Learning', price:20},
];

export const bookReducer = function(state=init, action){
    switch (action.type) {
        case GET_ALL_BOOK:
            return [...state];
        case ADD_BOOK:
            return [...state, action.payload];
        case REMOVE_BOOK:
            return [...state.filter(q => q.id != action.payload)]
        default:
            return state;
    }
}