import React, {useRef} from 'react'
import {useDispatch} from 'react-redux'
import {addBook} from '../../state-management/actions/bookAction'

export const AddBook = () => {
    const dispatch = useDispatch();
    const id = useRef();
    const title = useRef();
    const price = useRef();

    const add = () => {
        let item = {};
        item.id =5;
        item.title = title.current.value;
        item.price = price.current.value;
        console.log(item);
        dispatch(addBook(item));
    }

    return (
        <div>
            <h2>Create New Book</h2>
     
            <div>
                Title : <input ref={title}/>
            </div>
            <div>
                Price : <input ref={price}/>
            </div>
            <button onClick={() => add()}>AddBook</button>
        </div>
    )
}
