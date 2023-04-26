import { useState } from "react";
import "./counter.css";

export default function Counter(){
    const [count, setCount]=useState(0);

    function increment() {
        return(
            setCount(count+1)
        )
    };

    function decrement() {
        return (
            count!==0 ?setCount(count-1) :setCount(0)
        )
    };

    return(
        <div className="counter">
            <button className="up" onClick={increment}>CLICK TO INCREASE COUNTER</button>
            <p>COUNT : {count}</p>
            <button className="down" onClick={decrement} >CLICK TO DECREASE COUNTER</button>
        </div>
    )
}