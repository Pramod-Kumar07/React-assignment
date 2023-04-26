import { useState } from "react";
import './nameUpdater.css'

export default function NameUpdater(){
    const [input, setInput]=useState("");
    const [update,setUpdate]= useState(input)

    function handleClick(){
        return(setInput(" "), setUpdate(input))
    };
    return(
        <div>
            <input type="text" value={input} placeholder="Add your name.."  onChange={(element)=>setInput(element.target.value)}/>
            <button onClick={handleClick}>Submit</button>
            <h1>Hi, My name is :{update}{input}</h1>
        </div>
    )
}
