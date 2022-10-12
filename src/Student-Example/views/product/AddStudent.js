import React, {useRef} from 'react'
import {useDispatch} from 'react-redux'
import { addStudent } from '../../state-management/actions/studentAction';

export const AddStudent = () => {
    const dispatch = useDispatch();
    const id = useRef();
    const name = useRef();
    const surname = useRef();
    const age = useRef();
    var nextid = 8;

    const add = () => {
        let item = {};
        item.id = nextid;
        item.name = name.current.value;
        item.surname = surname.current.value;
        item.age = age.current.value;
        console.log(item);
        dispatch(addStudent(item));
        nextid+=1;

    }

    return (
        <div>
            <h2>Create New Student</h2>
     
            <div>
                Name : <input ref={name}/>
            </div>
            <div>
                Surname : <input ref={surname}/>
            </div>
            <div>
                Age : <input ref={age}/>
            </div>
            <button onClick={() => add()}>Add Student</button>
        </div>
    )
}
