import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const names = useSelector((state)=> state.names);
   

    const dispatch = useDispatch();
    return (
        <div>
            <h1>Set Array</h1>
            <p>{names}</p>
            <button type="text" onClick={(e) =>
            dispatch({type: "CHANGE_NAMES", value: e.target.value})}>Switch</button>
        </div>
    );
}

export default Counter;
