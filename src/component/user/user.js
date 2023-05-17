import React , { useState } from 'react';
import UserInput from '../userInput/userInput';
import UserList from '../userList/userList';
import styles from './user.module.css';

function User() {
    const [userName, setUserName] = useState([]);

    function addUser(input){
        if(input!== "")
         setUserName([...userName,input]);
    }

    function deleteData(i){
        const newData=[...userName];
        newData.splice(i,1);
        setUserName([...newData]);
    }

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {
            userName.map((data,i)=>{
               return <UserList data={data} key={i} index={i} deleteData={deleteData} />
            })
        }
        <UserInput addUser={addUser} />
      </div>
    </div>
  )
}

export default User;