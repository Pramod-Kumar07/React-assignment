import React from 'react';
import { useState,useEffect } from "react";
import Card from './Card';

function UserDetails () {
    const [details, setDetails]=useState([]);
    const [isClick, setIsClick]=useState(false)

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        const response = await fetch('https://reqres.in/api/users/')
        const data = await response.json()
        setDetails(data.data)
    }      


    function handleClick(){
        setIsClick(!isClick)
    }

    const mystyle = {
        padding: "10px",
        fontFamily: "Arial",
        fontWeight: "bolder",
        fontSize: "large",
        width: "300px",
        height: "50px",
        borderRadius: "20px"
      };


    return (
        <div>        
        {
        isClick ?
            details.map((e)=> <Card data={e} />) :
        <h3>No Data available yet</h3>
        }        
        <button style={mystyle} onClick={handleClick}>Get User</button>
        </div>
    )

}

export default UserDetails;