import React from "react";
import './Card.css'

function Card({data}){
    const{
        id,
        email,
        first_name,
        last_name,
        avatar
    }=data;


    return (
        <div className='container'>
            <p>id: {id}</p>
            <img src={avatar} />
            <h3>Name: {first_name} {last_name}</h3>
            <h6>Email: {email}</h6>            
        </div>

    )
}

export default Card;