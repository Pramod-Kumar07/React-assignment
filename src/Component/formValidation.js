import React, { useState} from "react";

export default function Form(){
    let [input, setInput]= useState("")
    function handleClick(){
        alert("Hi"+" "+ input);
    }
    return(
        <div>
            <input type="text" value={input} onChange={(element)=> setInput(element.target.value)} />
            <button onClick={handleClick}> Click Plz </button>
            {input}   
            {/* to display input */}
        </div>
    )
}