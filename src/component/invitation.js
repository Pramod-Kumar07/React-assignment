import React from 'react'

export default function Invitation(props){
    return(
        <div>
        <p>Subject : {props.invite}  
        <br/>              
        To : {props.email}
        </p>
        
        <p>Hi , {props.name}</p>
        
        <p> I am having a {props.title} next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them - {props.invitee} .
        <br/><br/>
        My house is behind our school , near {props.venue} .
        <br/><br/>
        I hope you will come and see you soon .</p>    
        
        <p>from ,<br/>
        {props.name}</p>

     </div>
    )
}