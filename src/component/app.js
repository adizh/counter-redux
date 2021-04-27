import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement,reset} from "../actions";

const App = () => {
const counter=useSelector(s=>s.counter)
    const dispatch=useDispatch()
    return (
        <div>
            {counter}
            <button onClick={()=>dispatch(increment(5))}>add</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
            <p>hello.world</p>
        </div>
    );
};

export default App;