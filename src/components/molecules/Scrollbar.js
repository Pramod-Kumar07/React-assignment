import React from "react";
import ProfileCard from "../atoms/ProfileCard";
import data from "../atoms/information"

function Scrollbar(){
    return(
        data.map((details)=>
            <ProfileCard info={details} />
        )
    )
}

export default Scrollbar;