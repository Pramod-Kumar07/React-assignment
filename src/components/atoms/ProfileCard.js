import React from 'react';
import './ProfileCard.css';

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
        <div className='wrapper'>
            <img className='image' src={image} alt='DP'/>
            <h4 className='name'>{name} , {education}</h4>
            <p className='designation'>{designation} @ {organisation}</p>
            <p className='exp'>{experience}</p>
        </div>
    )
}

export default ProfileCard;