import React from "react";
import styles from "./List.module.css"
import { FaTimes } from "react-icons/fa"

function List(props) {

    function handelClick() {
        props.deleteItem(props.index)
    }

    return (
            
            <div className={styles.list}>
            {props.item}
                <div>
                <button className={styles.button}>Complete</button>
                <FaTimes className={styles.cross} onClick={handelClick}  />
                </div>
            </div>
        
    )
}

export default List;