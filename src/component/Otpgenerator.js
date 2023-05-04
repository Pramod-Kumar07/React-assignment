import React from "react";
import { useState } from "react";
import './Otpgenerator.css'

function Otpgenerator(){
    const [mobileNo, setMobileNo]= useState();


    function getOtp() {
        const mobileNoRegex=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
        if(!mobileNoRegex.test(mobileNo)){
            alert('Invalid Mobile Number! Please Enter Valid Mobile Number..');
            return;
        }  
        fetch('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({mobile: parseInt(mobileNo)})
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error('Failed to send OTP');
            }
            setMobileNo('');
            alert('OTP sent successfully!..');
        })
        .catch((error)=>alert(error.message));
    }


    return(
        <div>
            <input 
                className="mbn"
                type="tel" 
                placeholder="enter mobile number..." 
                value={mobileNo}
                onChange={(e)=>setMobileNo(e.target.value)}
            />
            <button className="btn" onClick={getOtp} >
                Get OTP
            </button>
        </div>
    )
}

export default Otpgenerator;