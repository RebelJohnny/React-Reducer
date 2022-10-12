import { ADD_STUDENT, GET_ALL_STUDENT, REMOVE_STUDENT } from "../actions/actionTypes";

const init = [
    {id:1, name:'Pooya', surname:"Khodabakhshi", age:19},
    {id:2, name:'Arian', surname:"Ata", age:20},
    {id:3, name:'Mohammad Mahdi', surname:"Fereidooni", age:22},
    {id:4, name:'Mahan', surname:"Asadi", age:22},
    {id:5, name:'Kimia', surname:"Tasdiq Moghaddam", age:22},
    {id:6, name:'Amir Ali', surname:"Ghafourian", age:23},
    {id:7, name:'Kasra', surname:"Belarak", age:24},
];

export const studentReducer = function(state=init, action){
    switch (action.type) {
        case GET_ALL_STUDENT:
            return [...state];
        case ADD_STUDENT:
            return [...state, action.payload];
        case REMOVE_STUDENT:
            return [...state.filter(q => q.id != action.payload)]
        default:
            return state;
    }
}