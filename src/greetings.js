import { useState } from "react";

  export default function             Greetings(){
    const [greet, setGreet]=useState("Hello");
    function handleClick(){
        setGreet(greet+" "+"hello");
    }
    return(
        <>
        <p>{greet}</p>
        <button onClick={handleClick}>Greeting</button>
        </>
    );
  }