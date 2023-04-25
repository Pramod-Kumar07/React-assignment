import React from "react";

export default function CssProps(props){
    return(
        <div>
            <h1 style={{backgroundColor:props.mycolor}}>{props.name}</h1>
        </div>
    )
}