import logo1 from "../imgs/Gujarat_Police_Logo.png";

//import { useNavigate } from "react-router-dom"; 

import "./Otp.css";
import React from "react";




const Otp = () => {

    const handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
          [name]: value
        })
      }
   const onSubmitOTP = (e) => {
        e.preventDefault()
        const code = this.state.otp
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user))
          alert("User is verified")
          window.location = '/feedbackcitizen';
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
      }
 

  return (
    <div>
      <div className="startt">
        <div className="first">
        <h1><img src={logo1} alt="" /></h1>
          <h2>Welcome To Our Portal</h2>

          <h3>Enter OTP</h3>
          <h4 >OTP Sent to/ओटीपी भेजा गया <span id="mobile"></span><br /><span ><span id="mobile"></span></span> </h4>
          <form onSubmit={onSubmitOTP.bind(this)}>
          
            <input class="input" type="text" name="otp" placeholder="OTP Number"  required onChange={handleChange} />      
        <button type="submit">Submit</button>
       
          </form> </div>
      </div>
    </div>
  )
}

export default Otp