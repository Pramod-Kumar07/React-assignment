import React, { useState } from 'react';
import styles from './Admin.module.css';

function Admin() {
    const [login, setLogin] = useState(false);
    const [adminData, setAdminData] = useState({
        name:'',
        email:'',
        password:''
    })

    const adminInfo = JSON.parse(localStorage.getItem("admin")) || [];

    function handleAdmin(){
        setLogin(!login);
    }

    function handleSignup(){
        localStorage.setItem("admin", JSON.stringify([...adminInfo, adminData]));
        setAdminData({...adminData, name:'', email:'', password:''});
    }

  return (
    <div className={styles.main}>
{!login ?
    <div className={styles.signupContainer}>
        <input className={styles.input} type='text' placeholder='Enter Name' 
        value={adminData.name} onChange={(e)=>setAdminData({...adminData, name:e.target.value})}/>

        <input className={styles.input}  type='email' placeholder='Enter Email'
        value={adminData.email} onChange={(e)=>setAdminData({...adminData, email:e.target.value})}/>

        <input className={styles.input}  type='password' placeholder='Enter Password'
        value={adminData.password} onChange={(e)=>setAdminData({...adminData, password:e.target.value})}/>
        
        <button onClick={handleSignup} className={styles.supbutton}>Sign Up</button>
        <button onClick={handleAdmin} className={styles.supbutton}>Already an Admin</button>
    </div> :
    <div className={styles.signupContainer}>
        <input className={styles.input}  type='email' placeholder='Enter Email'/>
        <input className={styles.input}  type='password' placeholder='Enter Password'/>
        <button className={styles.supbutton}>Login</button>
        <button className={styles.supbutton} onClick={handleAdmin}>New here..!</button>
    </div>
}
    </div>
  )
}

export default Admin;