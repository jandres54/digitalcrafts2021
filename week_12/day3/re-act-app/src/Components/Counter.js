import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const counter = useSelector((state)=> state.counter);

    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={()=>dispatch({type:"ADD"})}>Add</button>
            <button onClick={()=>dispatch({type:"SUBTRACT"})}>Subtract</button>

        </div>
    );
}

export default Counter;
