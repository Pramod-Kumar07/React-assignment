import React from 'react'
import "./Invitation.css"

export function Invitation(props){

    return(
        <div className='invitation'>
        <p>Subject : <span>{props.subject}</span></p>
        <p>To : <span>{props.to}</span></p>
         <br />
        <p>Hi , <span>{props.name1}</span></p>
        <br />
        <p> I am having a <span>{props.birthdayParty}</span> next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them - <span>{props.namesAll}</span></p>
        <br />
        <p>My house is behind our school , near <span>{props.GreenField}</span> .</p>
        <br />
        <p> I hope you will come and see you soon .</p>
        <br />
        <p>from ,</p>

        <p><span>{props.name2}</span></p>
        </div>
    )
}