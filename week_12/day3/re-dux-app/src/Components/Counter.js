import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const userName = useSelector((state)=> state.userName);
    
    const dispatch = useDispatch();
    return (
        <div>
            <h1>User</h1>
            <p>{userName}</p>
            <button type="text" onClick={(e) =>
            dispatch({type: "CHANGE_JORGE_TO_JOE", value: e.target.value})}>Switch</button>
        </div>
    );
}

export default Counter;
