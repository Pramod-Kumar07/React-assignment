import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaHouseUser,FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import { GiMagicSwirl } from 'react-icons/gi';
import {AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiPagesFill } from 'react-icons/ri';
import { HiMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const [ toggle, setToggle ] = useState(false);
    const navigate = useNavigate();

    function handleToggle() {
        setToggle(!toggle);
    }

  return (
    <div className={styles.Navbar}>
    <div className={styles.main}>
        <div className={styles.name}>
            <h1 onClick={()=>{navigate('/')}}><span className={styles.first}>PRA</span><span className={styles.last}>MOD</span></h1>
        </div>
        <div className={styles.link_container}>
            <Link className={styles.links} to='/'><FaHouseUser/>Home</Link>
            <Link className={styles.links} to='/About'><FaUserAlt/>About</Link>
            <Link className={styles.links} to='/Skills'><GiMagicSwirl/>Skills</Link>
            <Link className={styles.links} to='/Project'><AiOutlineFundProjectionScreen/>Project</Link>
            <Link className={styles.links} to='/Contact'><FaPhoneAlt/>Contact</Link>
            <Link className={styles.links} to='/Resume'><RiPagesFill/>Resume</Link>
        </div>
        <div className={styles.toggle} onClick={handleToggle}>
            {
                !toggle ? <HiMenu/> : <RxCross2/>
            }
        </div>
    </div>
    <div>
        {
            toggle ? 
             <div className={styles.toggleContainer}>
            <Link className={styles.togglelinks} to='/'><FaHouseUser/> Home</Link>
            <Link className={styles.togglelinks} to='/About'><FaUserAlt/> About</Link>
            <Link className={styles.togglelinks} to='/Skills'><GiMagicSwirl/> Skills</Link>
            <Link className={styles.togglelinks} to='/Project'><AiOutlineFundProjectionScreen/> Project</Link>
            <Link className={styles.togglelinks} to='/Contact'><FaPhoneAlt/> Contact</Link>
            <Link className={styles.togglelinks} to='/Resume'><RiPagesFill/> Resume</Link>
            </div> 
        : ''
        }
    </div>
    </div>
  )
}

export default Navbar;