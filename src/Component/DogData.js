import { useState,useEffect } from "react";
import './DogData.css';
import { click } from "@testing-library/user-event/dist/click";

function DogData() {
    const [image, setImage]=useState('https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80');


    useEffect(()=>{
        getData();
    },[]);

        async function getData(){
            fetch('https://dog.ceo/api/breeds/image/random')
            .then((data)=>data.json())
            .then((response)=> setImage(response.message))
            .catch((error)=>console.log(error))
    }
    

    return (
        <div>
            <img src={image} alt="dogoo :)"/>
        </div>
    )

}

export default DogData;