import React from 'react';
import styles from './ProfileCard.module.css';

function ProfileCard({info}){
    const {
        image,
        name,
        education,
        designation,
        organisation,
        experience
    } = info;
    return(
        <div className={styles.card}>
            <img className={styles.image} src={image} alt='DP'/>
            <h4 className={styles.name}>{name} , {education}</h4>
            <p className={styles.designation}>{designation} @ {organisation}</p>
            <p className={styles.exp}>{experience}</p>
        </div>
    )
}

export default ProfileCard;