import React, {useState, useEffect }from "react";
import styles from "./List.module.css"
import { FaTimes } from "react-icons/fa"

function List(props) {
    const [isClick, setIsClick]= useState(false);

    function handleComplete(){
        setIsClick(!isClick);
    }


    function handelClick() {
        props.deleteItem(props.index);
    }

    return (
            <div className={styles.wrapper}>
            <div className={!isClick ? styles.list : styles.strike}>
            {props.item}
            </div>
                <div className={styles.container}>
                <button onClick={handleComplete} className={styles.complete}>{!isClick ? 'Complete' : 'Completed'}</button>
                <FaTimes className={styles.button} onClick={handelClick}  />
                </div>
            </div>
        
    )
}

export default List;