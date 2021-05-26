import React from 'react';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const counter = useSelector((state)=> state.counter);
    const userName = useSelector((state)=> state.userName);
    const poop = useSelector((state)=> state.poop);

    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <p>{userName}</p>
            <p>{poop}</p>
            <button onClick={()=>dispatch({type:"ADD"})}>Add</button>
            <button onClick={()=>dispatch({type:"SUBTRACT"})}>Subtract</button>

            {/* <input type="text" onChange={(e) =>
            dispatch({type: "CHANGE_POOP_TO_DUCK", value: e.target.value})}
            /> */}

        </div>
    );
}

export default Counter;
