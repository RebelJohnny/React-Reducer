import React from 'react'
import { useDispatch, useSelector  } from "react-redux";
import {increment, decrement,reset} from '../state-management/actions/countAction'

export const Counter = () => {

    const counter = useSelector(state => state.countState);
    const dispatch = useDispatch();

    return (
        <>
       <h1>
         Hello World <br /> A little Redux Project. 
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      </>
    )
}
