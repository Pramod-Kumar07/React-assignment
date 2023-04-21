import React from 'react';
import './invitation.css'


export default function Invitation(props){
    return(
        <div className='invitation'>
        <p>Subject : <span>{props.subject}</span>
        <br/>              
        To : <span>{props.email}</span>
        </p>
        
        <p>Hi , <span>{props.name}</span></p>
        
        <p> I am having a <span>{props.title} </span>next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them -<span>{props.invitee}</span>.
        <br/><br/>
        My house is behind our school , near <span> {props.venue}</span>.
        <br/><br/>
        I hope you will come and see you soon .</p>    
        
        <p>from ,<br/>
        <span>{props.name}</span></p>

     </div>
    )
}