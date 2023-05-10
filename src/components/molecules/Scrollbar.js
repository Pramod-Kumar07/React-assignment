import React from "react";
import ProfileCard from "../atoms/ProfileCard";
import data from "../atoms/information";
import styles from './Scrollbar.module.css';

function Scrollbar(){
    return(
        <div className={styles.main}>
        <div className={styles.container}>
        {data.map((details)=>
            <ProfileCard info={details} />
        )}
        </div>
        </div>
    )
}

export default Scrollbar;