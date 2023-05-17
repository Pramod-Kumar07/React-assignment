import React from 'react';
import styles from './userInput.module.css';

function UserList(props) {

    function handleDelete() {
      props.deleteData(props.index);
    }
  return (
    <div className={styles.UserList}>
        {props.data}
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default UserList;