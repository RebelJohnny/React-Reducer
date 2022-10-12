import { ADD_STUDENT, GET_ALL_STUDENT, REMOVE_STUDENT } from "./actionTypes"

export const addStudent = (item) => ({
    type:ADD_STUDENT,
    payload: item
})

export const removeStudent = (id) => ({
    type:REMOVE_STUDENT,
    payload:id
})

export const getAllStudent = () => ({
    type: GET_ALL_STUDENT
})