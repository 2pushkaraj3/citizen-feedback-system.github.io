import logo from "./image/Gujarat_Police_Logo.png";
import React from 'react'
import firebase from './firebase'
//const logo = require('./image/Gujarat_Police_Logo.png');
//import img1 from './image/Gujarat_Police_Logo'
import "./App.css"
//import { Link } from "react-router-dom";
//import Feedbackcitizen from './component/feedback/Feedbackcitizen';
class App extends React.Component {
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
        console.log("Recaptca varified")
      },
      defaultCountry: "IN"
    });
  }
  onSignInSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent")
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("SMS not sent")
      });
  }
  onSubmitOTP = (e) => {
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user))
      alert("User is verified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }


  render() {
    return (
      <div className="sec">

        <div className="first">
          <h3><img src={logo} alt="" /></h3>
          <h2>Welcome To Our</h2>

          <form onSubmit={this.onSignInSubmit}>
            <div id="sign-in-button"></div>
            <div className="body_colo"></div>

            <p>Thanks for giving feedback<br />પ્રતિસાદ આપવા બદલ આભાર</p>
            <fieldset id="dff">
              <label htmlFor="name">Mobile Number<br />મોબાઇલ નંબર:</label>

              <input type="number" name="mobile" placeholder="Mobile number" required onChange={this.handleChange} />
              <button type="submit">Submit</button>
            </fieldset>
          </form>

          <h2>Enter OTP</h2>
          <form onSubmit={this.onSubmitOTP}>
            <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange} />

            <button type="submit">Submit</button>
            
           
           
          </form>
        </div>
      </div>



    )

  }
}
export default App
