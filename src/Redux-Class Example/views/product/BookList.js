import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeBook } from "../../state-management/actions/bookAction";

export const BookList = () => {
    const books = useSelector(store => store.bookState);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>books :</h2>
          
                {books.map(item => 
                    <h5 key={item.id}>{item.title} - {item.price} - 
                    <button onClick={() => dispatch(removeBook(item.id))}>Remove</button></h5>
                    )}
            
        </div>
    )
}
