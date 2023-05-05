import axios from "axios";
import React, { useState, useEffect } from "react";
import './ImageChange.css';


export default function ImageChange() {
    const [image, setImage]=useState('');

    useEffect(()=>{
        dogImage();
        // axios.get('https://dog.ceo/api/breeds/image/random')
        // .then((response)=>{
        //     // console.log(response)
        //     setImage(response.data.message)
        // })
        // .catch((error)=>console.log(error.message))
    },[])

    const dogImage= async ()=>{
        const response= await axios.get('https://dog.ceo/api/breeds/image/random')
        console.log(response)
        setImage(response.data.message);
    }

    return(
        <div>
            <img src={image}   />
        </div>

    )
}