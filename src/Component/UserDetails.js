import React from 'react';
import { useState,useEffect } from "react";
import Card from './Card';

function UserDetails () {
    const [details, setDetails]=useState();

    useEffect(()=>{
        getData();
    },[]);

    async function getData(){
        const response = await fetch('https://reqres.in/api/users/')
        const data = await response.json()
        setDetails(data.data)
    }

    // console.log(details)
    
    

    return (
        <div>
            {
            details.map((e)=> <Card data={e} />)
        }
        </div>
    )

}

export default UserDetails;