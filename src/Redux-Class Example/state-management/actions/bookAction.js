import {ADD_BOOK, REMOVE_BOOK, GET_ALL_BOOK} from './actionTypes'

export const addBook = (item) => ({
    type:ADD_BOOK,
    payload: item
})

export const removeBook = (id) => ({
    type:REMOVE_BOOK,
    payload:id
})

export const getAllBook = () => ({
    type: GET_ALL_BOOK
})