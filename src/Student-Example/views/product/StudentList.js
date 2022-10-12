import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeStudent } from '../../state-management/actions/studentAction';

export const StudentList = () => {
    const books = useSelector(store => store.studentState);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>students :</h2>
          
                {books.map(item => 
                    <h5 key={item.id}>{item.name} - {item.surname} - {item.age}
                    <button onClick={() => dispatch(removeStudent(item.id))}>Remove</button></h5>
                    )}
            
        </div>
    )
}
