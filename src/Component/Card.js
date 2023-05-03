import React from "react";
import { useState } from "react";

function Card({data}){
    const [isClick, setIsClick]=useState(false)
    const{
        id,
        email,
        first_name,
        last_name,
        avatar
    }=data;
    return (
        <div>
            { !isClick ?
            <div>
            <p>{id}</p>
            <img src={avatar} />
            <h3>{first_name} {last_name}</h3>
            <h6>{email}</h6>
            </div> :
            <h3>No Users yet</h3>
            }
            <button onClick={isClick}>Get Users</button>
        </div>

    )
}

export default Card;