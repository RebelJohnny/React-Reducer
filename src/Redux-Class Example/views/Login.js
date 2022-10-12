import React from 'react'
import { useDispatch, useSelector  } from "react-redux";
import {logIn, logOut} from '../state-management/actions/authAction'

export const Login = () => {

    const auth = useSelector((state) => state.authState);
    const dispatch = useDispatch();

    return (
        <>
      <h2>For Logged in users only</h2>
      <p>Log in to see a secret about me</p>
      <button onClick={() => dispatch(logIn())}>Login</button>
      <button onClick={() => dispatch(logOut())}>Logout</button>
      {auth ? (
        <div>
          <p>
            I don't more than 50% of redux. But if you know 50% of it, you're like a Superman.
          </p>
        </div>
      ) : (
        ""
      )}

      </>
    )
}
